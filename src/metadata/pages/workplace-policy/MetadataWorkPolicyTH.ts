import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyTH: Metadata = {
    title: "นโยบายการทำงาน | Chorn Planet",
    description: "Chorn Planet ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.th, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "นโยบายการทำงาน | Chorn Planet",
        description: "Chorn Planet ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
        images: metadataLink(LanguageCode.th, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "นโยบายการทำงาน | Chorn Planet",
        description: "Chorn Planet ปรับตัวเพื่อรองรับการทำงานหลายรูปแบบเช่น ทำงานระยะไกล ในสำนักงาน และแบบผสมผสาน โดยปรับให้เข้ากับความต้องการเฉพาะของแต่ละโครงการ แนวทางนี้ช่วยให้มั่นใจได้ถึงการสื่อสารที่ราบรื่น ประสิทธิภาพ",
        images: metadataLink(LanguageCode.th, MetaLinks.workplacePolicy).twitter.images,
    },
}