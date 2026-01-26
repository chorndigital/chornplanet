import {ICloud} from "@/data/cloud/model/ICloud";

export const CloudFI: ICloud = {
    title: "Pilvikokemus",
    span: "Erinomainen pilvikokemus",
    subTitle: "",
    stacks: [
        {
            title: "AWS",
            description: "Pilvikokemus",
            image: "/images/cloud/thumbnail/aws.webp",
            alt: "Logo, joka edustaa AWS-teknologiakokemusta",
            readMore: "Tutustu malliin AWS-pilvitoiminnot ja tekninen asiantuntemus",
            link: "/technical-expertise/details",
        },
        {
            title: "Azure",
            description: "Pilvikokemus",
            image: "/images/cloud/thumbnail/azure.webp",
            alt: "Logo, joka edustaa Azure-teknologiakokemusta",
            readMore: "Tutustu Azure-pilven tekniseen asiantuntemukseen ja infrastruktuuriratkaisuihin",
            link: "/technical-expertise/details",
        },
        {
            title: "GCP",
            description: "Pilvikokemus",
            image: "/images/cloud/thumbnail/gcp.webp",
            alt: "Logo, joka edustaa GCP-teknologiakokemusta",
            readMore: "Tutustu malliin Google Cloud Platform tekninen asiantuntemus",
            link: "/technical-expertise/details",
        },
        {
            title: "Cloud",
            description: "Digital Ocean",
            image: "/images/cloud/thumbnail/digital-ocean.webp",
            alt: "Logo, joka edustaa DigitalOcean-teknologiakokemusta",
            readMore: "Tutustu malliin DigitalOcean-pilvitoiminnot kehittäjille",
            link: "/technical-expertise/details",
        },
    ],
}