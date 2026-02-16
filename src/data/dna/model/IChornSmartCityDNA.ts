// /src/data/dna/_model/IChornSmartCityDNA.ts
// UPDATED: add explicit cultural / demographic realism constraint

export interface IChornSmartCityDNA {
    meta: {
        systemName: "Chorn Smart City DNA";
        corePrinciple: string;
        version: string;
        canonical: boolean;
        lastUpdatedISO: string;
    };

    imageSpec: {
        visualSourceStandard: {
            required: boolean;
            rule: string;
            allowed: string[];
            disallowed: string[];
        };

        cameraOpticsConstraints: {
            focalLength: {
                streetHumanScaleMM: [number, number];
                urbanContextWideMM: [number, number];
            };
            depthOfField: {
                rule: string;
                disallowInfiniteSharpness: boolean;
                allowNaturalFalloff: boolean;
            };
            sensorLook: {
                allowSubtleGrain: boolean;
                allowMildImperfections: boolean;
                allowAtmosphericHaze: boolean;
            };
        };

        compositionRules: {
            humanPresencePrimary: boolean;
            avoidShowcaseFraming: boolean;
            preferObservedMoment: boolean;
            avoidPerfectSymmetry: boolean;
            avoidOverdesignedScenes: boolean;
        };

        culturalAuthenticity: {
            required: boolean;
            primaryDemographic: "Thai" | "Asian";
            rule: string;
            mustInclude: string[];
            mustAvoid: string[];
        };
    };

    lightingRules: {
        singleBelievableLightSource: boolean;
        requireDirectionalShadows: boolean;
        disallowGlowBloomHalo: boolean;
        disallowCinematicWash: boolean;
        colorTemperatureMustMatchTimeOfDay: boolean;
        notes: string[];
    };

    humanFirstUrbanLife: {
        required: boolean;
        rule: string;
        mustInclude: string[];
        mustAvoid: string[];
    };

    technologyVisibility: {
        rule: string;
        allowed: string[];
        disallowed: string[];
        priority: "background-only";
    };

    urbanScale: {
        prefer: string[];
        avoid: string[];
        rule: string;
    };

    negativePromptPack: {
        required: boolean;
        defaultPack: string[];
        asSingleString: string;
        notes: string[];
    };

    disqualificationRules: {
        hardRejectIf: string[];
    };

    canonReferenceStandard: {
        benchmarkStyles: string[];
        narrativeTest: string[];
    };
}