import Image from "next/image"
import {ILocalToGlobal} from "@/lib/model/smart-city-media";

export default function LocalToGlobal({lang, data}: { lang: string; data: ILocalToGlobal }) {
    const {headline, paragraph, items, landingUrl} = data

    return (
        <section className="local-to-global">
            <div className="local-to-global__intro">
                <h2>{headline}</h2>
                <p>{paragraph}</p>
            </div>

            <div className="local-to-global__grid">
                {items.map((item, index) => (
                    <div key={index} className="local-to-global__item">
                        <div className="local-to-global__image">
                            <Image
                                src={item.image.url}
                                alt={item.image.alt}
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                            />
                        </div>

                        <div className="local-to-global__content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="local-to-global__footer">
                <a href={`/${lang}` + landingUrl}>See how local life becomes a global signal</a>
            </div>
        </section>
    )
}
