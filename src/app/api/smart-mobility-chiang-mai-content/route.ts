import {NextResponse} from "next/server";
import {authorize, unauthorized} from "@/utils/authorize";
import {
    deleteSmartMobilityChiangMaiContent,
    getAllSmartMobilityChiangMaiContent,
    getSmartMobilityChiangMaiContent,
    upsertSmartMobilityChiangMaiContent,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import {PartialSmartMobilityChiangMaiContentPayload} from "@/core/domain/smart-mobility-chiang-mai-content.entity";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');
    const slug = searchParams.get('slug');

    try {
        if (locale && slug) {
            const content = await getSmartMobilityChiangMaiContent(locale, slug);
            return NextResponse.json(content, {status: 200});
        }

        const items = await getAllSmartMobilityChiangMaiContent();
        return NextResponse.json(items, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function POST(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialSmartMobilityChiangMaiContentPayload;
        const savedContent = await upsertSmartMobilityChiangMaiContent(payload);
        return NextResponse.json(savedContent, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function PUT(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialSmartMobilityChiangMaiContentPayload;
        const savedContent = await upsertSmartMobilityChiangMaiContent(payload);
        return NextResponse.json(savedContent, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function DELETE(req: Request) {
    if (!authorize(req)) return unauthorized();

    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');
    const slug = searchParams.get('slug');

    if (!locale || !slug) {
        return NextResponse.json({error: 'locale and slug are required'}, {status: 400});
    }

    try {
        await deleteSmartMobilityChiangMaiContent(locale, slug);
        return NextResponse.json({locale, slug, deleted: true}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
