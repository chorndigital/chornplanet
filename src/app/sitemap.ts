// app/sitemap.ts

import {MetadataRoute} from "next";
import {UrlImageMaps} from "@/lib/UrlImageMaps";
import {LOCALES, SITE_URL} from "@/lib/SiteUrlLocales";
import {getSmartCityLandingData} from "@/data/smart-city-landing/getSmartCityLandingData";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const entries: MetadataRoute.Sitemap = [];

    // smart-city/[slug}
    for (const locale of LOCALES) {
        const dataMap = getSmartCityLandingData({lang: locale});
        const slugs = Object.keys(dataMap);

        for (const slug of slugs) {
            entries.push({
                url: `${SITE_URL}/${locale}/smart-city/${slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    // all routes
    for (const map of UrlImageMaps) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${SITE_URL}/${locale}${map.url}`,
                lastModified,
                priority: 0.8,
                images: map.images?.map(
                    (img) => `${SITE_URL}${img}`
                ),
            });
        }
    }

    return entries;
}