import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const GlobalPatternsUrbanLogisticsJA: ISmartCityLanding = {
    heroObservation: {
        headline: "物流は静かに都市のリズムを変えている",
        paragraphs: [
            "物資は都市の中を絶えず移動していますが、多くの場合それは目立ちません。",
            "多くの地域で、物流は大規模で目立つインフラから、より小さく静かな仕組みへと移行しています。たとえば小型電動車両、配送ロボット、ドローン、時間帯を調整した配送などです。",
            "物流が滑らかに統合されている都市では、移動量が増えても日常生活がより快適に感じられる傾向があります。"
        ],
        image: {
            url: "/smart-city/global-patterns/urban-logistics.png",
            alt: "現代的な都市の通りで静かに稼働する都市物流",
        },
        cta: {
            label: "予測可能な通りへ戻る",
            href: "/smart-city/global-patterns-predictable-shared-street",
        },
    },

    systemExplanation: {
        headline: "物流が都市に与える影響",
        paragraphs: [
            "物流が都市に与える影響は、速度よりもリズムにあります。",
            "配送が時間帯で調整され、分散され、協調されると、通りは混雑が緩和されたように感じられ、日常の移動も滑らかになります。統合された物流システムは、都市環境の視覚的な中心になることなく摩擦を減らします。"
        ],
        image: {
            url: "/smart-city/system-explainers/urban-logistics.png",
            alt: "日常の都市移動に統合された小規模物流",
        },
    },

    whyItMatters: {
        headline: "なぜこのグローバルパターンが重要なのか",
        paragraphs: [
            "物流は、日常生活を支える背景インフラの一部になりつつあります。注意深く統合された都市では、活動量が増えても落ち着きを保ちやすくなります。"
        ],
        points: [
            {
                title: "配送は通りの常時要素になっている",
                description:
                    "物資は一日を通して移動しています。重要なのは、配送活動が通りを乱すのか、それとも自然に溶け込むのかという点です。",
            },
            {
                title: "静かな統合が快適性を支える",
                description:
                    "運用効率は、公共空間に不要な騒音や混雑、対立を持ち込むべきではありません。",
            },
            {
                title: "リズムが都市の安定性を支える",
                description:
                    "物流が時間と空間で協調されると、都市はより予測可能で移動しやすく感じられます。",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "物流が日常に溶け込む状態",
            paragraphs: [
                "配送ロボットや小規模物流が注意を支配せずに機能していると、日常の都市風景は落ち着いて読み取りやすくなります。"
            ],
            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "タイの街の日常に統合された物流",
            },
            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },
        {
            headline: "効率と人間のリズム",
            paragraphs: [
                "都市の効率が意味を持つのは、システムのタイミングが人々の生活リズムに合わせられ、それを上書きしない場合です。"
            ],
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "人間のリズムと予測可能なタイミングに整合した都市インフラ",
            },
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm",
        },
    ],
};