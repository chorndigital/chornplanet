import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const EditorialHumanFirstObservationJA: ISmartCityLanding = {
    heroObservation: {
        headline: "人間を起点とした観察",
        paragraphs: [
            "都市は、技術的な説明だけではなく、生活者の経験を通じて最も明確に理解できます。",
            "都市の質を示す多くの信頼できるサインは、ダッシュボードではなく、人々が歩き、待ち、立ち止まり、横断し、空間を共有する姿に表れます。",
            "このプラットフォームは、人間の生活から出発します。日常の行動が、都市システムが実際にどのように機能しているかを示すためです。"
        ],
        image: {
            url: "/smart-city/editorial/human-first-observation.png",
            alt: "都市システムの主要なサインとして、街を落ち着いて移動するタイの人々",
        },
        cta: {
            label: "テクノロジーの前にシステムを探る",
            href: "/smart-city/editorial-system-before-technology",
        },
    },

    systemExplanation: {
        headline: "なぜ観察が先に来るのか",
        paragraphs: [
            "都市に関する多くの語りは、テクノロジー、インフラ、政策から始まります。しかし、都市は主にそれらの視点で体験されるものではありません。",
            "人々は都市を、摩擦、快適性、リズム、そして体感される安全性を通じて経験します。観察は、技術用語に頼ることなく、複雑なシステムを目に見えるパターンへと翻訳します。"
        ],
        image: {
            url: "/smart-city/urban-signals/public-space-orchestration.png",
            alt: "人々の生活習慣と快適性が主要なシステムサインとして表れる公共空間",
        },
    },

    whyItMatters: {
        headline: "人間を起点とした観察が重要な理由",
        paragraphs: [
            "人々の行動習慣を最初に観察することで、文化や都市、システムの複雑さの違いを超えて共有できる参照点が得られます。"
        ],
        points: [
            {
                title: "行動は現実の状況を反映する",
                description:
                    "人々は快適性やリスクに素早く適応します。日常の移動は、都市の実際の状況を反映します。",
            },
            {
                title: "理解は予測なしに広がる",
                description:
                    "観察は、将来の結果に確実性を主張することなく理解を支えます。",
            },
            {
                title: "システムは専門用語なしでも理解できる",
                description:
                    "人間中心の視点により、都市システムは技術的・専門的な層に限らず理解可能になります。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "意識せずに気づく都市のサイン",
            paragraphs: [
                "小さな日常の行動が、正式な測定や説明を必要とせずに都市の質を示すことがあります。"
            ],
            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "日常の移動から観察される予測可能な道路行動",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "都市は日々のサイクルを通じて体験される",
            paragraphs: [
                "複雑なシステムは、朝・昼・夕方といった日常のリズムを通して見ることで、より理解しやすくなることがあります。"
            ],
            image: {
                url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
                alt: "システムの質のサインとして日常リズムを示す朝の流れ",
            },
            landingUrl: "/smart-city/human-daily-flow-morning",
        },
    ],
};