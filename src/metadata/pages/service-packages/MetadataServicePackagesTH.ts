import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesTH: Metadata = {
    title: "แพ็กเกจบริการ | การวิเคราะห์ระบบและการพัฒนาซอฟต์แวร์แบบครบวงจร",
    description: "เชี่ยวชาญด้านการวิเคราะห์ระบบ การพัฒนาซอฟต์แวร์แบบครบวงจร ทั้ง Web2 และ Web3 รองรับธุรกิจยุคใหม่ที่ต้องการพัฒนาอย่างต่อเนื่องและยั่งยืน",
    alternates: metadataLink(LanguageCode.en, MetaLinks.servicePackages).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "แพ็กเกจบริการพัฒนาซอฟต์แวร์ครบวงจรทั้ง Web2 และ Web3",
        description: "ส่งเสริมธุรกิจให้เติบโตด้วยบริการวิเคราะห์ระบบ พัฒนาซอฟต์แวร์ และสนับสนุนเทคนิคอย่างมืออาชีพ",
        images: metadataLink(LanguageCode.th, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "แพ็กเกจบริการพัฒนาซอฟต์แวร์สำหรับทุกระดับธุรกิจ",
        description: "ยกระดับธุรกิจด้วยบริการ Web2 และ Web3 จาก Chorn Planet ครบจบในที่เดียว",
        images: metadataLink(LanguageCode.th, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // Brand Keywords
        "Chorn Planet", "Chorn Planet บริการพัฒนาซอฟต์แวร์", "Chorn Planet outsource software", "Chorn Planet คืออะไร",
        "Chorn Planet นักพัฒนาซอฟต์แวร์ไทย", "Chorn Planet บริษัทซอฟต์แวร์ เชียงใหม่", "Chorn Planet บริษัทซอฟต์แวร์ กรุงเทพ",

        // Core services Keywords
        "บริการพัฒนาซอฟต์แวร์", "พัฒนาซอฟต์แวร์ตามสั่ง", "บริษัท outsource ซอฟต์แวร์",
        "บริษัทพัฒนาระบบตามความต้องการ", "บริการ outsource ทีม dev", "พัฒนาระบบ Web2 และ Web3",
        "พัฒนาแอปพลิเคชัน", "พัฒนาเว็บไซต์", "พัฒนาระบบหลังบ้าน", "พัฒนาระบบหน้าบ้าน",

        // Developer & Technical Roles
        "นักพัฒนาซอฟต์แวร์", "โปรแกรมเมอร์", "full stack developer", "frontend developer", "backend developer",
        "web3 developer", "blockchain developer", "นักพัฒนา smart contract", "นักพัฒนาเว็บ", "นักพัฒนาแอป",
        "dev ไทย", "dev เชียงใหม่", "dev กรุงเทพ",

        // Technologies & Frameworks
        "nextjs", "react", "node.js", "spring boot", "solidity", "ethers", "smart contract", "web3", "ethereum",
        "การพัฒนา NFT", "อัปเกรด NFT", "โปรโตคอล NFT สมัยใหม่", "พัฒนา dApp",

        // Business & Stakeholders
        "บริษัทพัฒนาระบบ", "บริษัท outsource ไทย", "พัฒนาซอฟต์แวร์องค์กร", "พัฒนาระบบธุรกิจ",
        "ผู้นำด้านเทคโนโลยี", "ที่ปรึกษาระบบ", "ผู้จัดการโครงการซอฟต์แวร์", "outsourcing ทีม dev ไทย",

        // Urgent & Premium Services
        "บริการแก้ไขบั๊กด่วน", "แก้ไขบั๊กเร่งด่วน", "บริการเต็มเวลา", "บริการรายชั่วโมง", "บริการ NFT", "บริการ Web3",
    ],
};