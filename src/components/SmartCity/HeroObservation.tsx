// src/components/SmartCity/HeroObservation.tsx

import Link from "next/link";
import {ISmartCitySection} from "@/lib/model/ISmartCityLanding";

export default function HeroObservation(
    {
        lang,
        headline,
        paragraphs,
        image,
        tags,
        cta
    }: ISmartCitySection
) {

    return (
        <section className="hero-observation">
            <div className="hero-observation__content">
                <h1>{headline}</h1>

                {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}

                {cta && (
                    <Link href={`/${lang}` + cta.href} className="hero-observation__cta">
                        {cta.label}
                    </Link>
                )}
            </div>

            <div className="hero-observation__image">
                {
                    image && <img
                        src={image.url}
                        alt={image.alt}
                        loading="eager"
                    />
                }

                <div className={'neo-tag-smart-city'}>
                    {tags?.join(", ")}
                </div>
            </div>
        </section>
    );
}
