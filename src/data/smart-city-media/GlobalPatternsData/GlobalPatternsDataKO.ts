import {IGlobalPatterns} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const GlobalPatternsDataKO: IGlobalPatterns = {
    headline: "일상 도시에서 관찰되는 글로벌 패턴",
    paragraph:
        "문화, 규모, 소득 수준이 서로 다른 도시들에서 유사한 이동 및 공공공간 활용 패턴이 점차 관찰되고 있습니다. 이러한 현상은 기술만으로 형성되는 것이 아니라, 인간의 일상적 활동, 공간적 제약, 그리고 시스템 간 조정이 시간에 따라 정렬되면서 나타납니다. 이러한 신호를 분석하면 서로 다른 지역의 도시들이 지역적 정체성을 유지하면서도 유사한 운영 특성을 보이는 현상을 설명할 수 있습니다.",

    signals: [
        {
            title: "예측 가능한 도로 환경은 공공 활동을 지원한다",
            description:
                "이동 시스템이 예측 가능해지면 공유 공간에서의 이용자 신뢰가 높아집니다. 여러 지역에서 속도 극대화보다 불확실성 감소를 우선하는 도로는 보다 안정적이고 편안한 공공공간 이용과 관련되어 나타납니다.",
            image: {
                url: "/smart-city/global-patterns/predictable-shared-street.png",
                alt: "보행자, 자전거, 차량이 예측 가능하게 이동하는 차분한 공유 도로"
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
            title: "도시 환경에서 복합 모빌리티의 증가 추세",
            description:
                "보행, 자전거, 전동 스쿠터, 소형 전기차, 배송 로봇 등이 많은 도시에서 점차 보편적으로 관찰되고 있습니다. 여러 지역에서 다양한 이동 수단이 공존할 수 있도록 환경이 구성되고 있으며, 이는 공간적 및 운영상의 제약에 대한 적응으로 이해됩니다.",
            image: {
                url: "/smart-city/global-patterns/mixed-mobility-coexistence.png",
                alt: "여러 이동 수단이 공존하는 도시 환경"
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
            title: "일상 도시 시스템 내 물류 통합",
            description:
                "소규모 물류에는 지역 배송용 전기차, 지상 로봇, 그리고 법적으로 허용되는 경우의 공중 시스템이 포함되며, 이러한 요소들은 일상적인 도시 운영에 점차 통합되고 있습니다. 기존의 공간 및 안전 체계 안에서 물류를 조정하는 도시는 공공의 편안함을 유지하면서 운영 효율성 향상과 관련된 경향을 보입니다.",
            image: {
                url: "/smart-city/global-patterns/urban-logistics.png",
                alt: "도시 환경에서 운영되는 소형 배송 차량과 로봇"
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