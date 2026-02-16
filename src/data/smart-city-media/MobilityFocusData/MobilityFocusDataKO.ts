//data/smart-city-media/MobilityFocusDataKO.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataKO: IMobilityFocus = {
    headline: "모빌리티는 이해되기 전에 관찰된다",
    paragraph:
        "사람들은 항상 모빌리티 시스템을 직접적으로 다루는 것은 아니다. 사람들은 길을 건너기, 이동 수단을 기다리기, 다른 사람과 공간을 공유하기와 같은 작은 상황을 통해 이를 접한다. 모빌리티가 일관되게 작동할 때, 이는 주의의 중심에서 벗어나며 일상적 이동을 지원한다.",

    signals: [
        {
            title: "공유 도로에서의 예측 가능한 이동",
            description:
                "조정된 모빌리티는 이동에서의 불확실성을 줄일 수 있다. 보행자는 더 명확한 기대를 바탕으로 횡단할 수 있고, 차량은 공유 도로 조건에서 속도를 낮추며, 공유 도로는 더 적은 스트레스로 해석될 수 있다. 예측 가능성은 일상적 안전에 기여할 수 있다.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "명확한 시각적 단서와 예측 가능한 흐름 속에서 보행자, 전기차, 배송 로봇이 차분하게 이동하는 도시 거리",
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
            title: "혼합 모빌리티의 공존",
            description:
                "도시 도로에는 여러 이동 수단이 포함될 수 있다. 사람들은 자율주행 차량, 소형 배송 로봇, 경량 전기 이동 수단과 함께 이동할 수 있다. 공유 사용을 지원하는 설계 조건에서는 특정 수단이 주의를 지배할 필요가 없으며, 여러 수단이 병행하여 운영될 수 있다.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "보행자, 자율 전기차, 소형 배송 로봇, 스쿠터가 공간을 공유하는 도시 거리",
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