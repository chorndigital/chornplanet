import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataKO: ICitySystems = {
    headline: "도시 시스템과 일상의 균형",
    paragraph:
        "도시 시스템은 기술이나 정책으로 직접 체감되기보다, 이동과 멈춤, 활동과 휴식, 효율과 편안함 사이의 균형으로 경험됩니다. 이러한 균형은 사람들이 매일 도시를 어떻게 통과하며 살아가는지를 형성합니다.",
    systems: [
        {
            title: "이동과 멈춤",
            description:
                "도시는 이동이 정지를 지워버리지 않을 때 가장 잘 작동합니다. 거리, 횡단, 공유 공간은 흐름이 자연스럽게 느려질 수 있도록 하며, 사람들이 안전하게 멈추고 관찰하고 상호작용할 수 있는 순간을 만들어냅니다.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "보행자의 멈춤과 이동 흐름이 균형을 이루는 도시 거리"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "밀도와 편안함",
            description:
                "공간, 빛, 녹지가 가까움을 완화할 때 밀도는 살기 좋은 형태가 됩니다. 균형 잡힌 도시 시스템은 사람들이 답답하거나 재촉받는 느낌 없이 공간을 공유할 수 있도록 합니다.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "녹지와 공유 공간으로 편안함이 유지되는 도시 밀도"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "효율성과 인간의 리듬",
            description:
                "효율적인 시스템은 일상의 리듬을 덮어쓰는 것이 아니라 이를 지원합니다. 교통, 물류, 서비스가 인간의 속도에 맞춰 조정될 때 도시는 서두름이 아니라 예측 가능성으로 느껴집니다.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "인간의 일상 리듬에 맞춰진 도시 인프라"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};