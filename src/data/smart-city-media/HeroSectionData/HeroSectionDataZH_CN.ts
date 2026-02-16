import {IHeroSection} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const HeroSectionDataZH_CN: IHeroSection = {
    headline: "当人的生活塑造城市",
    paragraph:
        "城市并不仅仅由技术、基础设施或政策所定义，而是由人们如何移动、停留、聚集并度过日常生活所塑造。智慧城市并非始于系统，而是始于那些悄然揭示城市如何运作的日常行为。",

    softTexts: [
        {
            title: "不是未来的愿景",
            description:
                "这是对日常生活的观察，在这里，新兴的出行方式、低调运行的系统以及人类行为已经相互交织。"
        },
        {
            title: "本地瞬间，全球意义",
            description:
                "一条街道上发生的事情，往往反映出世界各地城市所共享的模式。"
        }
    ],

    image: {
        url: "/smart-city/hero-section/city-shaped-by-people-move.png",
        alt: "在一座现代中等规模城市中，人们、自主出行方式与城市系统自然共存的日常城市生活",
    },
    purpose: "建立世界观，而非解释功能",
    narrativeRole: "表明该平台通过人的生活而非技术来观察城市",
    section: "Hero Section",
    category: "Smart City Media",
    editorialTone: "observational",
    signalFocus: ["mobility", "safety", "density", "coordination"],
    landingUrl: "/smart-city/when-human-life-shapes-the-city",
};