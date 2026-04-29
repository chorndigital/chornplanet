import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import CloudInfraModuleLeft from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleLeft";
import CloudInfraModuleRight
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ICloud} from "@/data/cloud/model/ICloud";
import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";

const CloudInfraPageMain: React.FC<{
    lang: string,
    cloud?: ICloud,
    cloudSolution?: ICloudSolution
}> = ({lang, cloud, cloudSolution}) => {
    const cloudSolutionContent = cloudSolution ?? InfoTranslation[lang].CloudSolution;

    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <h1>{cloudSolutionContent.title}</h1>
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <CloudInfraModuleLeft lang={lang} cloudSolution={cloudSolutionContent}/>
                            <CloudInfraModuleRight lang={lang} cloud={cloud}/>
                        </div>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default CloudInfraPageMain;
