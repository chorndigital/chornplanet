import {ICitySystems} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const CitySystemsDataDE: ICitySystems = {
    headline: "Städtische Systeme und Alltägliche Balance",
    paragraph:
        "Städtische Systeme werden selten direkt als Technologie oder Politik wahrgenommen. Sie werden als Balance erlebt — zwischen Bewegung und Pause, Aktivität und Ruhe, Effizienz und Komfort — und prägen, wie Menschen sich jeden Tag durch die Stadt bewegen.",
    systems: [
        {
            title: "Bewegung und Pause",
            description:
                "Städte funktionieren am besten, wenn Bewegung nicht jede Form von Stillstand verdrängt. Straßen, Übergänge und gemeinsame Räume ermöglichen es, dass der Fluss natürlich langsamer wird und Momente entstehen, in denen Menschen sich sicher genug fühlen, um stehen zu bleiben, zu beobachten und zu interagieren.",
            image: {
                url: "/smart-city/city-systems/movement-and-pause.png",
                alt: "Stadtstraße im Gleichgewicht zwischen Fußgängerpause und Mobilitätsfluss"
            },
            balanceSignals: ["speed vs safety", "flow vs rest"],
            landingUrl: "/smart-city/city-systems-movement-and-pause"
        },
        {
            title: "Dichte und Komfort",
            description:
                "Dichte wird lebenswert, wenn Raum, Licht und Grünflächen Nähe abmildern. Gut ausbalancierte Stadtsysteme ermöglichen es Menschen, Räume zu teilen, ohne sich eingeengt oder gehetzt zu fühlen.",
            image: {
                url: "/smart-city/city-systems/density-and-comfort.png",
                alt: "Komfortable urbane Dichte mit Grünflächen und gemeinsam genutztem Raum"
            },
            balanceSignals: ["proximity vs privacy", "activity vs calm"],
            landingUrl: "/smart-city/city-systems-density-and-comfort"
        },
        {
            title: "Effizienz und Menschlicher Rhythmus",
            description:
                "Effiziente Systeme unterstützen tägliche Rhythmen, statt sie zu übersteuern. Verkehr, Logistik und Dienstleistungen passen sich dem menschlichen Tempo an und lassen Städte vorhersehbar wirken, statt gehetzt.",
            image: {
                url: "/smart-city/city-systems/efficiency-and-rhythm.png",
                alt: "Städtische Infrastruktur im Einklang mit dem täglichen Rhythmus der Menschen"
            },
            balanceSignals: ["automation vs control", "speed vs predictability"],
            landingUrl: "/smart-city/city-systems-efficiency-and-rhythm"
        }
    ]
};