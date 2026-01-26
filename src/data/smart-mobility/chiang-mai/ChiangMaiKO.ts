import {IProvince} from "../model/ISmartMobility"

export const ChiangMaiKO: IProvince = {
    vision: {
        title: "비전: 치앙마이 스마트 모빌리티 & 북부 게이트웨이",
        description:
            "치앙마이 스마트 모빌리티 & 북부 게이트웨이는 상(上)메콩 지역 내에서 치앙마이가 전략적 교통, 관광, 지역 연결 거점으로 어떻게 해석될 수 있는지를 검토하기 위한 장기적 미래 모빌리티 시나리오이다. 주요 모빌리티 허브를 산사이–도이사켓 회랑으로 가상 이전하는 설정을 통해, 본 시나리오는 구시가지의 혼잡 완화 가능성, 경제 활동의 공간적 재배치, 그리고 치앙라이, 람팡 및 인접 지역을 연결하는 지속가능한 관광·물류·광역 연결 패턴의 변화를 탐색한다.",
        link: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway",
        media: {
            image_url: "/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway.png",
            image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
        },
        safeStatement: {
            title: "보충 설명",
            description:
                "본 웹사이트에 제시된 모든 항공 모빌리티 및 미래 교통 요소는 개념적 시나리오에 기반한 것으로, 어떠한 항공·교통·정부 기관의 규제 승인, 기술적 실현 가능성, 인증 상태 또는 실행 준비 상태를 의미하지 않는다."
        }
    },

    urbanHub: {
        title: "신규 도시 중심 (허브: 산사이 – 도이사켓)",
        description:
            "산사이–도이사켓 도시 허브는 TOD(대중교통 지향 개발) 원칙에 착안하여 치앙마이의 미래 스마트 모빌리티 중심을 시나리오 기반으로 해석한 개념이다. 이는 장기적인 계획 관점에서 모빌리티 시스템, 도시 기능, 경제 활동이 새로운 도시 중심 내에서 어떻게 구성될 수 있는지를 설명하기 위한 것이다.",
        link: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket",
        items: [
            {
                title: "허브의 주요 역할",
                description:
                    "장기 시나리오 맥락에서 철도, 도로, 항공 모빌리티 시스템 간의 잠재적 관계를 탐색하는 개념적 복합 교통 결절점으로 제시된다."
            },
            {
                title: "주요 인프라 구성 요소",
                description: "",
                contents: [
                    {
                        title: "중앙 스테이션",
                        description:
                            "복수의 교통 수단 간 통합 요금 논리와 연계된 환승 경험을 설명하기 위한 개념적 통합 모빌리티 시설."
                    },
                    {
                        title: "스마트 주차",
                        description:
                            "도심 내 자가용 유입을 줄이기 위한 파크 앤 라이드 전략을 설명하는 시나리오 기반 대규모 지능형 주차 개념."
                    },
                    {
                        title: "상업·주거 구역",
                        description:
                            "상업, 숙박, 주거 기능을 포함한 혼합 용도 개발 개념을 통해 자족형 도시 지구 가능성을 탐색하는 설명용 구성."
                    }
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket.png",
            image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
        }
    },

    connectivityMatrix: {
        title: "미래 연결 매트릭스",
        description:
            "연결 매트릭스는 거리, 지형, 이동 특성에 맞는 교통 수단을 기준으로 산사이–도이사켓 허브가 치앙마이 및 주변 주요 목적지와 이론적으로 어떻게 연결될 수 있는지를 설명하는 미래 지향적 분석 프레임워크이다.",
        routes: [
            {
                title: "허브 – 치앙마이 국제공항 (도시·항공 연계)",
                description:
                    "신뢰성, 예측 가능성, 네트워크 통합을 중점으로 도시와 공항 간 연결이 어떻게 개념화될 수 있는지를 설명하는 시나리오 기반 모빌리티 회랑.",
                link: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport",
                transportationModel: {
                    title: "교통 모델: LRT 또는 모노레일",
                    description: "",
                    sections: [
                        {
                            title: "주요 과제",
                            description:
                                "도시 혼잡, 토지 이용 제약, 고밀도 주거 환경."
                        },
                        {
                            title: "노선 전략",
                            description:
                                "구시가지를 우회하기 위해 외곽 순환도로를 따르는 개념적 정렬을 가정하고, 시나리오 전제 하에서 허브와 공항 간 이동 시간 범위를 설명한다."
                        },
                        {
                            title: "특수 시스템",
                            description:
                                "미래 모빌리티 생태계 내에서 수하물 처리 및 환승 경험을 재구성할 수 있는 가능성을 탐색하는 개념적 서비스."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-chiang-mai-airport.png",
                    image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
                }
            },
            {
                title: "허브 – 도이수텝 (문화·경관 루트)",
                description:
                    "문화유산 지역과 자연 경관을 저영향·방문객 배려형 교통 아이디어로 연결하는 개념적 모빌리티 시나리오.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-suthep",
                transportationModel: {
                    title: "교통 모델: EV 셔틀 + eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "주요 과제",
                            description:
                                "산악 지형, 환경적 민감성, 변동적인 방문 수요."
                        },
                        {
                            title: "대중교통",
                            description:
                                "허브에서 산기슭 환승 지점까지의 환승 기반 접근을 통해 자가용 의존도를 낮추는 EV 셔틀 개념."
                        },
                        {
                            title: "항공 루트 (프리미엄)",
                            description:
                                "경관 비행 가능성과 지정된 랜드마크 인근의 가상 버티포트 접근을 설명하는 eVTOL 이동 시나리오."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-suthep.png",
                    image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
                }
            },
            {
                title: "허브 – 도이인타논 (자연·어드벤처 루트)",
                description:
                    "체험 설계와 환경적 고려를 중심으로 장거리 자연·어드벤처 이동 개념을 탐색하는 미래 지향적 시나리오.",
                link: "/smart-mobility/chiang-mai/hub-to-doi-inthanon",
                transportationModel: {
                    title: "교통 모델: 고속 피더 + 장거리 eVTOL",
                    description: "",
                    sections: [
                        {
                            title: "주요 과제",
                            description:
                                "장거리 이동, 장시간 도로 주행, 복잡한 산악 지형."
                        },
                        {
                            title: "익스프레스 피더",
                            description:
                                "허브와 촘통 지역 간의 직접 연결을 탐색하는 버스 또는 밴 기반 고속 교통 개념."
                        },
                        {
                            title: "미래 기술 (탐색적)",
                            description:
                                "미래 모빌리티 논의 속에서 이동 시간에 대한 인식을 재구성할 수 있는 가능성을 검토하는 투기적 장거리 eVTOL 시나리오."
                        }
                    ]
                },
                media: {
                    image_url: "/smart-mobility/chiang-mai/hub-to-doi-inthanon.png",
                    image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
                }
            }
        ]
    },

    vertiportDesign: {
        title: "버티포트: 스마트 항공 모빌리티 게이트웨이",
        description:
            "버티포트는 저고도 항공 개념이 도시, 공항, 산악 지역, 관광지와 이론적으로 어떻게 연계될 수 있는지를 탐색하기 위한 미래 항공 모빌리티 개념 시나리오이다.",
        link: "/smart-mobility/chiang-mai/vertiport-design",
        structureTitle: "버티포트 구성 요소 (시나리오 기반)",
        structure: [
            {
                title: "착륙 구역",
                items: [
                    {title: "미래 시나리오에서 eVTOL 운용 수용 가능성을 설명하는 개념적 착륙 구역"},
                    {title: "항공 환경에서 영감을 받은 개념적 시각 유도 요소"},
                    {title: "안전 중심 설계 관점을 보여주는 다층 공간 구성"}
                ]
            },
            {
                title: "터미널 공간",
                items: [
                    {title: "도시 및 산악 조망을 고려한 승객 라운지 개념"},
                    {title: "동선 및 체크인 흐름에 대한 개념적 표현"},
                    {title: "국제 방문객 이동을 지원하도록 구상된 시설 개념"}
                ]
            },
            {
                title: "지상 연계",
                items: [
                    {title: "고속도로 접근 및 스마트 도로와의 개념적 통합"},
                    {title: "EV 주차 및 자율주행 셔틀 연계 개념"}
                ]
            },
            {
                title: "공역 조정",
                items: [
                    {title: "비교차 비행 경로를 설명하는 개념적 표현"},
                    {title: "국제적으로 논의 중인 프레임워크에서 영감을 받은 저고도 공역 조정 개념"}
                ]
            }
        ],
        media: {
            image_url: "/smart-mobility/chiang-mai/vertiport-design.png",
            image_tags: ["미래 모빌리티 시나리오", "개념적 시각화", "비구속적 이미지"]
        }
    },

    technologyIntegration: {
        title: "기술 통합",
        description:
            "본 시나리오는 디지털, 데이터, 에너지 통합 시스템을 확정된 구현이 아닌 개념적 전제로 가정한다.",
        items: [
            {
                title: "MaaS (Mobility as a Service)",
                description:
                    "복수의 교통 수단에 걸친 이동 계획, 예약, 결제를 통합적으로 탐색하기 위한 플랫폼 개념."
            },
            {
                title: "드론 공역 관리",
                description:
                    "안전성, 효율성, 규제 정합성을 검토하기 위한 저고도 공역 조정 개념."
            },
            {
                title: "그린 에너지 그리드",
                description:
                    "EV 및 eVTOL 서사를 지원할 가능성을 설명하는 재생에너지 및 저장 개념."
            }
        ]
    },

    summaryExpectedResults: {
        title: "도출된 시사점 및 전략적 통찰",
        description:
            "본 시나리오는 장기적 전제 조건의 차이에 따라 치앙마이의 모빌리티, 관광, 경제 시스템이 어떻게 변화할 수 있는지를 보여준다.",
        items: [
            {
                title: "도시 혼잡 완화",
                description:
                    "특정 모빌리티 재구성 접근 하에서 역사적 도심 지역에 가해지는 압력이 완화될 수 있음을 설명한다."
            },
            {
                title: "신규 경제 구역의 형성",
                description:
                    "개발 관심이 대체 성장 회랑으로 이동할 수 있음을 보여준다."
            },
            {
                title: "국제 관광 차별화",
                description:
                    "첨단 모빌리티 개념이 차별화된 관광 내러티브에 기여할 수 있는 가능성을 탐색한다."
            },
            {
                title: "전략적 단계화 시사점",
                description:
                    "거버넌스, 기술, 인프라 여건의 성숙에 따라 지상 기반 EV 모빌리티가 철도 및 항공 시스템에 앞서 도입될 수 있음을 시사한다."
            }
        ]
    }
}