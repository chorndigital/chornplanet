import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataDA: IEditorialPositioning = {
    headline: "Fra Hverdagsliv til Systemindsigt",
    paragraphs: [
        "Denne platform forudsiger ikke byers fremtid. Den observerer, hvordan byer fungerer gennem menneskers hverdagsliv.",
        "Ved at fokusere på rutiner, bevægelse, pauser og koordinering bliver bysystemer synlige uden at blive reduceret til teknologi- eller politiksprog.",
        "Målet er ikke at promovere løsninger, men at støtte en fælles forståelse på tværs af byer, kulturer og skalaer."
    ],
    principles: [
        {
            title: "Mennesket Først Observation",
            description:
                "Bysystemer forstås gennem levet erfaring. Menneskers rutiner og daglige beslutninger betragtes som primære signaler, ikke sekundære resultater.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "Mennesker bevæger sig gennem en rolig bygade som det primære signal på bysystemer",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "System Før Teknologi",
            description:
                "Teknologi vurderes kun, når den meningsfuldt former adfærd, sikkerhed, adgang eller komfort — ikke som en isoleret funktion.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Bymobilitet og infrastruktur, der fungerer stille i baggrunden af hverdagslivet",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "Lokalt som Global Prototype",
            description:
                "Mellemstore byer kan fungere som levende laboratorier. Lokale mønstre kan udvikle sig til bredere bysystemer, når de observeres omhyggeligt.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "En lokal gadescene, der afspejler mønstre delt af byer verden over",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}