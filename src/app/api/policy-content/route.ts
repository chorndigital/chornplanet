import {NextResponse} from "next/server";
import {authorize, unauthorized} from "@/utils/authorize";
import {
    deletePolicyContent,
    getAllPolicyContent,
    getPolicyContent,
    upsertPolicyContent,
} from "@/lib/policy-content/policyContent.service";
import {PartialPolicyContentPayload} from "@/core/domain/policy-content.entity";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const locale = searchParams.get('locale');

    try {
        if (locale) {
            const content = await getPolicyContent(locale);
            return NextResponse.json(content, {status: 200});
        }

        const items = await getAllPolicyContent();
        return NextResponse.json(items, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function POST(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialPolicyContentPayload;
        const savedContent = await upsertPolicyContent(payload);
        return NextResponse.json(savedContent, {status: 201});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}

export async function PUT(req: Request) {
    if (!authorize(req)) return unauthorized();

    try {
        const payload = await req.json() as PartialPolicyContentPayload;
        const savedContent = await upsertPolicyContent(payload);
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
        await deletePolicyContent(locale);
        return NextResponse.json({locale, deleted: true}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
