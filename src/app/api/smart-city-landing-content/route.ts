import {NextResponse} from "next/server";
import {authorize, unauthorized} from "@/utils/authorize";
import {
    deleteSmartCityLandingContent,
    getAllSmartCityLandingContent,
    getSmartCityLandingContent,
    upsertSmartCityLandingContent,
} from "@/lib/smart-city-landing-content/smartCityLandingContent.service";
import {PartialSmartCityLandingContentPayload} from "@/core/domain/smart-city-landing-content.entity";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');
    const slug = searchParams.get('slug');

    try {
        if (locale && slug) {
            const content = await getSmartCityLandingContent(locale, slug);
            return NextResponse.json(content, {status: 200});
        }

        const items = await getAllSmartCityLandingContent();
        return NextResponse.json(items, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function POST(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialSmartCityLandingContentPayload;
        const savedContent = await upsertSmartCityLandingContent(payload);
        return NextResponse.json(savedContent, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function PUT(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialSmartCityLandingContentPayload;
        const savedContent = await upsertSmartCityLandingContent(payload);
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
        await deleteSmartCityLandingContent(locale, slug);
        return NextResponse.json({locale, slug, deleted: true}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
