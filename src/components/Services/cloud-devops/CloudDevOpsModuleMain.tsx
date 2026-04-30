import React from "react";
import CloudDevOpsModuleLeft from "@/components/Services/cloud-devops/CloudDevOpsModuleLeft";
import CloudDevOpsModuleRight from "@/components/Services/cloud-devops/CloudDevOpsModuleRight";
import CloudDevOpsModuleBottom from "@/components/Services/cloud-devops/CloudDevOpsModuleBottom";
import {IDevOps} from "@/lib/model/IDevOps";

export default function CloudDevOpsModuleMain({lang, devOps}: { lang: string, devOps: IDevOps }) {
    const content = devOps;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{content.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <CloudDevOpsModuleLeft lang={lang} devOps={content}/>
                            <CloudDevOpsModuleRight lang={lang}/>
                        </div>
                        <CloudDevOpsModuleBottom lang={lang} devOps={content}/>
                    </div>
                </div>
            </div>
        </>
    )
}
