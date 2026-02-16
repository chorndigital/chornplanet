import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const HumanDailyFlowMorningKO: ISmartCityLanding = {
    heroObservation: {
        headline: "아침 흐름 — 하루의 시작",
        paragraphs: [
            "아침은 일상이 시작될 때 도시가 준비되어 있는지를 보여줍니다.",
            "출근길, 등굣길, 작은 용무, 그리고 이른 배송은 이동 시스템이 일상의 리듬을 지원하는지, 혹은 이동에 마찰을 만들어내는지를 드러냅니다.",
            "스마트 시티는 바로 여기에서 보입니다. 첫 횡단, 첫 신호, 그리고 하루의 첫 공유된 움직임 속에서 나타납니다."
        ],
        image: {
            url: "/smart-city/human-daily-flow/morning-flow/morning-reveals-city-wakes-up.png",
            alt: "출근하는 보행자, 차분히 이동하는 스쿠터, 배경에 조용한 자율주행 셔틀이 보이는 태국의 이른 아침 도시 거리",
        },
        cta: {
            label: "한낮 흐름 보기",
            href: "/smart-city/human-daily-flow-midday",
        },
    },

    systemExplanation: {
        headline: "아침이 도시를 드러내는 방식",
        paragraphs: [
            "아침은 도시 시스템의 초기 스트레스 테스트 역할을 합니다. 횡단이 불명확하거나 보도가 안전하지 않게 느껴지거나 교통이 예측 불가능해지면, 사람들은 즉시 행동을 바꿉니다.",
            "신뢰할 수 있는 도시는 속도로 정의되지 않습니다. 읽기 쉬움으로 정의됩니다. 보행자, 스쿠터, 자전거, 차량이 최소한의 충돌로 조율되는 상태입니다."
        ],
        image: {
            url: "/smart-city/system-explainers/mobility-coordination.png",
            alt: "예측 가능한 횡단과 차분한 아침 이동을 지원하는 도시 이동 조율 시스템",
        },
    },

    whyItMatters: {
        headline: "왜 아침 흐름이 중요한가",
        paragraphs: [
            "아침 리듬을 지원하는 도시는 단속에 의존하지 않고도 스트레스를 줄이고 안전을 높이며 신뢰를 형성합니다."
        ],
        points: [
            {
                title: "신뢰는 첫 횡단에서 시작된다",
                description:
                    "사람들이 자연스럽게 안전하게 건널 수 있다고 느낄 때, 도시는 설명 없이도 신뢰성을 전달합니다.",
            },
            {
                title: "리듬은 속도보다 중요하다",
                description:
                    "아침 흐름은 최대 처리량보다 예측 가능한 타이밍을 지원하는 거리에서 가장 잘 작동합니다.",
            },
            {
                title: "일상의 안전은 예방적 설계다",
                description:
                    "차분한 아침 통근은 위험, 혼잡, 마찰이 나타나기 전에 이를 줄입니다.",
            },
        ],
    },

    relatedSignals: [
        {
            headline: "예측 가능한 거리 행동",
            paragraphs: [
                "아침이 원활하게 작동하려면 사람들이 망설임 없이 움직일 수 있어야 합니다. 예측 가능성은 신뢰의 기반입니다."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "차분한 교통 속에서 공유 도로를 예측 가능하게 이동하는 태국의 보행자와 자전거 이용자",
            },
            landingUrl: "/smart-city/urban-signals-predictable-street",
        },
        {
            headline: "이동과 멈춤",
            paragraphs: [
                "두려움이나 위험 없이 자연스럽게 속도를 늦출 수 있을 때 도시는 부드럽게 깨어납니다."
            ],
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "아침 이동과 보행자의 안전한 멈춤을 균형 있게 설계한 거리",
            },
            landingUrl: "/smart-city/city-systems-movement-and-pause",
        },
    ],
};