import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataDA: IGlobalPatterns = {
    headline: "Globale mønstre observeret i hverdagens byer",
    paragraph:
        "På tværs af byer med forskellige kulturer, størrelser og indkomstniveauer observeres der i stigende grad lignende mobilitets- og byrumsmønstre. Disse mønstre er ikke udelukkende drevet af teknologi, men opstår gennem samspillet mellem menneskelige rutiner, rumlige begrænsninger og systemkoordination over tid. Observation af disse signaler bidrager til forståelsen af, hvordan byer i forskellige regioner udviser sammenlignelige operationelle tendenser, samtidig med at de bevarer lokal identitet.",

    signals: [
        {
            title: "Forudsigelige gader understøtter byliv",
            description:
                "Når bevægelsessystemer bliver forudsigelige, oplever mennesker større tryghed i fælles miljøer. I flere regioner er gader, der reducerer usikkerhed frem for at prioritere hastighed, forbundet med mere stabil og komfortabel anvendelse af det offentlige rum.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "En rolig delt gade hvor fodgængere, cyklister og køretøjer bevæger sig forudsigeligt"
            },
            signalFocus: [
                "shared streets",
                "predictable mobility",
                "human comfort",
                "street behavior"
            ],
            landingUrl: "/smart-city/global-patterns-predictable-shared-street"
        },
        {
            title: "Blandet mobilitet observeres i stigende grad i byområder",
            description:
                "Gang, cykling, løbehjul, små el-køretøjer og leveringsrobotter forekommer i stigende grad i mange byområder. I flere regioner struktureres mobilitetsmiljøer til at understøtte sameksistens mellem flere transportformer som en tilpasning til rumlige og operationelle forhold.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Flere mobilitetsformer der sameksisterer i et bymiljø"
            },
            signalFocus: [
                "mixed mobility",
                "coexistence",
                "last-mile movement",
                "urban adaptation"
            ],
            landingUrl: "/smart-city/global-patterns-mixed-mobility-coexistence"
        },
        {
            title: "Integration af bylogistik i daglige systemer",
            description:
                "Småskala-logistik, herunder lokale leveringskøretøjer, jordbaserede robotter og luftsystemer hvor tilladt, integreres gradvist i den daglige bydrift. Byer, der koordinerer logistik inden for eksisterende rumlige og sikkerhedsmæssige rammer, opretholder typisk offentlig komfort samtidig med forbedret operationel effektivitet.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Små leveringskøretøjer og robotter der opererer i et bymiljø"
            },
            signalFocus: [
                "urban logistics",
                "last-mile delivery",
                "system coordination",
                "integrated infrastructure"
            ],
            landingUrl: "/smart-city/global-patterns-urban-logistics"
        }
    ]
}