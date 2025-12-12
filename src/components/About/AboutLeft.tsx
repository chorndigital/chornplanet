import "@/styles/about.scss"
import Image from "next/image"
import React from "react";
import BottomImageLeft from "@/components/About/BottomImage/BottomImageLeft";

export default function AboutLeft({lang}: { lang: string }) {
    return (
        <div className="col-lg-4">
            <div className="about-image-warp contact-image about-image-wrapper">
                <Image
                    src="/images/about/about-chorn-image-750.webp"
                    alt="About Image"
                    fill
                    sizes="(min-width: 1024px) 1200px, 750px"
                    className="about-cover-image"
                />
            </div>
            <div className="x-bar-animation"/>

            <div className="single-footer-widget about-bottom-image">
                <BottomImageLeft/>
            </div>
        </div>
    )
}