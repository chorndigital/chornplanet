import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataZH_CN: ICitySystems = {
    headline: "城市系统与日常平衡",
    paragraph:
        "城市系统往往并不会被直接感知为技术或政策，而是被体验为一种平衡——在流动与停留、活动与休息、效率与舒适之间的平衡。这种平衡塑造了人们每天如何穿行于城市之中。",
    systems: [
        {
            title: "流动与停留",
            description:
                "当流动不会抹去停留的可能性时，城市才能更健康地运作。街道、过街空间与共享区域允许交通流自然放缓，从而形成人们能够安心停下、观察并互动的时刻。",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "在行人停留与出行流动之间保持平衡的城市街道"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "密度与舒适",
            description:
                "当空间、光线与绿化缓和近距离带来的压力时，密度才会变得宜居。平衡良好的城市系统使人们能够共享空间，而不会感到压迫或被催促。",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "在绿化与共享空间中保持舒适的城市密度"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "效率与人的节奏",
            description:
                "高效的系统应当支持日常节奏，而不是覆盖它。交通、物流与服务若能适应人的步调，城市便会呈现出可预期的秩序，而不是匆忙的压力。",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "与人类日常节奏相一致的城市基础设施"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};