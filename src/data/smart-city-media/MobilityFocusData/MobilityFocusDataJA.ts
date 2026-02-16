//data/smart-city-media/MobilityFocusDataJA.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataJA: IMobilityFocus = {
    headline: "モビリティは理解される前に観察される",
    paragraph:
        "人々がモビリティシステムに直接向き合うとは限らない。人々は、道路を横断する、移動手段を待つ、他者と空間を共有するといった小さな状況を通じてそれらに接する。モビリティが一貫して機能する場合、注意の中心になりにくくなり、日常のルーティンとしての移動を支える。",

    signals: [
        {
            title: "共有街路における予測可能な移動",
            description:
                "調整されたモビリティは、移動における不確実性を低減し得る。歩行者はより明確な期待のもとで横断でき、車両は共有街路の条件下で速度を落とし、共有街路はより少ない負荷で解釈できる場合がある。予測可能性は日常の安全に寄与し得る。",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "明確な視覚的手がかりと予測可能な流れのもと、歩行者、電気自動車、配送ロボットが落ち着いて移動する都市の街路",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "複合モビリティの共存",
            description:
                "都市の街路には複数の移動手段が含まれる場合がある。人々は自律走行車両、小型の配送ロボット、軽量な電動移動手段の近くを歩くことがある。共有利用を支える設計条件のもとでは、特定の手段が注意を支配する必要はなく、複数の手段が並行して運用され得る。",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "歩行者、自律走行の電気自動車、小型配送ロボット、スクーターが空間を共有する都市の街路",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};