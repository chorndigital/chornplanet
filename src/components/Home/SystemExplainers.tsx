import Image from "next/image"
import {SystemExplainersData} from "@/data/smart-city-media/SystemExplainersData/SystemExplainersData"
import {Tag} from "@/data/tags/Tag";

export default function SystemExplainers({lang}: { lang: string }) {
    const {headline, paragraph, systems} = SystemExplainersData[lang]

    return (
        <section className="system-explainers">
            <div className="system-explainers__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="system-explainers__list">
                {systems.map((system, index) => (
                    <div key={index} className="system-explainers__item">
                        <div className="system-explainers__image">
                            <Image
                                src={system.image.url}
                                alt={system.image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="system-explainers__content">
                            <h3>{system.title}</h3>
                            <p>{system.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}