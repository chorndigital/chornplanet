import {ISmartCityLanding} from "@/data/smart-city-landing/_model/ISmartCityLanding";

export const WhenHumanLifeShapesTheCityFI: ISmartCityLanding = {
    heroObservation: {
        headline: "Kun Ihmisen Arki Muovaa Kaupunkia",
        paragraphs: [
            "Kaupunkeja eivät määrittele pelkästään teknologia, vaan se, miten ihmiset liikkuvat, pysähtyvät ja toimivat vuorovaikutuksessa arjessa.",
            "Havainnoimalla paikallisia rutiineja voidaan tunnistaa kaupunkimalleja, jotka toistuvat eri kaupungeissa ja konteksteissa."
        ],
        image: {
            url: "/smart-city/hero/when-human-life-shapes-the-city.png",
            alt: "Arjen elämä muovaa rauhallista älykaupunkikatua"
        },
        cta: {
            label: "Tutki malleja",
            href: `/smart-city/from-local-life-to-global-pattern`
        }
    },

    systemExplanation: {
        headline: "Arjen Alla Toimivat Järjestelmät",
        paragraphs: [
            "Kaupunkijärjestelmät koordinoivat liikkumista, saavutettavuutta ja turvallisuutta päivittäisten suunnitteluratkaisujen kautta.",
            "Hyvin suunniteltuina nämä järjestelmät toimivat huomaamattomasti mutta ovat olennaisia."
        ]
    },

    whyItMatters: {
        headline: "Miksi Tämä On Tärkeää",
        paragraphs: [
            "Kaupungit, jotka mukautuvat ihmisten rytmiin, kehittyvät yleensä kestävämmällä tavalla ja säilyttävät pitkän aikavälin vakauden."
        ]
    },

    relatedSignals: [
        {
            headline: "Ennakoitavat Jaetut Kadut",
            paragraphs: [
                "Ennakoitavuuteen suunnitellut kadut vähentävät kitkaa ja tukevat keskinäistä luottamusta."
            ],
            image: {
                url: "/smart-city/signals/predictable-shared-street.png",
                alt: "Ennakoitava jaettu katu"
            },
            cta: {
                label: "Lue signaali",
                href: `/smart-city/urban-signals-predictable-street`
            }
        }
    ],
}