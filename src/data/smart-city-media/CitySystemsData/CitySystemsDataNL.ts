import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataNL: ICitySystems = {
    headline: "Stedelijke Systemen en Dagelijkse Balans",
    paragraph:
        "Stedelijke systemen worden zelden direct ervaren als technologie of beleid. Ze worden ervaren als balans — tussen beweging en pauze, activiteit en rust, efficiëntie en comfort — en bepalen hoe mensen zich elke dag door de stad bewegen.",
    systems: [
        {
            title: "Beweging en Pauze",
            description:
                "Steden functioneren het best wanneer beweging niet alle stilstand verdringt. Straten, oversteekplaatsen en gedeelde ruimtes laten de stroom natuurlijk vertragen en creëren momenten waarin mensen zich veilig genoeg voelen om te stoppen, te observeren en met elkaar om te gaan.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Stedelijke straat die voetgangerspauze en mobiliteitsstroom in balans brengt"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Dichtheid en Comfort",
            description:
                "Dichtheid wordt leefbaar wanneer ruimte, licht en groen nabijheid verzachten. Goed uitgebalanceerde stedelijke systemen maken het mogelijk om ruimte te delen zonder dat mensen zich ingedrukt of opgejaagd voelen.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Comfortabele stedelijke dichtheid met groen en gedeelde ruimte"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Efficiëntie en Menselijk Ritme",
            description:
                "Efficiënte systemen ondersteunen dagelijkse ritmes in plaats van ze te overheersen. Transport, logistiek en diensten passen zich aan het menselijke tempo aan, waardoor steden voorspelbaar aanvoelen in plaats van gehaast.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Stedelijke infrastructuur afgestemd op het dagelijkse menselijke ritme"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};