import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Mensgerichte Observatie",
        paragraphs: [
            "Steden worden het duidelijkst begrepen via geleefde ervaring, en niet uitsluitend via technische uitleg.",
            "Veel betrouwbare signalen van stedelijke kwaliteit zijn niet te vinden in dashboards, maar in de manier waarop mensen lopen, wachten, pauzeren, oversteken en ruimte delen.",
            "Dit platform begint bij het menselijk leven, omdat dagelijks gedrag laat zien hoe stedelijke systemen daadwerkelijk functioneren."
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "Thaise mensen die rustig door een stadsstraat bewegen als primair signaal van stedelijke systemen",
        },
        cta: {
            label: "Ontdek Systeem vóór Technologie",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "Waarom Observatie Eerst Komt",
        paragraphs: [
            "Veel stedelijke verhalen beginnen bij technologie, infrastructuur of beleid. Steden worden echter niet primair vanuit deze perspectieven ervaren.",
            "Mensen ervaren de stad via frictie, comfort, ritme en ervaren veiligheid. Observatie helpt complexe systemen te vertalen naar zichtbare patronen, zonder afhankelijk te zijn van technische taal."
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "Openbare ruimte die menselijke routines en comfort toont als primaire systeemsignalen",
        },
    },

    whyItMatters: {
        headline: "Waarom Mensgerichte Observatie Belangrijk Is",
        paragraphs: [
            "Door eerst menselijke routines te observeren ontstaat een gedeeld referentiepunt dat betekenisvol blijft over culturen, steden en verschillende niveaus van systeemcomplexiteit heen."
        ],
        points: [
            {
                title: "Gedrag Weerspiegelt Werkelijke Omstandigheden",
                description:
                    "Mensen passen zich snel aan comfort en risico aan. Hun dagelijkse beweging weerspiegelt feitelijke stedelijke omstandigheden.",
            },
            {
                title: "Begrip Schaalt Zonder Voorspelling",
                description:
                    "Observatie ondersteunt begrip zonder zekerheid te claimen over toekomstige uitkomsten.",
            },
            {
                title: "Systemen Worden Begrijpelijk Zonder Jargon",
                description:
                    "Een mensgerichte benadering maakt stedelijke systemen begrijpelijk buiten technische of expertgerichte doelgroepen.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Stedelijke Signalen die je Zonder Moeite Opmerkt",
            paragraphs: [
                "Kleine alledaagse gedragingen kunnen stedelijke kwaliteit zichtbaar maken zonder formele meting of uitleg."
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Voorspelbaar straatgedrag waargenomen via alledaagse beweging",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Steden Worden Ervaren via Dagelijkse Cycli",
            paragraphs: [
                "Complexe systemen worden vaak duidelijker wanneer ze worden bekeken via dagelijkse ritmes zoals ochtend, middag en avond."
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "Ochtendstroom die het dagelijkse ritme toont als signaal van systeemkwaliteit",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};