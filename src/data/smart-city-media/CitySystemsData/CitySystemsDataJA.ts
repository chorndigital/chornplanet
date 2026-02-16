import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataJA: ICitySystems = {
    headline: "都市システムと日常のバランス",
    paragraph:
        "都市システムは、技術や政策として直接意識されることは多くありません。それは、移動と停止、活動と休息、効率と快適さのバランスとして体感され、人々が日々都市をどのように行き来するかを形づくります。",
    systems: [
        {
            title: "移動と停止",
            description:
                "都市は、移動が静けさを消し去らないときに最も健全に機能します。通りや横断、共有空間が流れを自然に減速させ、人々が安心して立ち止まり、観察し、関わり合える瞬間を生み出します。",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "歩行者の停止と移動の流れが両立する都市の通り"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "密度と快適さ",
            description:
                "空間、光、緑が近接性を和らげるとき、密度は住みやすいものになります。バランスの取れた都市システムは、人々が圧迫感や急かされる感覚を持たずに空間を共有できるようにします。",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "緑と共有空間によって快適さが保たれた都市の密度"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "効率と人のリズム",
            description:
                "効率的なシステムは、日々のリズムを上書きするのではなく支えます。交通、物流、サービスが人のペースに適応することで、都市は慌ただしさではなく予測可能性として感じられます。",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "人々の日常のリズムに整合する都市インフラ"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};