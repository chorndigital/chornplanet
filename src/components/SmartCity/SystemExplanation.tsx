// src/components/SmartCity/SystemExplanation.tsx

import {ISmartCitySection} from "@/lib/model/ISmartCityLanding";

export default function SystemExplanation(
    {
        lang,
        headline,
        paragraphs,
        image,
        tags
    }:
    ISmartCitySection
) {
    return (
        <section className="system-explanation">
            <div className="system-explanation__content">
                <h2>{headline}</h2>

                {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            {image && (
                <div className="system-explanation__image">
                    <img
                        src={image.url}
                        alt={image.alt}
                        loading="lazy"
                    />

                    <div className={'neo-tag-smart-city'}>
                        {tags?.join(", ")}
                    </div>
                </div>
            )}
        </section>
    );
}
