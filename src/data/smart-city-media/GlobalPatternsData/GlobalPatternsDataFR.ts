import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataFR: IGlobalPatterns = {
    headline: "Tendances observées dans les villes du quotidien à l’échelle mondiale",
    paragraph:
        "Dans des villes aux cultures, tailles et niveaux de revenus différents, des schémas similaires de mobilité et d’usage de l’espace public sont de plus en plus observés. Ces évolutions ne résultent pas uniquement de la technologie, mais de l’alignement progressif des routines humaines, des contraintes spatiales et de la coordination des systèmes. L’observation de ces signaux contribue à expliquer comment des villes situées dans différentes régions présentent des caractéristiques opérationnelles comparables tout en conservant leur identité locale.",

    signals: [
        {
            title: "Des rues prévisibles soutiennent la vie publique",
            description:
                "Lorsque les systèmes de déplacement deviennent prévisibles, les usagers éprouvent davantage de confiance dans les environnements partagés. Dans plusieurs régions, les rues qui réduisent l’incertitude plutôt que de privilégier la vitesse sont associées à une utilisation plus stable et plus confortable de l’espace public.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "Une rue partagée calme où piétons, cyclistes et véhicules circulent de manière prévisible"
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
            title: "La mobilité mixte de plus en plus présente en milieu urbain",
            description:
                "La marche, le vélo, les trottinettes, les petits véhicules électriques et les robots de livraison sont de plus en plus présents dans de nombreuses villes. Dans différentes régions, les environnements de mobilité sont organisés pour permettre la coexistence de plusieurs modes, en réponse à des contraintes spatiales et opérationnelles.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "Plusieurs modes de mobilité coexistant dans un environnement urbain"
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
            title: "Intégration de la logistique urbaine dans les systèmes quotidiens",
            description:
                "La logistique à petite échelle, incluant les véhicules électriques de livraison, les robots au sol et les systèmes aériens lorsque la réglementation l’autorise, est progressivement intégrée aux opérations urbaines quotidiennes. Les villes qui coordonnent la logistique dans les cadres spatiaux et de sécurité existants maintiennent généralement le confort public tout en améliorant l’efficacité opérationnelle.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "Petits véhicules et robots de livraison opérant dans un environnement urbain"
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