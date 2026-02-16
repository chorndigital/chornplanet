//data/smart-city-media/MobilityFocusDataFI.ts

import {IMobilityFocus} from "@/data/smart-city-media/_model/ISmartCityMedia";

export const MobilityFocusDataFI: IMobilityFocus = {
    headline: "Liikkumista havainnoidaan ennen kuin se ymmärretään",
    paragraph:
        "Ihmiset eivät aina tarkastele liikkumisjärjestelmiä suoraan. He kohtaavat ne pienissä tilanteissa — kadun ylittämisessä, kyydin odottamisessa tai tilan jakamisessa muiden kanssa. Kun liikkuminen toimii johdonmukaisesti, se kiinnittää vähemmän huomiota ja tukee arjen rutiininomaista liikkumista.",

    signals: [
        {
            title: "Ennakoitava liikkuminen jaetuilla kaduilla",
            description:
                "Koordinoitu liikkuminen voi vähentää epävarmuutta liikkeessä. Jalankulkijat voivat ylittää kadun selkeämpien odotusten varassa, ajoneuvot hidastavat jaettujen katujen olosuhteissa, ja jaettuja katuja voidaan tulkita vähemmällä kuormituksella. Ennakoitavuus voi edistää arjen turvallisuutta.",
            image: {
                url: "/smart-city/mobility-focus/predictable-shared-street.png",
                alt: "Kaupunkikatu, jossa jalankulkijat, sähköajoneuvot ja toimitusrobotit liikkuvat rauhallisesti selkeiden visuaalisten vihjeiden ja ennakoitavan virtauksen mukaisesti",
            },
            signalFocus: [
                "pedestrian confidence",
                "shared space",
                "predictability",
                "street readability"
            ],
            landingUrl: "/smart-city/mobility-focus-predictable-movement",
        },
        {
            title: "Sekaliikkumisen rinnakkaiselo",
            description:
                "Kaupunkikaduilla voi olla useita liikkumismuotoja. Ihmiset voivat kulkea autonomisten ajoneuvojen, pienten toimitusrobottien ja kevyiden sähköisten kulkuneuvojen rinnalla. Suunnitteluratkaisuissa, jotka tukevat yhteiskäyttöä, minkään yksittäisen muodon ei tarvitse hallita huomiota, ja useat muodot voivat toimia rinnakkain.",
            image: {
                url: "/smart-city/mobility-focus/mixed-mobility-coexistence.png",
                alt: "Kaupunkikatu, jossa jalankulkijat, autonomiset sähköajoneuvot, pienet toimitusrobotit ja skootterit jakavat tilaa",
            },
            signalFocus: [
                "mixed mobility",
                "autonomous vehicles",
                "delivery robots",
                "human-centered design"
            ],
            landingUrl: "/smart-city/mobility-focus-mixed-mobility",
        }
    ],
};