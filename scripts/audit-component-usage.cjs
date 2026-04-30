const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const appRoot = path.join(projectRoot, 'src', 'app', '[locale]', '(desktop)');
const componentsRoot = path.join(projectRoot, 'src', 'components');

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const importPattern = /(?:import\s+(?:type\s+)?[\s\S]*?\s+from\s+|import\s*\()\s*["']([^"']+)["']/g;

function toPosix(relativePath) {
    return relativePath.split(path.sep).join('/');
}

function readText(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function walkFiles(directory, predicate = () => true) {
    const results = [];

    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            results.push(...walkFiles(fullPath, predicate));
            continue;
        }

        if (predicate(fullPath)) {
            results.push(fullPath);
        }
    }

    return results;
}

function isSourceFile(filePath) {
    return extensions.includes(path.extname(filePath));
}

function resolveFile(basePath) {
    if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) {
        return basePath;
    }

    for (const extension of extensions) {
        const candidate = `${basePath}${extension}`;
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            return candidate;
        }
    }

    if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        for (const extension of extensions) {
            const candidate = path.join(basePath, `index${extension}`);
            if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
                return candidate;
            }
        }
    }

    return null;
}

function resolveImport(fromFile, specifier) {
    if (specifier.startsWith('@/')) {
        const subPath = specifier.slice(2);
        const roots = ['src', 'server', 'backend'];

        for (const root of roots) {
            const resolved = resolveFile(path.join(projectRoot, root, subPath));
            if (resolved) {
                return resolved;
            }
        }

        return null;
    }

    if (specifier.startsWith('.')) {
        return resolveFile(path.resolve(path.dirname(fromFile), specifier));
    }

    return null;
}

function getImports(filePath) {
    const source = readText(filePath);
    const imports = [];
    let match;

    importPattern.lastIndex = 0;
    while ((match = importPattern.exec(source)) !== null) {
        const resolved = resolveImport(filePath, match[1]);
        if (resolved && isSourceFile(resolved)) {
            imports.push(resolved);
        }
    }

    return imports;
}

function traceReachable(entryFiles) {
    const visited = new Set();
    const stack = [...entryFiles];

    while (stack.length > 0) {
        const filePath = stack.pop();
        if (!filePath || visited.has(filePath)) {
            continue;
        }

        visited.add(filePath);

        for (const imported of getImports(filePath)) {
            if (!visited.has(imported)) {
                stack.push(imported);
            }
        }
    }

    return visited;
}

function componentInfo(filePath, reachableFiles) {
    const source = readText(filePath);
    const relative = toPosix(path.relative(projectRoot, filePath));

    return {
        relative,
        active: reachableFiles.has(filePath),
        usesInfoTranslation: source.includes('InfoTranslation'),
        importsMongoInfra: source.includes('@/infrastructure/db/infra.mongodb') ||
            source.includes('@/server/infrastructure/db/infra.mongodb'),
    };
}

function formatLog(title, entries, summary) {
    const lines = [
        `# ${title}`,
        `Generated: ${new Date().toISOString()}`,
        '',
        `Total: ${entries.length}`,
        `Uses InfoTranslation: ${summary.infoTranslation}`,
        `Imports Mongo infra directly: ${summary.mongoInfra}`,
        '',
    ];

    for (const entry of entries) {
        const markers = [
            entry.usesInfoTranslation ? 'hardcode=InfoTranslation' : 'hardcode=no',
            entry.importsMongoInfra ? 'mongoInfra=direct' : 'mongoInfra=no',
        ];
        lines.push(`${entry.relative} | ${markers.join(' | ')}`);
    }

    lines.push('');
    return lines.join('\n');
}

function summarize(entries) {
    return {
        infoTranslation: entries.filter((entry) => entry.usesInfoTranslation).length,
        mongoInfra: entries.filter((entry) => entry.importsMongoInfra).length,
    };
}

function main() {
    const entryFiles = walkFiles(appRoot, isSourceFile);
    const reachableFiles = traceReachable(entryFiles);
    const componentFiles = walkFiles(componentsRoot, isSourceFile)
        .sort((a, b) => a.localeCompare(b));

    const entries = componentFiles.map((filePath) => componentInfo(filePath, reachableFiles));
    const active = entries.filter((entry) => entry.active);
    const inactive = entries.filter((entry) => !entry.active);

    fs.writeFileSync(
        path.join(projectRoot, 'hardcode-components-active.log'),
        formatLog('Active src/components files reachable from src/app/[locale]/(desktop)', active, summarize(active)),
        'utf8'
    );

    fs.writeFileSync(
        path.join(projectRoot, 'hardcode-components-inactive.log'),
        formatLog('Inactive src/components files not reachable from src/app/[locale]/(desktop)', inactive, summarize(inactive)),
        'utf8'
    );

    console.log(JSON.stringify({
        entries: entryFiles.length,
        components: entries.length,
        active: active.length,
        inactive: inactive.length,
        activeInfoTranslation: summarize(active).infoTranslation,
        inactiveInfoTranslation: summarize(inactive).infoTranslation,
    }, null, 2));
}

main();
