//data/smart-city-media/UrbanSignalsDataKO.ts

import {IUrbanSignals} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const UrbanSignalsDataKO: IUrbanSignals = {
    headline: "일상에서 관찰되는 도시 신호",
    paragraph:
        "도시는 작고 관찰 가능한 신호를 통해 나타난다. 거리의 인상, 사람들의 이동 방식, 시간에 따른 공간의 변화 등이 이에 해당한다. 이러한 순간들은 항상 시스템으로 설명되지는 않지만, 도시 조건이 어떻게 작동하는지를 나타낼 수 있다.",

    signals: [
        {
            title: "예측 가능한 거리 행동",
            description:
                "보행자, 자전거 이용자, 차량이 명확한 기대 하에 이동할 경우, 이는 명시적 단속 없이도 공유된 규범과 공간적 명확성을 나타낼 수 있다.",

            signalFocus: ["predictability", "shared space", "human trust"],

            image: {
                url: "/smart-city/urban-signals/predictable-shared-street.png",
                alt: "혼잡이나 긴장이 뚜렷하지 않은 공유 도시 거리에서 사람, 자전거, 차량이 원활하게 이동하는 모습",
            },

            landingUrl: "/smart-city/urban-signals-predictable-street",
        },

        {
            title: "일상에 통합된 물류",
            description:
                "배송 로봇, 소형 전기차, 배달 인력이 주의를 지배하지 않고 운영될 경우, 이는 물류가 일상적 이동 패턴에 통합되었음을 나타낼 수 있다.",

            signalFocus: ["logistics", "integration", "low friction"],

            image: {
                url: "/smart-city/urban-signals/urban-logistics.png",
                alt: "현대 도시 거리 생활과 함께 차분하게 운영되는 소형 배송 차량과 로봇",
            },

            landingUrl: "/smart-city/urban-signals-logistics-integration",
        },

        {
            title: "의도된 방식으로 사용되는 공공 공간",
            description:
                "사람들이 머무르고, 멈추고, 일상적인 방식으로 공간을 공유할 경우, 이는 이동 효율성과 공공 공간 사용성 사이의 균형을 반영할 수 있다.",

            signalFocus: ["public space", "comfort", "social rhythm"],

            image: {
                url: "/smart-city/urban-signals/public-space-orchestration.png",
                alt: "잘 설계된 도시 공공 공간에서 사람들이 앉고 걷고 상호작용하는 모습",
            },

            landingUrl: "/smart-city/urban-signals-public-space-use",
        },
    ],
}