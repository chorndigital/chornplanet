// src/components/SmartCity/RelatesSignals.tsx

import Link from "next/link";
import {ISmartCitySection} from "@/lib/model/ISmartCityLanding";

export default function RelatesSignals(
    {
        lang,
        signals
    }:
    {
        lang?: string;
        signals: ISmartCitySection[];
    }
) {
    if (!signals?.length) return null;

    return (
        <section className="related-signals">
            <h2>Related Urban Signals</h2>

            <div className="related-signals__grid">
                {signals.map((signal, index) => {
                    const href = signal.landingUrl ?? signal.cta?.href;
                    if (!href) return null;

                    // ✅ choose signal.lang if present, otherwise page lang, otherwise "en"
                    const locale = signal.lang ?? lang ?? "en";

                    return (
                        <Link
                            key={index}
                            href={`/${locale}${href}`}
                            className="related-signals__item"
                        >
                            {signal.image &&
                                <img
                                    src={signal.image.url}
                                    alt={signal.image.alt}
                                    loading="lazy"
                                />
                            }
                            
                            <div className="related-signals__content">
                                <h3>{signal.headline}</h3>
                                {signal.paragraphs?.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
