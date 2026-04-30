import {Metadata} from "next";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiTH: Metadata = {
    title: "การผสานรวม LLM/AI | Chorn Planet",
    description: "การพัฒนาเอเจนต์ LLM/AI การนำเสนอโซลูชันอัจฉริยะเพื่อเพิ่มประสิทธิภาพระบบอัตโนมัติ การรวมระบบเดิม และการวิเคราะห์เชิงคาดการณ์",
    alternates: metadataLink(LanguageCode.th, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "การผสานรวม LLM/AI - Chorn Planet",
        description: "สำรวจการพัฒนาเอเจนต์ LLM/AI ที่ล้ำสมัย โซลูชัน LLM แบบกำหนดเอง และระบบอัตโนมัติของกระบวนการ AI เพื่อเพิ่มประสิทธิภาพการดำเนินธุรกิจ",
        images: metadataLink(LanguageCode.th, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การผสานรวม LLM/AI - Chorn Planet",
        description: "ปลดล็อกศักยภาพของ AI ด้วยบริการพัฒนาเอเจนต์ LLM/AI การวิเคราะห์เชิงคาดการณ์ และระบบอัตโนมัติของกระบวนการอัจฉริยะ",
        images: metadataLink(LanguageCode.th, MetaLinks.llmAi).twitter.images,
    },
}