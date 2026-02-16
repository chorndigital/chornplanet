// src/components/SmartCity/SystemExplanation.tsx

import {ISmartCitySection} from "@/data/smart-city-landing/_model/ISmartCitySection";
import {Tag} from "@/data/tags/Tag";

export default function SystemExplanation(
    {
        lang,
        headline,
        paragraphs,
        image
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
                        {lang && Tag[lang].smartCity.join(",")}
                    </div>
                </div>
            )}
        </section>
    );
}