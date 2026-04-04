// app/sitemap.ts

import {MetadataRoute} from "next";
import {UrlMaps} from "@/lib/UrlMaps";
import {LOCALES, SITE_URL} from "@/lib/SiteUrlLocales";
import {getSmartCityLandingData} from "@/data/smart-city-landing/getSmartCityLandingData";
import {IImagePath} from "@/lib/model/IImagePath";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const entries: MetadataRoute.Sitemap = [];

    // smart-city/[slug] — deduplicate slugs, only iterate one locale for keys
    const smartCitySlugs = Object.keys(getSmartCityLandingData({lang: 'en'}));
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