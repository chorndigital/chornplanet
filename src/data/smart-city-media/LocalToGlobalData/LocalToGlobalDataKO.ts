//data/smart-city-media/LocalToGlobalDataKO.ts

import {ILocalToGlobal} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const LocalToGlobalDataKO: ILocalToGlobal = {
    headline: "로컬 맥락에서 글로벌 패턴으로",
    paragraph:
        "도시 활동은 일반적으로 로컬하고 구체적인 맥락에서 인식된다. 유사한 조건이 여러 도시, 지역, 문화에서 관찰될 경우 반복되는 패턴을 식별할 수 있다. 여러 지역의 일상적 상황을 비교하면 공통된 구조적 시스템을 검토할 수 있다.",

    items: [
        {
            title: "거리 수준의 루틴",
            description:
                "익숙한 거리를 따라 이루어지는 일상적 이동은 개인이 공간적 조건, 시간 구조, 모빌리티 시스템에 어떻게 대응하는지를 보여준다. 로컬하게 특수하더라도 이러한 루틴은 도시 설계에 의해 형성된 기반 구조적 패턴을 반영한다.",
            image: {
                url: "/smart-city/local-to-global/local-street-daily-routine.png",
                alt: "일상적인 도시 거리 환경에서 보행자, 지역 상점, 운영 중인 모빌리티 시스템이 보이는 장면",
            },
            signalFocus: ["human routine", "street-level mobility", "local behavior"],
        },
        {
            title: "여러 도시에서의 반복 패턴",
            description:
                "유사한 이동 구조가 여러 도시에서 관찰될 경우, 이는 비교 가능한 구조적 조건을 나타낸다. 로컬에서 관찰된 활동은 지역 전반에 걸친 더 넓은 도시 시스템의 행태의 일부로서 검토될 수 있다.",
            image: {
                url: "/smart-city/local-to-global/global-urban-pattern.png",
                alt: "서로 다른 도시 간에 비교 가능한 모빌리티 흐름, 물류 시스템, 공공 공간 이용이 나타나는 도시 환경",
            },
            signalFocus: ["replicability", "urban density", "systemic flow"],
        },
    ],

    purpose: "로컬 비교를 통해 더 넓은 구조적 패턴을 검토",
    narrativeRole: "관찰된 로컬 활동을 시스템 분석과 연결",
    section: "From Local Life to Global Pattern",
    category: "Smart City Media",
    landingUrl: "/smart-city/from-local-life-to-global-pattern",
    lang: "ko",
};