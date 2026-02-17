// app/sitemap.ts

import {MetadataRoute} from "next";
import {UrlImageMaps} from "@/lib/UrlImageMaps";
import {LOCALES, SITE_URL} from "@/lib/SiteUrlLocales";
import {getSmartCityLandingData} from "@/data/smart-city-landing/getSmartCityLandingData";
import {IImagePath} from "@/lib/model/IImagePath";

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
                lastModified,
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    // all routes
    for (const urlImageMap of UrlImageMaps) {
        for (const locale of LOCALES) {
            entries.push({
                url: `${SITE_URL}/${locale}${urlImageMap.url}`,
                lastModified,
                priority: 0.8,
                images: urlImageMap.images?.map(
                    (image: IImagePath) => `${SITE_URL}${image.path}`
                ),
            });
        }
    }

    return entries;
}