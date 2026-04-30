import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeTH: Metadata = {
    title: "บริการ DevOps Kubernetes | Chorn Planet",
    description: "ความเชี่ยวชาญทางเทคนิคด้าน DevOps โดยใช้ Kubernetes เพื่อการติดตั้ง, การขยาย และการจัดการแอปพลิเคชันที่ใช้คอนเทนเนอร์อัตโนมัติ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "บริการ DevOps Kubernetes | Chorn Planet",
        description: "เพิ่มประสิทธิภาพโครงสร้างพื้นฐานของคุณด้วยความเชี่ยวชาญทางเทคนิค DevOps โดยใช้ Kubernetes สำหรับการขยายและการจัดการแอปพลิเคชันแบบอัตโนมัติ",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ DevOps Kubernetes | Chorn Planet",
        description: "ใช้ความเชี่ยวชาญ DevOps ของ Kubernetes เพื่อการจัดการและการขยายแอปพลิเคชันที่ใช้คอนเทนเนอร์อัตโนมัติ",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "ความเชี่ยวชาญทางเทคนิค Kubernetes", "การจัดการคอนเทนเนอร์", "Chorn Planet", "DevOps",
        "การจัดการแอปพลิเคชันที่ขยายได้", "การขยายอัตโนมัติ", "DevOps ประเทศไทย", "แอปพลิเคชันคลาวด์เนทีฟ"
    ]
};
