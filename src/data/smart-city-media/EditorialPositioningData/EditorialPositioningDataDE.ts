import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataDE: IEditorialPositioning = {
    headline: "Vom Alltag zur Systemeinsicht",
    paragraphs: [
        "Diese Plattform sagt die Zukunft von Städten nicht voraus. Sie beobachtet, wie Städte durch das alltägliche menschliche Leben funktionieren.",
        "Durch den Fokus auf Routinen, Bewegung, Pausen und Koordination werden urbane Systeme sichtbar, ohne auf Technik- oder Politiksprache reduziert zu werden.",
        "Ziel ist nicht, Lösungen zu bewerben, sondern ein gemeinsames Verständnis über Städte, Kulturen und Maßstäbe hinweg zu unterstützen."
    ],
    principles: [
        {
            title: "Mensch-zuerst-Beobachtung",
            description:
                "Urbane Systeme werden durch gelebte Erfahrung verstanden. Menschliche Routinen und tägliche Entscheidungen gelten als primäre Signale, nicht als nachgelagerte Ergebnisse.",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "Menschen bewegen sich durch eine ruhige Stadtstraße als primäres Signal städtischer Systeme",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "System vor Technologie",
            description:
                "Technologie wird nur dann betrachtet, wenn sie Verhalten, Sicherheit, Zugang oder Komfort spürbar prägt — nicht als isoliertes Merkmal.",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "Urbane Mobilität und Infrastruktur, die leise im Hintergrund des Alltags wirkt",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "Lokal als Globaler Prototyp",
            description:
                "Mittelgroße Städte können als lebendige Labore dienen. Lokale Muster können sich zu umfassenderen urbanen Systemen entwickeln, wenn sie sorgfältig beobachtet werden.",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Eine lokale Straßenszene, die Muster widerspiegelt, die Städte weltweit teilen",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}