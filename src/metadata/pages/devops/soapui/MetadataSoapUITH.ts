import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUITH: Metadata = {
    title: "บริการทดสอบ SoapUI | Chorn Planet",
    description: "ความเชี่ยวชาญด้านการทดสอบ SoapUI เพื่อให้แน่ใจว่า API และความเชี่ยวชาญทางเทคนิคเว็บของคุณได้รับการทดสอบอย่างทั่วถึงและเชื่อถือได้",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "การทดสอบ SoapUI | Chorn Planet",
        description: "มั่นใจในความน่าเชื่อถือของ API และความเชี่ยวชาญทางเทคนิคเว็บของคุณด้วยความเชี่ยวชาญด้านการทดสอบ",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ SoapUI | Chorn Planet",
        description: "เพิ่มประสิทธิภาพการทดสอบ API ของคุณด้วยความเชี่ยวชาญด้าน SoapUI เพื่อการทดสอบบริการเว็บที่ครอบคลุมและเชื่อถือได้",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "การทดสอบ SoapUI", "การทดสอบ API", "Chorn Planet", "Cloud DevOps",
        "การทดสอบบริการเว็บ", "การทดสอบที่เชื่อถือได้", "ระบบอัตโนมัติในการทดสอบ",
        "การประกันคุณภาพ", "การทดสอบซอฟต์แวร์", "ความน่าเชื่อถือของ API",
        "ความเชี่ยวชาญด้านการทดสอบในประเทศไทย", "ความเชี่ยวชาญด้าน SoapUI", "การทดสอบเว็บแอปพลิเคชัน"
    ]
}