import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningNL: ISmartCityLanding = {
    heroObservation: {
        headline: "Ochtendstroom — Begin van de Dag",
        paragraphs: [
            "De ochtend laat zien of een stad voorbereid is wanneer het dagelijks leven begint.",
            "Woon-werkverkeer, schoolritten, kleine boodschappen en vroege leveringen tonen of mobiliteitssystemen het dagritme ondersteunen of juist frictie veroorzaken in het dagelijkse bewegen.",
            "Een slimme stad wordt hier zichtbaar — bij de eerste oversteekplaatsen, de eerste signalen en de eerste gedeelde bewegingen van de dag."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Vroege ochtend in een Thaise stadsstraat met pendelaars te voet, rustig rijdende scooters en een stille autonome elektrische shuttle op de achtergrond",
        },
        cta: {
            label: "Bekijk Middagstroom",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "Wat de Ochtend over een Stad Onthult",
        paragraphs: [
            "De ochtend fungeert als een vroege stresstest voor stedelijke systemen. Wanneer oversteekplaatsen onduidelijk zijn, trottoirs onveilig aanvoelen of verkeer onvoorspelbaar wordt, passen mensen hun gedrag direct aan.",
            "Betrouwbare steden worden niet gedefinieerd door snelheid. Ze worden gedefinieerd door leesbaarheid — wanneer voetgangers, scooters, fietsers en voertuigen met minimale conflicten kunnen samenwerken."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Stedelijke mobiliteitscoördinatie met voorspelbare oversteekplaatsen en rustige ochtendbeweging",
        },
    },

    whyItMatters: {
        headline: "Waarom Ochtendstroom Belangrijk Is",
        paragraphs: [
            "Steden die het ochtendritme ondersteunen, verminderen stress, vergroten de veiligheid en bouwen vertrouwen op zonder handhaving."
        ],
        points: [
            {
                title: "Vertrouwen Begint bij de Eerste Oversteek",
                description:
                    "Wanneer mensen zich veilig voelen om vanzelfsprekend over te steken, communiceert de stad betrouwbaarheid zonder instructie.",
            },
            {
                title: "Ritme Is Belangrijker dan Snelheid",
                description:
                    "Ochtendstroom werkt het best wanneer straten voorspelbare timing ondersteunen in plaats van maximale doorstroming.",
            },
            {
                title: "Alledaagse Veiligheid Is Preventief Ontwerp",
                description:
                    "Een rustige ochtendverplaatsing vermindert risico’s, congestie en frictie voordat ze ontstaan.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Voorspelbaar Straatgedrag",
            paragraphs: [
                "De ochtend verloopt soepel wanneer mensen zich zonder aarzeling kunnen verplaatsen. Voorspelbaarheid vormt de basis van vertrouwen."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Thaise voetgangers en fietsers bewegen zich voorspelbaar op een gedeelde straat met rustig verkeer",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Beweging en Pauze",
            paragraphs: [
                "Een stad ontwaakt soepel wanneer beweging op natuurlijke wijze kan vertragen zonder angst of gevaar."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Straatontwerp dat ochtendbeweging combineert met veilige pauzes voor voetgangers",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};