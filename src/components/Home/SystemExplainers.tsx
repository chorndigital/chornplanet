import Image from "next/image"
import {ISystemExplainers} from "@/lib/model/smart-city-media";

export default function SystemExplainers({lang, data}: { lang: string; data: ISystemExplainers }) {
    const {headline, paragraph, systems} = data

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
