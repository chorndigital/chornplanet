// next.config.mjs

async function redirectIncorrectPublic() {
    const locales = ['th', 'en', 'fr', 'ja', 'zh', 'de', 'nl', 'da', 'fi', 'ko']
    const items = [{source: '/na/:path*', destination: '/da/:path*', permanent: true}, {
        source: `/public/`, destination: '/en', permanent: true
    }]

    for (const locale of locales) {
        items.push({
            source: `/public${locale}/`, destination: `/${locale}`, permanent: true,
        })
    }

    return items
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, basePath: '', // Add the base path if your app is hosted in a subpath

    async headers() {
        return [
            {
                source: "/images/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/smart-mobility/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/smart-city/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/images-opengraph/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400"
                }]
            }
        ]
    },

    images: {
        unoptimized: true, remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.chorndigital.com'
            },
            {
                protocol: "https",
                hostname: "scdn.line-apps.com",
            },
        ], minimumCacheTTL: 31536000, qualities: [80],
    },

    // Use rewrite for OpenGraph images only
    async rewrites() {
        return [
            {
                source: '/images-opengraph/smart-mobility/:path*',
                destination: 'https://cdn.chorndigital.com/smart-mobility/:path*'
            },
            {
                source: '/images-opengraph/smart-city/:path*',
                destination: 'https://cdn.chorndigital.com/smart-mobility/:path*'
            },
            {
                source: '/images-opengraph/:path*',
                destination: 'https://cdn.chorndigital.com/images-opengraph/:path*'
            },
        ];
    },

    // Use redirects for general images
    async redirects() {
        return [
            {
                source: '/images/:path*',
                destination: 'https://cdn.chorndigital.com/images/:path*',
                permanent: true,
            },

            // Smart Mobility
            {
                source: '/:lang/smart-mobility/',
                destination: '/:lang/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway',
                permanent: true,
            },
            {
                source: '/smart-mobility/:path*',
                destination: 'https://cdn.chorndigital.com/smart-mobility/:path*',
                permanent: true,
            },

            // Smart City
            {
                source: '/:lang/smart-city/',
                destination: '/:lang/smart-city/chiang-mai/when-human-flow-aligns-with-system-flow/',
                permanent: true,
            },
            {
                source: '/smart-city/:path*',
                destination: 'https://cdn.chorndigital.com/smart-city/:path*',
                permanent: true,
            },

            // Technology
            {
                source: '/:lang/technology/',
                destination: '/:lang/technical-expertise/web-development/',
                permanent: true,
            },

            // AI Integration
            {
                source: '/:lang/ai-integration/',
                destination: '/:lang/ai-companions/fah/',
                permanent: true,
            },

            //  About
            {
                source: '/:lang/about/',
                destination: '/:lang/about-chorn/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;