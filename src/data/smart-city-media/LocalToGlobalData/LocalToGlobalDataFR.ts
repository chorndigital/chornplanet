//data/smart-city-media/LocalToGlobalDataFR.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataFR: ILocalToGlobal = {
    headline: "Du contexte local aux schémas globaux",
    paragraph:
        "L’activité urbaine est généralement perçue dans des contextes locaux et spécifiques. Lorsque des conditions similaires sont observées dans différentes villes, régions et cultures, des schémas récurrents peuvent être identifiés. La comparaison de situations du quotidien entre plusieurs lieux permet d’examiner des systèmes structurels communs.",

    items: [
        {
            title: "Une routine à l’échelle de la rue",
            description:
                "Les déplacements quotidiens le long d’une rue familière illustrent la manière dont les individus réagissent aux conditions spatiales, aux structures temporelles et aux systèmes de mobilité. Bien que situées dans un contexte local, ces routines reflètent des schémas structurels sous-jacents façonnés par la conception urbaine.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "Environnement urbain quotidien montrant des piétons, des commerces locaux et des systèmes de mobilité en fonctionnement",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "Schémas récurrents entre plusieurs villes",
            description:
                "Lorsque des structures de déplacement similaires sont observées dans plusieurs villes, elles indiquent des conditions structurelles comparables. L’activité observée localement peut ainsi être examinée comme une composante de comportements urbains plus larges à l’échelle des régions.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "Environnement urbain présentant des flux de mobilité, des systèmes logistiques et des usages de l’espace public comparables entre différentes villes",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "Examiner des schémas structurels plus larges par comparaison locale",
    narrativeRole: "Relier l’activité locale observée à une analyse systémique",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "fr",
};