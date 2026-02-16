// src/data/smart-city-media/SmartCityMainJA.ts

import {ISmartCityMain} from "@/data/smart-city-media/_model/ISmartCityMain";

export const SmartCityMainJA: ISmartCityMain = {
    hero: {
        title: "Smart City Media",
        paragraphs: [
            "これは未来の予測ではない。現在、都市が日常的な人間活動を通じてどのように機能しているかの観察である。",
            "ルーティン、モビリティ行動、システムの調整を検討することで、複数の地域における都市で観察可能なパターンを特定する。",
        ],
        cta: {
            label: "概要から始める",
            href: "/smart-city/when-human-life-shapes-the-city",
        },
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "人間中心のスマートシティ生活を示すフォトリアルなタイの都市の通り",
        },
    },

    navigation: {
        items: [
            {
                title: "Human Daily Flow",
                description: "朝、日中、夕方はシステムの挙動を示す。",
                href: "/smart-city/human-daily-flow/morning",
            },
            {
                title: "Local to Global",
                description: "ローカルなルーティンをより広いパターンとして検討する方法。",
                href: "/smart-city/from-local-life-to-global-pattern",
            },
            {
                title: "Mobility Focus",
                description: "モビリティは理解される前に観察される。",
                href: "/smart-city/mobility-focus/predictable-movement",
            },
            {
                title: "City Systems",
                description: "日常の都市条件に影響を与えるシグナル。",
                href: "/smart-city/city-systems/movement-and-pause",
            },
            {
                title: "Global Patterns",
                description: "複数の都市で観察されるシグナル。",
                href: "/smart-city/global-patterns/predictable-shared-street",
            },
            {
                title: "Urban Signals",
                description: "システム状態を示す街路レベルの行動。",
                href: "/smart-city/urban-signals/predictable-street",
            },
            {
                title: "Editorial Positioning",
                description: "Smart City Mediaの背景にある視点。",
                href: "/smart-city/editorial/human-first-observation",
            },
        ],
    },
};