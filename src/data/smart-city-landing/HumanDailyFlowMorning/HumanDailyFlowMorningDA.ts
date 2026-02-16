import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningDA: ISmartCityLanding = {
    heroObservation: {
        headline: "Morgenflow — Dagens Begyndelse",
        paragraphs: [
            "Morgenen viser, om en by er forberedt, når hverdagen begynder.",
            "Pendling, skolekørsel, små ærinder og tidlige leveringer afslører, om mobilitetssystemer understøtter døgnets rytme eller skaber friktion i daglig bevægelse.",
            "En smart by bliver synlig her — i de første fodgængerfelter, de første signaler og dagens første fælles bevægelser."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "Tidlig morgen på en thailandsk bygade med pendlere til fods, rolige scootere og en stille autonom el-shuttle i baggrunden",
        },
        cta: {
            label: "Se Middagsflow",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "Hvad Morgenen Afslører Om en By",
        paragraphs: [
            "Morgenen fungerer som en tidlig stresstest for byens systemer. Hvis fodgængerfelter er uklare, fortove føles utrygge, eller trafikken bliver uforudsigelig, tilpasser mennesker deres adfærd med det samme.",
            "Pålidelige byer defineres ikke af hastighed. De defineres af læsbarhed — hvor fodgængere, scootere, cyklister og køretøjer kan koordinere med minimal konflikt."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "Koordineret bymobilitet med forudsigelige kryds og rolig morgenbevægelse",
        },
    },

    whyItMatters: {
        headline: "Hvorfor Morgenflow Er Vigtigt",
        paragraphs: [
            "Byer, der understøtter morgenrytmen, reducerer stress, øger sikkerheden og opbygger tillid uden behov for håndhævelse."
        ],
        points: [
            {
                title: "Tillid Begynder Ved Det Første Kryds",
                description:
                    "Når mennesker føler sig trygge ved at krydse naturligt, kommunikerer byen pålidelighed uden instruktion.",
            },
            {
                title: "Rytme Slår Hastighed",
                description:
                    "Morgenflow fungerer bedst, når gader understøtter forudsigelig timing frem for maksimal kapacitet.",
            },
            {
                title: "Hverdagssikkerhed Er Forebyggende Design",
                description:
                    "En rolig morgenpendling reducerer risiko, trængsel og friktion, før de opstår.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "Forudsigelig Gadeadfærd",
            paragraphs: [
                "Morgenen fungerer kun gnidningsløst, når mennesker kan bevæge sig uden tøven. Forudsigelighed er fundamentet for tillid."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Thailandske fodgængere og cyklister bevæger sig forudsigeligt på en delt gade med rolig trafik",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "Bevægelse og Pause",
            paragraphs: [
                "En by vågner roligt, når bevægelse naturligt kan sænkes uden frygt eller fare."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Gadedesign, der balancerer morgenbevægelse med sikre pauser for fodgængere",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};