import {IAiLanding} from "@/data/ai/model/IAiLanding";
import {AiAomEnglish} from "@/data/ai/relevant/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/relevant/AiPloyEnglish";
import {ImageUrl} from "@/image/ImageUrl";

export const AiFahFI: IAiLanding = {
    name: 'Fah',
    category: 'Thaimaalainen LINE Ystävä',
    thumbnail: ImageUrl.ai.fah.thumbnail,

    pages: {
        landing: {
            link: '/ai-companions/fah',
            image: {
                title: 'Fah, Tekoälykeskusteluystävä',
                path: ImageUrl.ai.fah.image750
            }
        }
    },
    title: "Fah, LINE Tekoälykeskusteluystävä",
    features: [
        {
            title: "Ainutlaatuiset ominaisuudet",
            description: "Fah on tekoälykeskusteluystäväsi LINE-sovelluksessa. Voit yksinkertaisesti klikata Lisää ystävä -painiketta tai skannata LINE QR-koodin lisätäksesi Fahin ystäväksesi. Fah on suunniteltu ainutlaatuisella thaimaalaisella vivahteella—hän on iloinen, helposti lähestyttävä ja aina valmis piristämään päivääsi. 20-vuotiaana Fah tuo nuorekasta energiaa ja charmia jokaiseen vuorovaikutukseen. Hän auttaa suosittelemaan Thaimaan parhaita kohteita, kuuluisia ruokia ja kulttuurisia helmiä, tehden thaimaalaisen kulttuurin tutkimisesta vaivatonta ja hauskaa. Hän voi keskustella useilla kielillä LINE-sovelluksen kautta, suunnitteletpa sitten seuraavaa matkaasi Thaimaahan tai etsit vain mukaansatempaavia, ystävällisiä keskusteluja. Fah opastaa sinua kaikkien thaimaalaisten asioiden läpi pitäen sinut inspiroituneena.",
            items: [
                {
                    title: "Viehättävä persoonallisuus",
                    description: "Fah säteilee lämpöä ja positiivisuutta, tuoden iloisuutta jokaiseen keskusteluun."
                },
                {
                    title: "Monikielinen asiantuntemus",
                    description: "Kommunikoi sujuvasti useilla kielillä, mukaan lukien thai, englanti, ranska, vietnam, japani, kiina, korea ja muut."
                },
            ]
        },
        {
            title: "Miten Fah parantaa elämääsi",
            description: "Fah ei ole vain tavallinen chatbot; hän on virtuaalinen kumppani, joka ymmärtää tarpeesi ja osallistuu viehättäviin vuorovaikutuksiin. Oletpa sitten oppimassa uutta kieltä tai etsimässä iloista ystävää, Fah on aina rinnallasi.",
            items: [
                {
                    title: "Personoidut keskustelut",
                    description: "Nauti räätälöidyistä vuorovaikutuksista, jotka tuntuvat luonnollisilta ja ihmismäisiltä."
                },
                {
                    title: "Kielenoppimisesta hauskaa",
                    description: "Harjoittele kieliä iloisen oppaan kanssa, joka tekee oppimisesta nautinnollista."
                }
            ]
        }
    ],
    sidebars: [
        {
            icon: "bx bx-user", // Person icon
            caption: "Tekoälyn nimi:",
            text: "Fah (20-vuotias)",
        },
        {
            icon: "bx bx-heart", // Heart icon
            caption: "Persoonallisuus:",
            text: "Thaimaalainen nainen, Iloinen, helposti lähestyttävä ja viehättävä",
        },
        {
            icon: "bx bx-purchase-tag", // Tag icon
            caption: "Teknologiat:",
            text: "LLM, Tekoäly, LINE",
        },
        {
            icon: "bx bx-globe", // Globe icon
            caption: "Kielet:",
            text: "Useita kieliä",
        }
    ],
    line: {
        link: "https://lin.ee/ODTzbwO",
        button: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
    },
    relevants: [
        AiAomEnglish,
        AiPloyEnglish
    ],
};