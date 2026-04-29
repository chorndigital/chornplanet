// src/components/Home/UrbanSignals.tsx

import Image from "next/image"
import {IUrbanSignals} from "@/lib/model/smart-city-media";

export default function UrbanSignals({lang, data}: { lang: string; data: IUrbanSignals }) {
    const {headline, paragraph, signals} = data

    return (
        <section className="urban-signals">
            <div className="urban-signals__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="urban-signals__grid">
                {signals.map(signal => (
                    <a
                        key={signal.title}
                        href={`/${lang}` + signal.landingUrl}
                        className="urban-signals__item"
                    >
                        <div className="urban-signals__image">
                            <Image
                                src={signal.image.url}
                                alt={signal.image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="urban-signals__content">
                            <h3>{signal.title}</h3>
                            <p>{signal.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
