//data/smart-city-media/HumanDailyFlowDataJA.ts

import {IHumanDailyFlow} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HumanDailyFlowDataJA: IHumanDailyFlow = {
    headline: "都市システムは日々のサイクルを通じて観察される",
    paragraph:
        "都市システムを一つの瞬間だけで全体として捉えることは難しい。都市システムは、朝の通勤、日中の調整、夕方の移行といった、繰り返される日常のパターンを通じて現れる。これらのパターンを観察することで、日常的な人の移動を手がかりに複雑な都市システムを解釈できる。",

    morningFlow: {
        title: "朝の流れ — 一日の始まり",
        paragraph:
            "朝は、居住エリアの静けさから移動が活発になる状態への移行を示す。人々は自宅を出て街路を移動し、交通システムの運用に合わせて行動する。交通の流れ、歩行者の動き、共有モビリティの利用といった観察可能な要素は、一日の始まりにおける移動インフラがどのように機能しているかを示す。",

        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "早朝の都市環境。通勤する人々、日中の光、緑の要素、日常運用を開始するモビリティシステムが見られる",
        },

        category: "Morning Flow",
        signalFocus: ["mobility readiness", "pedestrian flow", "temporal synchronization"],
        landingUrl: "/smart-city/human-daily-flow-morning",
    },

    middayFlow: {
        title: "日中の流れ — 密度と調整",
        paragraph:
            "日中は都市活動の密度が高まる。人、物資、サービスが同時に移動する。自律型モビリティシステム、物流インフラ、公共空間の設計が並行して機能し、より大きな移動量に対応する。",

        image: {
            url: "/smart-city/human-daily-flow/midday-flow/city-operates-at-peak-intensity.png",
            alt: "日中の都市環境。歩行者、自律走行の電気自動車、配送ドローン、公共空間での調整された移動が見られる",
        },

        category: "Midday Flow",
        signalFocus: ["density", "logistics", "coordination", "autonomous systems"],
        landingUrl: "/smart-city/human-daily-flow-midday",
    },

    eveningFlow: {
        title: "夕方の流れ — 活動の低下と移行",
        paragraph:
            "夕方は、移動の強度が低下する方向へ活動水準が移行する。照明システム、歩行環境、街路の環境、交通手段の利用可能性が、住民が帰宅し夕方の活動に参加する形に影響する。",

        image: {
            url: "/smart-city/human-daily-flow/evening-flow/people-slow-down.png",
            alt: "夕方早い時間帯の都市環境。歩行者、照明のある街路、営業中の店舗、適度な交通量、視認できる安全状況が見られる",
        },

        category: "Evening Flow",
        signalFocus: ["safety", "public space", "evening mobility", "urban transition"],
        landingUrl: "/smart-city/human-daily-flow-evening",
    },

    purpose: "日々繰り返される都市パターンの認識を支援する",
    narrativeRole: "身近な日常ルーティンを通じて複雑な都市システムを提示する",
    section: "Human Daily Flow",
    category: "Smart City Media",
    lang: "ja",
};