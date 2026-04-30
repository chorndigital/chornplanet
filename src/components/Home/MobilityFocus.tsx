// src/components/Home/MobilityFocus.tsx

import Image from "next/image"
import {IMobilityFocus} from "@/lib/model/ISmartCityMedia";

export default function MobilityFocus({lang, data}: { lang: string; data: IMobilityFocus }) {
    const {headline, paragraph, signals} = data

    return (
        <section className="mobility-focus">
            <div className="mobility-focus__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="mobility-focus__grid">
                {signals.map(signal => (
                    <a
                        key={signal.title}
                        href={`/${lang}` + signal.landingUrl}
                        className="mobility-focus__item"
                    >
                        <div className="mobility-focus__image">
                            <Image
                                src={signal.image.url}
                                alt={signal.image.alt}
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />
                        </div>

                        <div className="mobility-focus__content">
                            <h3>{signal.title}</h3>
                            <p>{signal.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
