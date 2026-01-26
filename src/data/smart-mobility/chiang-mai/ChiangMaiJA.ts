import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiJA: IProvince = {
    vision: {
        title: "ビジョン：チェンマイ・スマートモビリティと北部ゲートウェイ",
        description:
            "チェンマイ・スマートモビリティと北部ゲートウェイは、上メコン地域における戦略的な交通・観光・地域接続の拠点として、チェンマイをどのように解釈し得るかを検討するための長期的な将来モビリティ・シナリオである。主要なモビリティ拠点をサンサーイ–ドーイサケット回廊へ仮想的に移転する想定を通じて、本シナリオは、旧市街における渋滞緩和の可能性、経済活動の空間的再配置、ならびにチェンライ、ランパーンおよび周辺地域を結ぶ持続可能な観光、物流、広域接続の進化的な在り方を示している。",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
        },
        safeStatement: {
            title: "補足説明",
            description:
                "本ウェブサイトに掲載されている航空モビリティおよび将来交通に関する要素は、すべて概念的なシナリオに基づくものであり、いかなる航空・交通・政府当局による規制承認、技術的実現性、認証状況、または実装準備を示唆するものではない。"
        }
    },

    urbanHub: {
        title: "新たな都市中核（ハブ：サンサーイ – ドーイサケット）",
        description:
            "サンサーイ–ドーイサケット都市ハブは、トランジット・オリエンテッド・ディベロップメント（TOD）の原則に着想を得た、チェンマイにおける将来のスマートモビリティ中核をシナリオベースで解釈したものである。これは、長期的な計画視点において、モビリティシステム、都市機能、経済活動がどのように新たな都市中核に構成され得るかを示すことを目的としている。",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "ハブの主な役割",
                description:
                    "長期的なシナリオ文脈において、鉄道・道路・航空モビリティシステム間の関係性を検討するための概念的な複合交通結節点として示されている。"
            },
            {
                title: "主要インフラ要素",
                description: "",
                contents: [
                    {
                        title: "中央ステーション",
                        description:
                            "複数の交通モード間における統合的なチケッティングの考え方と、連携した乗り換え体験を示す概念的な統合モビリティ施設。"
                    },
                    {
                        title: "スマートパーキング",
                        description:
                            "都心部への自家用車流入を抑制することを目的としたパーク・アンド・ライド戦略を示す、シナリオベースの大規模インテリジェント駐車概念。"
                    },
                    {
                        title: "商業・住宅ゾーン",
                        description:
                            "商業、宿泊、住宅機能を含む複合用途開発の概念を通じて、自立型都市地区の考え方を検討するためのイラスト表現。"
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
        }
    },

    connectivityMatrix: {
        title: "将来接続マトリクス",
        description:
            "接続マトリクスは、距離、地形、移動特性に応じた交通手段を用いて、サンサーイ–ドーイサケット・ハブが理論上どのようにチェンマイおよび周辺の主要目的地と関係し得るかを示す、将来志向の分析フレームワークである。",
        routes: [
            {
                title: "ハブ – チェンマイ国際空港（都市・航空連携）",
                description:
                    "信頼性、予測可能性、ネットワーク統合を重視した都市―空港間接続の概念的な在り方を示す、シナリオベースのモビリティ回廊。",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "交通モデル：LRT またはモノレール",
                    description: "",
                    sections: [
                        {
                            title: "主な課題",
                            description:
                                "都市渋滞、土地利用の制約、高密度な住宅環境。"
                        },
                        {
                            title: "ルート戦略",
                            description:
                                "旧市街を回避するため外環状道路に沿った概念的な整合を想定し、シナリオ前提のもとでハブと空港を結ぶ移動時間の目安を示す。"
                        },
                        {
                            title: "特定システム",
                            description:
                                "将来のモビリティ・エコシステムにおいて、手荷物取扱いや乗り換え体験がどのように再構築され得るかを検討するための概念的サービス。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
                }
            },
            {
                title: "ハブ – ドーイステープ（文化・景観ルート）",
                description:
                    "文化遺産地域と自然景観を、低影響かつ来訪者配慮型の交通アイデアによって結ぶ概念的モビリティ手法を示すシナリオ。",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "交通モデル：EVシャトル + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "主な課題",
                            description:
                                "山岳地形、環境への配慮、変動する来訪者需要。"
                        },
                        {
                            title: "公共輸送",
                            description:
                                "ハブから山麓の中継地点への乗り継ぎ型アクセスを想定し、自家用車依存を低減するためのEVシャトル概念。"
                        },
                        {
                            title: "空路（プレミアム）",
                            description:
                                "景観飛行の可能性や、指定されたランドマーク周辺における仮想的なバーティポート利用を示すeVTOL移動シナリオ。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
                }
            },
            {
                title: "ハブ – ドーイインタノン（自然・アドベンチャールート）",
                description:
                    "体験設計と環境配慮に重点を置いた、長距離の自然・冒険型移動概念を検討する将来志向のシナリオ。",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "交通モデル：高速フィーダー + 長距離eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "主な課題",
                            description:
                                "長距離移動、長時間の道路移動、複雑な山岳地形。"
                        },
                        {
                            title: "エクスプレス・フィーダー",
                            description:
                                "ハブとチョムトーン地域を結ぶ直接的な接続を検討する、バスまたはバンによる高速輸送の概念。"
                        },
                        {
                            title: "将来技術（探索的）",
                            description:
                                "将来モビリティに関する議論の中で、移動時間の捉え方を再構成する可能性を検討するための、投機的な長距離eVTOLシナリオ。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "バーティポート：スマート空中モビリティ・ゲートウェイ",
        description:
            "バーティポートは、低高度航空の概念が都市部、空港、山岳地域、観光地と理論的にどのように連携し得るかを検討するための、将来空中モビリティの概念的シナリオである。",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "バーティポート構成要素（シナリオベース）",
        structure: [
            {
                title: "着陸エリア",
                items: [
                    {title: "将来シナリオにおけるeVTOL運用の受け入れ可能性を示す概念的着陸ゾーン"},
                    {title: "航空環境に着想を得た概念的な視覚誘導要素"},
                    {title: "安全性を考慮した設計視点を示す多層的な空間構成"}
                ]
            },
            {
                title: "ターミナル空間",
                items: [
                    {title: "都市および山岳景観を意識した旅客ラウンジの概念"},
                    {title: "動線およびチェックインフローに関する概念的表現"},
                    {title: "国際的な来訪者の移動を支援することを想定した施設概念"}
                ]
            },
            {
                title: "地上統合",
                items: [
                    {title: "高速道路アクセスおよびスマートロードとの概念的統合"},
                    {title: "EV駐車および自動運転シャトルとの接続概念"}
                ]
            },
            {
                title: "空域調整",
                items: [
                    {title: "交差しない飛行経路を示す概念的表現"},
                    {title: "国際的に議論が進む枠組みに着想を得た低高度空域調整の概念"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["将来モビリティ・シナリオ", "概念的イラスト", "拘束力のない可視化"]
        }
    },

    technologyIntegration: {
        title: "技術統合",
        description:
            "本シナリオは、デジタル、データ、エネルギーの統合システムを、確定した実装ではなく概念的な前提条件として想定している。",
        items: [
            {
                title: "MaaS（Mobility as a Service）",
                description:
                    "複数の交通モードにわたる移動計画、予約、決済の一体的な体験を検討するための統合プラットフォーム概念。"
            },
            {
                title: "ドローン空域管理",
                description:
                    "安全性、効率性、規制整合性の観点を検討するための、低高度空域調整に関する概念的枠組み。"
            },
            {
                title: "グリーンエネルギー・グリッド",
                description:
                    "EVおよびeVTOLに関する将来像を支える可能性を示す、再生可能エネルギーおよび蓄電に関するシナリオベースの概念。"
            }
        ]
    },

    summaryExpectedResults: {
        title: "示唆される成果と戦略的洞察",
        description:
            "本シナリオは、長期的な前提条件の違いに基づき、チェンマイのモビリティ、観光、経済システムがどのように変化し得るかの方向性を示している。",
        items: [
            {
                title: "都市渋滞の緩和",
                description:
                    "特定のモビリティ再編アプローチの下で、歴史的市街地への負荷が緩和され得る可能性を示す。"
            },
            {
                title: "新たな経済ゾーンの形成",
                description:
                    "開発の関心が代替的な成長回廊へ移行し得ることを示す。"
            },
            {
                title: "国際観光における差別化",
                description:
                    "先進的なモビリティ概念が、差別化された観光ストーリーに寄与し得る可能性を検討する。"
            },
            {
                title: "戦略的段階化の示唆",
                description:
                    "ガバナンス、技術、インフラ条件の成熟に伴い、地上型EVモビリティが鉄道・航空システムに先行する可能性を示す。"
            }
        ]
    }
}