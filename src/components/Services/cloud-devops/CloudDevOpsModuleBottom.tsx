import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import Link from "next/link";
import Image from "next/image";
import {IDevOps} from "@/data/devops/model/IDevOps";

export default function CloudDevOpsModuleBottom({lang, devOps}: { lang: string, devOps?: IDevOps }) {
    const content = devOps ?? InfoTranslation[lang].DevOps;

    return (
        <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
            <div className="row">
                {content.stacks.slice(0, 3).map((item: IFrontEndStack, index: number) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <Link href={'/' + lang + item.link}>
                            <div className="home-frontend-box">
                                <div className="icon">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={150}
                                        height={150}
                                    />
                                </div>

                                <h3> {item.title} </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
