import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiFI: IProvince = {
    vision: {
        title: "Visio: Chiang Main älykäs liikkuminen ja pohjoinen portti",
        description:
            "Chiang Main älykäs liikkuminen ja pohjoinen portti on pitkän aikavälin tulevaisuusskenaario, jonka tarkoituksena on tarkastella, miten Chiang Mai voitaisiin tulkita strategiseksi liikenteen, matkailun ja alueellisen yhteyksien solmukohdaksi Ylä-Mekongin osa-alueella. Tarkastelemalla hypoteettista ensisijaisen liikkumiskeskuksen siirtämistä San Sai–Doi Saket -käytävälle skenaario havainnollistaa mahdollisia lähestymistapoja vanhankaupungin ruuhkien lieventämiseen, taloudellisen toiminnan alueelliseen uudelleenjakautumiseen sekä kestävän matkailun, logistiikan ja alueellisen yhteydenpidon kehittyviin malleihin, jotka yhdistävät Chiang Rain, Lampangin ja lähialueet.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
        },
        safeStatement: {
            title: "Selvennys",
            description:
                "Kaikki tällä verkkosivustolla esitetyt ilmailuun ja tulevaisuuden liikennemuotoihin liittyvät elementit ovat ainoastaan havainnollistavia skenaarioita. Ne eivät tarkoita viranomaislupaa, teknistä toteutettavuutta, sertifiointitilannetta tai käyttöönoton valmiutta minkään ilmailu-, liikenne- tai hallintoviranomaisen alaisuudessa."
        }
    },

    urbanHub: {
        title: "Uusi kaupunkikeskus (Solmukohta: San Sai – Doi Saket)",
        description:
            "San Sai – Doi Saket -kaupunkikeskus edustaa skenaariopohjaista tulkintaa Chiang Main tulevaisuuden älykkäästä liikkumiskeskuksesta, jota on käsitteellisesti ohjannut joukkoliikennepainotteisen kehityksen (TOD) periaatteet. Sen tarkoituksena on havainnollistaa, miten liikkumisjärjestelmät, kaupunkitoiminnot ja taloudellinen toiminta voisivat jäsentää uutta kaupunkikeskusta pitkällä suunnittelujänteellä.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "Solmukohdan ensisijainen rooli",
                description:
                    "Havainnollistetaan käsitteellisenä monimuotoisena vaihtokeskuksena, joka tutkii rautatie-, tie- ja ilmapohjaisten liikkumisjärjestelmien mahdollisia suhteita pitkän aikavälin skenaariokehyksessä."
            },
            {
                title: "Keskeiset infrastruktuurikomponentit",
                description: "",
                contents: [
                    {
                        title: "Keskusasema",
                        description:
                            "Käsitteellinen yhtenäinen liikkumislaitos, joka havainnollistaa integroitua liputuslogiikkaa ja koordinoituja vaihtokokemuksia useiden liikennemuotojen välillä."
                    },
                    {
                        title: "Älykäs pysäköinti",
                        description:
                            "Skenaariopohjaiset laajamittaiset älykkäät pysäköintikonseptit, jotka havainnollistavat liityntäpysäköintistrategioita yksityisajoneuvoliikenteen vähentämiseksi keskusta-alueilla."
                    },
                    {
                        title: "Liike- ja asuinalue",
                        description:
                            "Havainnollistavat monikäyttöiset kehityskonseptit — mukaan lukien liike-, majoitus- ja asuinratkaisut — joiden avulla tarkastellaan omavaraisen kaupunkialueen ideaa."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
        }
    },

    connectivityMatrix: {
        title: "Tulevaisuuden yhteysmatriisi",
        description:
            "Yhteysmatriisi esittelee tulevaisuussuuntautuneen analyyttisen viitekehyksen, joka havainnollistaa, miten San Sai–Doi Saket -solmukohta voisi teoriassa liittyä Chiang Main keskeisiin kohteisiin ja lähialueisiin liikennemuotojen avulla, jotka on sovitettu etäisyyteen, maastoon ja matkustusominaisuuksiin.",
        routes: [
            {
                title: "Solmukohta – Chiang Main kansainvälinen lentoasema (kaupunki- ja ilmayhteys)",
                description:
                    "Skenaariopohjainen liikkumiskäytävä, joka havainnollistaa, miten kaupunki–lentoasemayhteyksiä voitaisiin käsitteellistää luotettavuuden, ennakoitavuuden ja verkostointegraation näkökulmista.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "Liikennemalli: LRT tai monorail",
                    description: "",
                    sections: [
                        {
                            title: "Keskeiset haasteet",
                            description:
                                "Kaupunkiruuhkat, maankäytön rajoitteet ja korkean tiheyden asuinympäristöt."
                        },
                        {
                            title: "Reittistrategia",
                            description:
                                "Käsitteellinen linjaus, joka seuraa kehätietä vanhankaupungin ohittamiseksi ja havainnollistaa yhteyttä solmukohdan ja lentoaseman välillä suuntaa-antavalla matkustusajalla skenaario-oletusten mukaisesti."
                        },
                        {
                            title: "Erityisjärjestelmä",
                            description:
                                "Havainnollistavat palvelukonseptit, jotka tarkastelevat, miten matkatavaroiden käsittelyä ja siirtymäkokemuksia voitaisiin ajatella uudelleen tulevaisuuden liikkumisekosysteemeissä."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
                }
            },
            {
                title: "Solmukohta – Doi Suthep (kulttuuri- ja maisemareitti)",
                description:
                    "Skenaario, joka havainnollistaa käsitteellisiä liikkumisratkaisuja kulttuuriperintökohteiden ja luonnonmaisemien yhdistämiseksi kävijäherkkien ja vähävaikutteisten liikenneideoiden kautta.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "Liikennemalli: sähköinen shuttle + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Keskeiset haasteet",
                            description:
                                "Vuoristoinen maasto, ympäristön herkkyys ja vaihteleva kävijäkysyntä."
                        },
                        {
                            title: "Joukkoliikenne",
                            description:
                                "Sähköisten shuttle-konseptien havainnollistaminen, jotka tarkastelevat vaihtopohjaista pääsyä solmukohdasta vuoriston juurialueille yksityisajoneuvojen käytön vähentämiseksi."
                        },
                        {
                            title: "Drone-reitti (premium)",
                            description:
                                "Käsitteelliset eVTOL-matkanarratiivit, jotka havainnollistavat maisemalentoja ja hypoteettista vertiporttien käyttöä nimettyjen maamerkkialueiden läheisyydessä."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
                }
            },
            {
                title: "Solmukohta – Doi Inthanon (luonto- ja seikkailureitti)",
                description:
                    "Tulevaisuussuuntautunut skenaario, joka tarkastelee pitkän matkan luonto- ja seikkailumatkailun konsepteja painottaen kokemussuunnittelua ja ympäristön huomioimista.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "Liikennemalli: nopea syöttöliikenne + pitkän kantaman eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "Keskeiset haasteet",
                            description:
                                "Pitkät etäisyydet, pitkät maantiekuljetukset ja monimutkainen vuoristoinen maasto."
                        },
                        {
                            title: "Pikasyöttö",
                            description:
                                "Havainnollistavat pikabussi- tai pakettiautokonseptit, jotka tarkastelevat suoria yhteyksiä solmukohdan ja Chom Thongin alueen välillä."
                        },
                        {
                            title: "Tulevaisuuden teknologia (tutkiva)",
                            description:
                                "Spekulatiivinen pitkän kantaman eVTOL-skenaario, jonka avulla tarkastellaan, miten matkustusajan kertomuksia voitaisiin kehystää uudelleen tulevaisuuden liikkumiskeskusteluissa."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "Vertiportti: älykkään ilmaliikkumisen portti",
        description:
            "Vertiportti edustaa havainnollistavaa tulevaisuuden ilmaliikkumisskenaariota, joka tarkastelee, miten matalalentoisen ilmailun konseptit voisivat teoriassa liittyä kaupunkialueisiin, lentoasemiin, vuoristoalueisiin ja matkailukohteisiin.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "Havainnollistavat vertiportin osat (skenaariopohjainen)",
        structure: [
            {
                title: "Laskeutumisalueet",
                items: [
                    {title: "Havainnollistavat laskeutumisalueet, jotka edustavat eVTOL-toimintojen mahdollista sijoittumista tulevaisuuden skenaarioissa"},
                    {title: "Käsitteelliset visuaaliset ohjausratkaisut ilmailuympäristöistä inspiroituneina"},
                    {title: "Monitasoiset tilaratkaisut, jotka havainnollistavat turvallisuussuuntautuneita suunnittelunäkökohtia"}
                ]
            },
            {
                title: "Terminaalitilat",
                items: [
                    {title: "Matkustajalounge-konseptit, jotka suuntautuvat kaupunki- ja vuoristonäkymiin"},
                    {title: "Havainnollistavat kulku- ja lähtöselvitysvirtojen konseptit"},
                    {title: "Tilat, jotka on käsitteellisesti suunniteltu tukemaan kansainvälisten vierailijoiden liikkumista"}
                ]
            },
            {
                title: "Maaintegraatio",
                items: [
                    {title: "Käsitteelliset valtatieyhteydet ja älyteiden integraatio"},
                    {title: "Sähköajoneuvojen pysäköinti ja autonomisten shuttle-ratkaisujen rajapintakonseptit"}
                ]
            },
            {
                title: "Ilmatilan koordinointi",
                items: [
                    {title: "Havainnollistavat risteämättömät lentoreittikonseptit"},
                    {title: "Käsitteellinen matalan ilmatilan koordinointi, joka pohjautuu kehittyviin kansainvälisiin viitekehyksiin"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["Tulevaisuuden liikkumisskenaario", "Havainnollistava konsepti", "Ei-sitova visualisointi"]
        }
    },

    technologyIntegration: {
        title: "Teknologinen integraatio",
        description:
            "Tässä skenaariossa oletetaan integroitujen digitaalisten, tieto- ja energiajärjestelmien olemassaolo käsitteellisinä mahdollistajina, ei vahvistettuina toteutuksina.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "Yhtenäinen alustakonsepti, joka havainnollistaa, miten päästä päähän -matkasuunnittelua, varaamista ja maksamista voitaisiin tarkastella useiden liikennemuotojen välillä."
            },
            {
                title: "Droonien ilmatilan hallinta",
                description:
                    "Havainnollistavat matalan ilmatilan koordinointikonseptit, joiden avulla tarkastellaan turvallisuutta, tehokkuutta ja sääntely-yhdenmukaisuutta."
            },
            {
                title: "Vihreä energiaverkko",
                description:
                    "Skenaariopohjaiset uusiutuvan energian ja varastoinnin konseptit, jotka havainnollistavat mahdollista tukea sähköajoneuvo- ja eVTOL-narratiiveille."
            }
        ]
    },

    summaryExpectedResults: {
        title: "Havainnollistetut tulokset ja strategiset havainnot",
        description:
            "Tämä skenaario havainnollistaa mahdollisia suuntia, joihin Chiang Main liikkumis-, matkailu- ja talousjärjestelmät voisivat kehittyä erilaisten pitkän aikavälin oletusten vallitessa.",
        items: [
            {
                title: "Kaupunkiruuhkien vähentyminen",
                description:
                    "Havainnollistaa, miten historiallisiin kaupunkialueisiin kohdistuva paine voisi lieventyä tiettyjen liikkumisen uudelleenjärjestelyjen yhteydessä."
            },
            {
                title: "Uuden talousalueen kehittyminen",
                description:
                    "Osoittaa, miten kehityksen painopiste voisi siirtyä vaihtoehtoisille kasvukäytäville."
            },
            {
                title: "Matkailun kansainvälinen erilaistuminen",
                description:
                    "Tarkastelee, miten kehittyneet liikkumiskonseptit voisivat vaikuttaa erottuviin matkailun kertomuksiin."
            },
            {
                title: "Strateginen vaiheistusnäkemys",
                description:
                    "Osoittaa, että maapohjaiset sähköisen liikkumisen konseptit saattavat edeltää raide- ja ilmapohjaisia järjestelmiä hallinnon, teknologian ja infrastruktuurin kypsyessä."
            }
        ]
    }
}