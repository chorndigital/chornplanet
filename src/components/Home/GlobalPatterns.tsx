// src/components/smart-city-media/GlobalPatterns.tsx

import Image from "next/image"
import {GlobalPatternsData} from "@/data/smart-city-media/GlobalPatternsData/GlobalPatternsData"

export default function GlobalPatterns({lang}: { lang: string }) {
    const {headline, paragraph, signals} = GlobalPatternsData[lang]

    return (
        <section className="global-patterns">
            <div className="global-patterns__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="global-patterns__signals">
                {signals.map((signal, index) => (
                    <a
                        key={index}
                        href={`/${lang}` + signal.landingUrl}
                        className="global-patterns__signal"
                    >
                        <div className="global-patterns__image">
                            <Image
                                src={signal.image.url}
                                alt={signal.image.alt}
                                width={1200}
                                height={750}
                            />
                        </div>
                        <div className="global-patterns__content">
                            <h3>{signal.title}</h3>
                            <p>{signal.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}