import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiZH: IProvince = {
    vision: {
        title: "愿景：清迈智慧出行与北部门户",
        description:
            "“清迈智慧出行与北部门户”是一个长期的未来出行情景，用于探讨清迈在大湄公河上游区域中，作为交通、旅游与区域连接战略节点的潜在解读方式。通过设想将主要交通枢纽迁移至 San Sai–Doi Saket 走廊，该情景用于分析旧城区交通拥堵缓解的可能路径、经济活动的空间再分配，以及连接清莱、南邦及周边地区的可持续旅游、物流与区域联通模式的演变方向。",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
        },
        safeStatement: {
            title: "说明声明",
            description:
                "本网站所呈现的所有航空出行及未来交通内容均为情景性示意，不构成任何关于监管批准、技术可行性、认证状态或实施准备程度的暗示，亦不代表任何航空、交通或政府主管机构的立场。"
        }
    },

    urbanHub: {
        title: "新城市核心（枢纽：San Sai – Doi Saket）",
        description:
            "San Sai–Doi Saket 城市枢纽是一个基于情景的未来智慧出行核心构想，参考以公共交通为导向的发展（TOD）原则，用于说明在长期规划视角下，出行系统、城市功能与经济活动如何可能围绕新的城市核心进行组织。",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "枢纽的主要角色",
                description:
                    "以概念性的多模式换乘节点形式呈现，用于探讨在长期情景中，轨道、公路与航空出行系统之间可能形成的关系。"
            },
            {
                title: "关键基础设施组成",
                description: "",
                contents: [
                    {
                        title: "中央车站",
                        description:
                            "用于示意统一出行设施的概念，探讨多种交通方式之间的协同换乘体验及潜在的一体化票务逻辑。"
                    },
                    {
                        title: "智慧停车",
                        description:
                            "基于情景的大规模智能停车构想，用于说明通过“换乘停车（Park & Ride）”策略减少私家车进入城市核心区的可能方式。"
                    },
                    {
                        title: "商业与居住区域",
                        description:
                            "示意性的混合功能开发构想（涵盖商业、酒店及居住），用于探讨自给型城市片区的可能性。"
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
        }
    },

    connectivityMatrix: {
        title: "未来连接矩阵",
        description:
            "连接矩阵是一个面向未来的分析框架，用于说明在理论层面上，San Sai–Doi Saket 枢纽如何可能根据距离、地形及出行特征，与清迈及周边关键目的地建立联系。",
        routes: [
            {
                title: "枢纽 – 清迈国际机场（城市与航空连接）",
                description:
                    "一个基于情景的出行走廊构想，用于说明城市与机场之间的连接在可靠性、可预测性及网络整合方面的潜在设计思路。",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "交通模型：轻轨或单轨",
                    description: "",
                    sections: [
                        {
                            title: "主要挑战",
                            description:
                                "城市交通拥堵、土地利用受限以及高密度居住环境。"
                        },
                        {
                            title: "线路策略",
                            description:
                                "概念性线路设想，沿外环道路布局，以绕开旧城区，并在情景假设下描述枢纽与机场之间可能的出行时间区间。"
                        },
                        {
                            title: "特殊系统",
                            description:
                                "示意性服务概念，用于探讨未来出行生态中行李处理及换乘体验可能的重新设计方式。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
                }
            },
            {
                title: "枢纽 – 素贴山（文化与景观线路）",
                description:
                    "一个情景性构想，用于探索通过对游客友好、低影响的交通方式连接文化遗产区域与自然景观的可能路径。",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "交通模型：电动接驳车 + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "主要挑战",
                            description:
                                "山地地形、生态敏感性以及游客需求波动。"
                        },
                        {
                            title: "公共交通",
                            description:
                                "电动接驳车概念，用于说明通过在枢纽与山脚换乘点之间设置接驳，减少对私家车的依赖。"
                        },
                        {
                            title: "空中路线（高端）",
                            description:
                                "eVTOL 出行情景叙述，用于示意观光飞行的可能性以及在特定地标区域附近设置假想垂直起降点的构想。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
                }
            },
            {
                title: "枢纽 – 因他农山（自然与探险线路）",
                description:
                    "一个面向未来的情景，用于探索长距离自然与探险出行的概念，重点关注体验设计与环境考量。",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "交通模型：高速接驳 + 长航程 eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "主要挑战",
                            description:
                                "出行距离较长、道路行程耗时以及复杂的山地地形。"
                        },
                        {
                            title: "快速接驳",
                            description:
                                "示意性的快速巴士或小型客车构想，用于探讨枢纽与 Chom Thong 地区之间的直达连接。"
                        },
                        {
                            title: "未来技术（探索性）",
                            description:
                                "一种推测性的长航程 eVTOL 情景，用于探讨未来出行讨论中对时间感知的潜在重构方式。"
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "垂直起降港：智慧空中出行门户",
        description:
            "垂直起降港是一个未来空中出行情景，用于探讨低空航空概念在理论上如何与城市区域、机场、山区及旅游目的地形成接口。",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "垂直起降港组成（情景示意）",
        structure: [
            {
                title: "起降区域",
                items: [
                    {title: "示意性起降区域，用于表达未来情景中 eVTOL 运行的可能容纳方式"},
                    {title: "受航空环境启发的视觉引导元素"},
                    {title: "体现安全导向设计考量的多层空间布局"}
                ]
            },
            {
                title: "航站空间",
                items: [
                    {title: "面向城市与山景的乘客休息空间概念"},
                    {title: "示意性的流线与值机流程设计"},
                    {title: "用于支持国际访客流动的设施构想"}
                ]
            },
            {
                title: "地面衔接",
                items: [
                    {title: "概念性的高速公路接入与智慧道路整合"},
                    {title: "电动车停车与自动化接驳系统接口构想"}
                ]
            },
            {
                title: "空域协调",
                items: [
                    {title: "示意性的非交叉飞行路径设计"},
                    {title: "参考国际新兴框架的低空空域协调构想"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["未来出行情景", "示意性概念图", "非约束性可视化"]
        }
    },

    technologyIntegration: {
        title: "技术整合",
        description:
            "本情景假设数字、数据与能源系统的存在仅作为概念性支撑，而非已确认的实施方案。",
        items: [
            {
                title: "MaaS（出行即服务）",
                description:
                    "一个统一平台的概念，用于探索跨多种交通方式的行程规划、预订与支付的一体化可能性。"
            },
            {
                title: "无人机空域管理",
                description:
                    "示意性的低空空域协调构想，用于研究安全性、效率及监管一致性问题。"
            },
            {
                title: "绿色能源网络",
                description:
                    "基于情景的可再生能源与储能概念，用于说明其可能对电动车与 eVTOL 出行叙事的支持作用。"
            }
        ]
    },

    summaryExpectedResults: {
        title: "示意性成果与战略洞察",
        description:
            "该情景展示了在不同长期假设条件下，清迈的出行、旅游与经济系统可能演变的方向。",
        items: [
            {
                title: "城市拥堵缓解",
                description:
                    "说明在特定出行结构调整路径下，历史城区所承受的压力可能得到缓和。"
            },
            {
                title: "新经济区域的出现",
                description:
                    "展示发展重心可能向其他增长走廊转移的情景。"
            },
            {
                title: "国际旅游差异化",
                description:
                    "探讨先进出行概念如何可能为旅游叙事提供差异化元素。"
            },
            {
                title: "阶段性战略洞察",
                description:
                    "指出在治理、技术与基础设施条件逐步成熟的前提下，地面电动出行概念可能先于轨道或空中系统进行探索。"
            }
        ]
    }
}