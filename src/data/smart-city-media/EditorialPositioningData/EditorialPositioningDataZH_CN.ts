import {IEditorialPositioning} from "@/data/smart-city-media/_model/ISmartCityMedia"

export const EditorialPositioningDataZH_CN: IEditorialPositioning = {
    headline: "从日常生活到系统洞察",
    paragraphs: [
        "该平台不预测城市的未来，而是通过人的日常生活观察城市如何运作。",
        "当我们聚焦于日常节奏、流动、停留与协同，城市系统便能被看见，而无需被简化为技术或政策语言。",
        "目标不是推广解决方案，而是支持跨越城市、文化与尺度的共同理解。"
    ],
    principles: [
        {
            title: "以人为先的观察",
            description:
                "城市系统通过真实体验来理解。人的日常习惯与日常决策被视为主要信号，而非次要结果。",
            image: {
                url: "/smart-city/editorial/human-first-observation.png",
                alt: "人们在平静的城市街道中穿行，作为城市系统的主要信号",
            },
            landingUrl: "/smart-city/editorial-human-first-observation",
        },
        {
            title: "系统先于技术",
            description:
                "只有当技术能够以有意义的方式塑造行为、安全、可达性或舒适时，才会被纳入考量，而不是作为孤立功能。",
            image: {
                url: "/smart-city/editorial/system-before-technology.png",
                alt: "城市出行与基础设施在日常生活的背景中安静运行",
            },
            landingUrl: "/smart-city/editorial/system-before-technology",
        },
        {
            title: "本地作为全球原型",
            description:
                "中等规模城市可以作为“活的实验室”。当被细致观察时，本地模式可能发展为更广泛的城市系统。",
            image: {
                url: "/smart-city/editorial/local-as-global-prototype.png",
                alt: "一处本地街景，反映出世界各地城市共享的模式",
            },
            landingUrl: "/smart-city/editorial-local-as-global-prototype",
        },
    ],
}