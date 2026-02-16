// src/components/SmartCity/WhyItMatters.tsx

import {ISmartCitySection} from "@/data/smart-city-landing/_model/ISmartCitySection";

export default function WhyItMatters({headline, points, paragraphs}: ISmartCitySection) {
    return (
        <section className="why-it-matters">
            <h2>{headline}</h2>

            {/* ✅ fallback: render paragraphs when points not provided */}
            {(!points || points.length === 0) && paragraphs?.length ? (
                <div className="why-it-matters__text">
                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            ) : null}

            {/* ✅ render points when available */}
            {points?.length ? (
                <div className="why-it-matters__grid">
                    {points.map((point, index) => (
                        <div key={index} className="why-it-matters__item">
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </section>
    );
}
