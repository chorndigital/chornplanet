// src/components/Home/HomeSlideFull.tsx

"use client";

import React from "react";
import {Autoplay, FreeMode, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {SmartMobility} from "@/data/smart-mobility/SmartMobility";
import {SmartVisibilityIndex} from "@/data/smart-mobility/SmartVisibilityIndex"

export default function HomeSlideFull({lang}: { lang: string }) {

    const vision = SmartMobility[lang].chiangMai.vision
    const urbanHub = SmartMobility[lang].chiangMai.urbanHub
    const connectivityMatrix = SmartMobility[lang].chiangMai.connectivityMatrix
    const vertiportDesign = SmartMobility[lang].chiangMai.vertiportDesign
    const images = [
        {
            title: connectivityMatrix.routes[1].title,
            link: connectivityMatrix.routes[1].link,
            media: connectivityMatrix.routes[1].media,
        },
        {
            title: connectivityMatrix.routes[2].title,
            link: connectivityMatrix.routes[2].link,
            media: connectivityMatrix.routes[2].media,
        },
        {
            title: vertiportDesign.title,
            link: vertiportDesign.link,
            media: vertiportDesign.media,
        },
        {
            title: vision.title,
            link: vision.link,
            media: vision.media,
        },
        {
            title: connectivityMatrix.routes[0].title,
            link: connectivityMatrix.routes[0].link,
            media: connectivityMatrix.routes[0].media,
        },
    ]

    return (
        <>
            <div className="home-wrapper-area home-slide">
                <Swiper
                    speed={3000}
                    spaceBetween={30}
                    centeredSlides={true}
                    grabCursor={true}
                    freeMode={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, FreeMode]}
                    className="home-slide-full"
                >
                    {images.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="home-slide-full-image"
                                style={slide.media && {
                                    backgroundImage: `url(${slide.media.image_url})`,
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={"home-neo-tag"}>
                {
                    vision.media &&
                    vision.media.image_tags &&
                    vision.media.image_tags.join(",")
                }
            </div>
        </>
    );
}