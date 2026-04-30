import {IFullStackStack} from "@/lib/model/IFullStack";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {IFullStack} from "@/lib/model/IFullStack";

export default function HomeBackEndIcon({lang, fullStack}: { lang: string; fullStack: IFullStack }) {
    const fullstack = fullStack

    return (
        <div className="home-backend-icon-container">
            {fullstack.stacks.slice(0, 4).map((item: IFullStackStack, index: any) => (
                <div key={index} className={`home-backend-icon`}>
                    <Link href={"/" + lang + item.link}>
                        <Image className="image-box"
                               src={item.image}
                               alt={item.alt}
                               width={200}
                               height={200}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}
