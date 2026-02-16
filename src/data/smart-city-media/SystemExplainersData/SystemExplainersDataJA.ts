//data/smart-city-media/SystemExplainersDataJA.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataJA: ISystemExplainers = {
    headline: "日常の移動を支えるシステム",
    paragraph:
        "自然に見える日常の移動は、継続的な調整によって支えられていることが多い。これらのシステムは直接的な注意を必要とすることは少ないが、都市がより広い規模でどのように機能するかに影響を与える。",

    systems: [
        {
            title: "モビリティの調整",
            description:
                "信号制御、歩行者の流れ、自律走行車両、公共交通は、調整された時間構造の中で運用される。安定した条件下では、移動は明確に管理されているというよりも、より連続的に見える場合がある。",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "歩行者、車両、自律型交通を調整する都市モビリティシステム",
            },
        },
        {
            title: "都市物流",
            description:
                "物資は、配送サービス、マイクロ車両、自動化システムを通じて都市内を移動する。これらの物流運用は日常活動を支え、都市の移動パターンと統合されることで、混乱を抑える可能性がある。",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "都市の道路を通じて継続的に稼働する日常の物流",
            },
        },
        {
            title: "公共空間の調整",
            description:
                "歩道、横断箇所、照明、街路活動は、一日の中で人々がどのように空間を共有するかに影響する。これらの要素は移動条件や公共空間全体の利用可能性に影響を与える。",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "共有される都市生活を支えるように設計された公共空間",
            },
        },
    ],
};