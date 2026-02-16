import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const FromLocalLifeToGlobalPatternDE: ISmartCityLanding = {
    heroObservation: {
        headline: "Vom Lokalen Leben zum Globalen Muster",
        paragraphs: [
            "Städtisches Leben wirkt oft lokal, geprägt durch vertraute Straßen, Gewohnheiten und Routinen.",
            "Wenn ähnliche Szenen in unterschiedlichen Städten, Kulturen und Maßstäben auftreten, liefern sie vergleichbare Hinweise darauf, wie Städte typischerweise funktionieren.",
            "Dies ist keine Vorhersage. Es ist ein Vergleich — alltägliche Momente werden nebeneinander gestellt, bis die zugrunde liegenden Systeme sichtbar werden."
        ],
        image: {
            url: "/smart-city/local-to-global/global-urban-pattern.png",
            alt: "Alltägliche Straßenszenen, die gemeinsame Mobilitätsmuster in verschiedenen Städten andeuten",
        },
        cta: {
            label: "Globale Muster Erkunden",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "Wie eine Stadt Vergleichbar Wird",
        paragraphs: [
            "Städte werden vergleichbar, wenn ähnliche Arten von Momenten beobachtet werden: Querungen, Warteschlangen, Pausen, Lieferungen und Koexistenz.",
            "Wenn lokales Verhalten sich an verschiedenen Orten wiederholt, verschiebt es sich von individueller Präferenz zu einem erkennbaren Signal, das auf gemeinsame strukturelle Bedingungen unter dem Alltag hinweist."
        ],
        image: {
            url: "/smart-city/editorial/local-as-global-prototype.png",
            alt: "Eine lokale Straßenszene als Referenz, um umfassendere Stadtsysteme zu verstehen",
        },
    },

    whyItMatters: {
        headline: "Warum Lokal-zu-Global Wichtig Ist",
        paragraphs: [
            "Wiederkehrende Muster verbreiten sich häufig schneller als formale Politiken. Wenn eine lokale Routine in vielen Städten erscheint, deutet dies auf gemeinsame Reaktionen auf ähnliche urbane Bedingungen hin."
        ],
        points: [
            {
                title: "Alltagsstraßen Spiegeln Systembedingungen",
                description:
                    "Eine verlässliche Möglichkeit, Stadtqualität zu verstehen, ist die Beobachtung dessen, was auf einer gewöhnlichen Straße in einem gewöhnlichen Moment geschieht.",
            },
            {
                title: "Muster Können Ohne Koordination Entstehen",
                description:
                    "Gemeinsame Straßenverhaltensweisen können unabhängig in verschiedenen Städten auftreten, geprägt durch vergleichbare Einschränkungen und Bedürfnisse.",
            },
            {
                title: "Verständnis Unterstützt Dialog",
                description:
                    "Das Beobachten von Mustern hilft Städten, ein gemeinsames Verständnis zu entwickeln, ohne bestimmte Lösungen oder Ideologien zu bewerben.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Globale Muster aus Alltäglichen Städten",
            paragraphs: [
                "Wenn ähnliche Signale in unterschiedlichen kulturellen Kontexten auftreten, können sie auf eine Annäherung an gemeinsame operative Verhaltensweisen hinweisen."
            ],
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Eine ruhige gemeinsame Straße als Muster vorhersehbarer Bewegung, das in mehreren Städten beobachtet wird",
            },
            landingUrl: "/smart-city/global-patterns-predictable-shared-street",
        },
        {
            headline: "Lokales als Globale Blaupause",
            paragraphs: [
                "Mittelgroße Städte machen wiederkehrende Muster oft leichter beobachtbar, da Straßenverhalten sichtbar und gut lesbar bleibt."
            ],
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "Lokales Straßenleben, das Muster widerspiegelt, die in vielen Städten weltweit beobachtet werden",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
};