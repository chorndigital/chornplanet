import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeTH: Metadata = {
    title: "CHORN | แพลตฟอร์มสื่อด้านระบบและเทคโนโลยีประยุกต์",
    description:
        "CHORN คือแพลตฟอร์มสื่อที่นำเสนอคำอธิบายเชิงโครงสร้างเกี่ยวกับการวิเคราะห์ระบบ วิศวกรรมซอฟต์แวร์ แนวปฏิบัติด้านการเชื่อมต่อระบบ และหัวข้อด้านเทคโนโลยีประยุกต์ รวมถึงระบบอัตโนมัติด้วย AI ระบบคลาวด์ และแนวทางการปรับปรุงระบบ เพื่อใช้ในบริบทสาธารณะ นักลงทุน และเชิงนโยบาย",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN Digital"
        }
    ],
    openGraph: {
        title: "CHORN | แพลตฟอร์มสื่อด้านระบบและเทคโนโลยีประยุกต์",
        description:
            "CHORN คือแพลตฟอร์มสื่อที่นำเสนอคำอธิบายเชิงโครงสร้างเกี่ยวกับการวิเคราะห์ระบบ วิศวกรรมซอฟต์แวร์ แนวปฏิบัติด้านการเชื่อมต่อระบบ และหัวข้อด้านเทคโนโลยีประยุกต์ รวมถึงระบบอัตโนมัติด้วย AI ระบบคลาวด์ และแนวทางการปรับปรุงระบบ เพื่อใช้ในบริบทสาธารณะ นักลงทุน และเชิงนโยบาย",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | แพลตฟอร์มสื่อด้านระบบและเทคโนโลยีประยุกต์",
        description:
            "CHORN คือแพลตฟอร์มสื่อที่นำเสนอคำอธิบายเชิงโครงสร้างเกี่ยวกับการวิเคราะห์ระบบ วิศวกรรมซอฟต์แวร์ แนวปฏิบัติด้านการเชื่อมต่อระบบ และหัวข้อด้านเทคโนโลยีประยุกต์ รวมถึงระบบอัตโนมัติด้วย AI ระบบคลาวด์ และแนวทางการปรับปรุงระบบ เพื่อใช้ในบริบทสาธารณะ นักลงทุน และเชิงนโยบาย",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        // Brand Keywords
        "CHORN", "CHORN Digital", "แพลตฟอร์มสื่อ CHORN", "สื่อระบบ CHORN", "CHORN คืออะไร",
        "CHORN ประเทศไทย", "CHORN เชียงใหม่", "CHORN กรุงเทพ",

        // Core Topics (Neutral, descriptive)
        "การวิเคราะห์ระบบ", "วิศวกรรมซอฟต์แวร์", "การเชื่อมต่อระบบ", "ซอฟต์แวร์องค์กร",
        "การพัฒนา Full-stack", "การออกแบบ API", "ไมโครเซอร์วิส", "ระบบคลาวด์", "DevOps",
        "ระบบอัตโนมัติ", "การผสาน AI", "การปรับปรุงระบบ", "สถาปัตยกรรมเทคนิค",

        // Roles & Practice Areas (Descriptive)
        "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์", "การพัฒนา Frontend", "การพัฒนา Backend",
        "การพัฒนา Full stack", "การพัฒนาเว็บ", "การพัฒนาโมบาย", "สถาปนิกระบบ",
        "นักวิเคราะห์ระบบ", "การบริหารทีมวิศวกรรม",

        // Technologies & Frameworks (General, non-claiming)
        "Next.js", "React", "Node.js", "Spring Boot", ".NET", "PHP", "Java",
        "สถาปัตยกรรมคลาวด์", "ระบบกระจายศูนย์"
    ]
}