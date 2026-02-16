// src/components/Home/HumanDailyFlow.tsx

import Image from "next/image"
import {HumanDailyFlowData} from "@/data/smart-city-media/HumanDailyFlowData/HumanDailyFlowData"

export default function HumanDailyFlow({lang}: { lang: string }) {
    const {
        headline,
        paragraph,
        morningFlow,
        middayFlow,
        eveningFlow,
    } = HumanDailyFlowData[lang]

    const flows = [morningFlow, middayFlow, eveningFlow]

    return (
        <section className="human-daily-flow">
            <div className="human-daily-flow__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="human-daily-flow__grid">
                {flows.map((flow) => (
                    <a
                        key={flow.category}
                        href={`/${lang}` + flow.landingUrl}
                        className="human-daily-flow__item"
                    >
                        <div className="human-daily-flow__image">
                            <Image
                                src={flow.image.url}
                                alt={flow.image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="human-daily-flow__content">
                            <h3>{flow.title}</h3>
                            <p>{flow.paragraph}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}