//data/smart-city-media/UrbanSignalsDataDA.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataDA: IUrbanSignals = {
    headline: "Urbane signaler observeret i hverdagen",
    paragraph:
        "Byer kommunikerer gennem små observerbare signaler — hvordan gader opleves, hvordan mennesker bevæger sig, og hvordan rum ændrer sig over tid. Disse øjeblikke beskrives ikke altid som systemer, men de kan indikere, hvordan urbane forhold fungerer.",

    signals: [
        {
            title: "Forudsigelig adfærd på gaden",
            description:
                "Når fodgængere, cyklister og køretøjer bevæger sig med klare forventninger, kan det indikere fælles normer og rumlig klarhed, selv uden eksplicit håndhævelse.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "Mennesker, cykler og køretøjer, der bevæger sig jævnt sammen på en delt bygade uden synlig trængsel eller spænding",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "Logistik integreret i hverdagen",
            description:
                "Leveringsrobotter, små el-køretøjer og bude kan operere uden at dominere opmærksomheden, hvilket kan indikere, at logistik er integreret i daglige bevægelsesmønstre.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "Små leveringskøretøjer og robotter, der opererer roligt sammen med hverdagsliv på gaden i en moderne by",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "Offentligt rum anvendt som tiltænkt",
            description:
                "Når mennesker opholder sig, holder pauser og deler rum på rutinemæssige måder, kan det afspejle en balance mellem bevægelseseffektivitet og anvendelighed af offentlige områder.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "Mennesker, der sidder, går og interagerer komfortabelt i et veludformet offentligt byrum",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}