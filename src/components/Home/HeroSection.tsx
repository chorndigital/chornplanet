//components/Home/HeroSection.tsx

import Image from "next/image"
import {HeroSectionData} from "@/data/smart-city-media/HeroSectionData/HeroSectionData"
import {Tag} from "@/data/tags/Tag";

export default function HeroSection({lang}: { lang: string }) {
    const {
        headline,
        paragraph,
        softTexts,
        image,
        landingUrl,
    } = HeroSectionData[lang]

    return (
        <section className="smart-hero">
            <div className="smart-hero__head">
                <h1 className="smart-hero__headline">
                    {headline}
                </h1>
            </div>
            <div className="smart-hero__body">
                <div className="smart-hero__content">
                    <p className="smart-hero__paragraph">
                        {paragraph}
                    </p>

                    {softTexts?.length > 0 && (
                        <div className="smart-hero__soft-texts">
                            {softTexts.map((item, index) => (
                                <div key={index} className="smart-hero__soft-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="smart-hero__cta">
                        <a href={`/${lang}` + landingUrl}>
                            Read the story
                        </a>
                    </div>
                </div>

                <div className="smart-hero__image">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    )
}