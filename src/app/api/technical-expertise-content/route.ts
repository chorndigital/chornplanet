import {NextResponse} from "next/server";
import {authorize, unauthorized} from "@/utils/authorize";
import {
    deleteTechnicalExpertiseContent,
    getAllTechnicalExpertiseContent,
    getTechnicalExpertiseContent,
    upsertTechnicalExpertiseContent,
} from "@/lib/technical-expertise-content/technicalExpertiseContent.service";
import {PartialTechnicalExpertiseContentPayload} from "@/core/domain/technical-expertise-content.entity";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');

    try {
        if (locale) {
            const content = await getTechnicalExpertiseContent(locale);
            return NextResponse.json(content, {status: 200});
        }

        const items = await getAllTechnicalExpertiseContent();
        return NextResponse.json(items, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function POST(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialTechnicalExpertiseContentPayload;
        const savedContent = await upsertTechnicalExpertiseContent(payload);
        return NextResponse.json(savedContent, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function PUT(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialTechnicalExpertiseContentPayload;
        const savedContent = await upsertTechnicalExpertiseContent(payload);
        return NextResponse.json(savedContent, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function DELETE(req: Request) {
    if (!authorize(req)) return unauthorized();

    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');

    if (!locale) {
        return NextResponse.json({error: 'locale is required'}, {status: 400});
    }

    try {
        await deleteTechnicalExpertiseContent(locale);
        return NextResponse.json({locale, deleted: true}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
