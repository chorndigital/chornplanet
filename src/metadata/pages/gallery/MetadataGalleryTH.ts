import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGalleryTH: Metadata = {
    title: "การเดินทางต่างประเทศ | แกลเลอรี Chorn Planet",
    description: "Chorn Planet มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
    alternates: metadataLink(LanguageCode.th, MetaLinks.gallery).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "การเดินทางต่างประเทศ | แกลเลอรี Chorn Planet",
        description: "Chorn Planet มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: metadataLink(LanguageCode.th, MetaLinks.gallery).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.gallery).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การเดินทางต่างประเทศ | แกลเลอรี Chorn Planet",
        description: "Chorn Planet มีประสบการณ์และความพร้อมในการเดินทางต่างประเทศเพื่อรับการฝึกอบรม การเดินทางไปเรียนรู้งานในอาเซียนและสหรัฐอเมริกา",
        images: metadataLink(LanguageCode.th, MetaLinks.gallery).twitter.images,
    },
}
