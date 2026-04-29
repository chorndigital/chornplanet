import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ICloud} from "@/data/cloud/model/ICloud";

const CloudInfraModuleRight: React.FC<{ lang: string, cloud?: ICloud }> = ({lang, cloud}) => {
    const content = cloud ?? InfoTranslation[lang].Cloud;

    return (
        <div className="cloud-infra-right">
            {content.stacks.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    alt={image.title}
                    width={100}
                    height={100}
                />
            ))}
        </div>
    )
}

export default CloudInfraModuleRight
