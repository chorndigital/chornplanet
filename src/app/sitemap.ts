// app/sitemap.ts

import {MetadataRoute} from "next";
import {UrlMaps} from "@/lib/UrlMaps";
import {LOCALES, SITE_URL} from "@/lib/SiteUrlLocales";
import {IImagePath} from "@/lib/model/IImagePath";
import {getAllSmartCityLandingContent} from "@/lib/smart-city-landing-content/smartCityLandingContent.service";
import {getAllSmartCityChiangMaiContent} from "@/lib/smart-city-chiang-mai-content/smartCityChiangMaiContent.service";

function getUniqueSlugs(items: Array<{ slug?: string }>): string[] {
    return Array.from(new Set(items.map(item => item.slug).filter(Boolean))) as string[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();
    const entries: MetadataRoute.Sitemap = [];

    // smart-city/chiang-mai/[slug]
    const smartCityChiangMaiSlugs = getUniqueSlugs(await getAllSmartCityChiangMaiContent());
    for (const locale of LOCALES) {
        for (const slug of smartCityChiangMaiSlugs) {
            entries.push({
                url: `${SITE_URL}/${locale}/smart-city/chiang-mai/${slug}/`,
                lastModified,
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    // smart-city/[slug] — deduplicate slugs, only iterate one locale for keys
    const smartCitySlugs = getUniqueSlugs(await getAllSmartCityLandingContent());
    for (const locale of LOCALES) {
        for (const slug of smartCitySlugs) {
            entries.push({
                url: `${SITE_URL}/${locale}/smart-city/${slug}/`,
                lastModified,
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    // all routes
    for (const urlMap of UrlMaps) {
        for (const locale of LOCALES) {
            // Normalise: ensure exactly one trailing slash
            const path = urlMap.url ? urlMap.url : '/';
            entries.push({
                url: `${SITE_URL}/${locale}${path}`,
                lastModified,
                priority: 0.8,
                images: urlMap.images?.map(
                    (image: IImagePath) => `${SITE_URL}${image.path}`
                ),
            });
        }
    }

    return entries;
}
