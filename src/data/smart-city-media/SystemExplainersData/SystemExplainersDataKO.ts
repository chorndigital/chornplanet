//data/smart-city-media/SystemExplainersDataKO.ts

import {ISystemExplainers} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const SystemExplainersDataKO: ISystemExplainers = {
    headline: "일상적 이동을 뒷받침하는 시스템",
    paragraph:
        "자연스럽게 보이는 일상적 이동은 지속적인 조정에 의해 지원되는 경우가 많다. 이러한 시스템은 직접적인 주의를 요구하는 경우가 드물지만, 도시가 더 넓은 규모에서 어떻게 작동하는지에 영향을 준다.",

    systems: [
        {
            title: "모빌리티 조정",
            description:
                "신호 체계, 보행자 흐름, 자율주행 차량, 대중교통은 조정된 시간 구조 내에서 운영된다. 안정적인 조건에서는 이동이 명확히 관리되는 것보다 더 연속적으로 보일 수 있다.",
            image: {
                url: "/smart-city/system-explainers/mobility-coordination.png",
                alt: "보행자, 차량, 자율 교통을 조정하는 도시 모빌리티 시스템",
            },
        },
        {
            title: "도시 물류",
            description:
                "물품은 배송 서비스, 마이크로 차량, 자동화 시스템을 통해 도시 내에서 이동한다. 이러한 물류 운영은 일상 활동을 지원하며, 도시 이동 패턴과 통합될 경우 방해를 줄일 수 있다.",
            image: {
                url: "/smart-city/system-explainers/urban-logistics.png",
                alt: "도시 거리에서 지속적으로 운영되는 일상 물류",
            },
        },
        {
            title: "공공 공간 구성",
            description:
                "보도, 횡단 구역, 조명, 거리 활동은 하루 동안 사람들이 공간을 공유하는 방식에 영향을 준다. 이러한 요소는 이동 조건과 공공 공간의 전반적인 사용 가능성에 영향을 미친다.",
            image: {
                url: "/smart-city/system-explainers/public-space-orchestration.png",
                alt: "공유 도시 생활을 지원하도록 설계된 공공 공간",
            },
        },
    ],
};