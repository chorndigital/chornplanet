// /src/data/dna/ChornSmartCityDNA.ts
// UPDATED: enforce Thai / Asian human presence as a hard DNA rule

import {IChornSmartCityDNA} from "@/data/dna/model/IChornSmartCityDNA";

export const ChornSmartCityDNA: IChornSmartCityDNA = {
    meta: {
        systemName: "Chorn Smart City DNA",
        corePrinciple:
            "Images must feel observed, not imagined: photographic realism + human-first urban life, grounded in Thai / Asian everyday reality, with systems operating quietly in the background.",
        version: "3.0.2",
        canonical: true,
        lastUpdatedISO: "2026-02-04",
    },

    imageSpec: {
        visualSourceStandard: {
            required: true,
            rule:
                "Photographic realism only. Images must plausibly be captured by a real camera today, grounded in lived Thai / Asian urban environments.",
            allowed: [
                "photorealistic street photography",
                "documentary urban observation",
                "camera-real imperfections",
                "Asian urban everyday life",
            ],
            disallowed: [
                "illustration aesthetics",
                "concept art look",
                "stylized or westernized generic city scenes",
                "futuristic showcase visuals",
            ],
        },

        cameraOpticsConstraints: {
            focalLength: {
                streetHumanScaleMM: [35, 50],
                urbanContextWideMM: [24, 35],
            },
            depthOfField: {
                rule: "Natural depth of field only. No infinite sharpness.",
                disallowInfiniteSharpness: true,
                allowNaturalFalloff: true,
            },
            sensorLook: {
                allowSubtleGrain: true,
                allowMildImperfections: true,
                allowAtmosphericHaze: true,
            },
        },

        compositionRules: {
            humanPresencePrimary: true,
            avoidShowcaseFraming: true,
            preferObservedMoment: true,
            avoidPerfectSymmetry: true,
            avoidOverdesignedScenes: true,
        },

        culturalAuthenticity: {
            required: true,
            primaryDemographic: "Thai",
            rule:
                "All Smart City images must clearly depict Thai or Asian people as the primary human presence, reflecting real local urban life.",
            mustInclude: [
                "Thai or Asian people in everyday clothing",
                "local body language and informal posture",
                "culturally familiar urban behavior",
                "Asian street-scale environments",
            ],
            mustAvoid: [
                "western-only demographics",
                "generic global stock-photo people",
                "idealized or _model-like subjects",
                "culturally ambiguous scenes that could be anywhere",
            ],
        },
    },

    lightingRules: {
        singleBelievableLightSource: true,
        requireDirectionalShadows: true,
        disallowGlowBloomHalo: true,
        disallowCinematicWash: true,
        colorTemperatureMustMatchTimeOfDay: true,
        notes: [
            "Lighting must feel natural to Southeast / East Asian urban conditions.",
            "No cinematic grading, glow, or fantasy atmosphere.",
        ],
    },

    humanFirstUrbanLife: {
        required: true,
        rule:
            "Human daily life comes first. Thai / Asian routines, pauses, and informal behavior are the primary signals of system quality.",
        mustInclude: [
            "unposed Thai / Asian people",
            "daily routines such as walking, waiting, sitting, commuting",
            "ordinary, non-performative behavior",
        ],
        mustAvoid: [
            "posed or symbolic figures",
            "advertising-style lifestyle scenes",
            "empty or over-curated streets",
        ],
    },

    technologyVisibility: {
        priority: "background-only",
        rule:
            "Technology must support Thai / Asian urban life quietly and remain visually secondary.",
        allowed: [
            "autonomous or electric vehicles in background",
            "subtle street signals",
            "mixed mobility integrated into daily flow",
        ],
        disallowed: [
            "technology as visual hero",
            "centered drones or robots",
            "sci-fi dominance",
        ],
    },

    urbanScale: {
        rule:
            "Scenes must reflect real Thai / Asian mid-sized city neighborhoods and street-level life.",
        prefer: [
            "mid-sized Asian cities",
            "local streets and neighborhoods",
            "human-scale density",
        ],
        avoid: [
            "western megacity skylines",
            "empty monumental plazas",
            "utopian or speculative architecture",
        ],
    },

    negativePromptPack: {
        required: true,
        defaultPack: [
            "illustration",
            "digital painting",
            "concept art",
            "cinematic render",
            "3D render",
            "CGI",
            "unreal engine",
            "octane render",
            "stylized",
            "anime",
            "cartoon",
            "isometric",
            "low-poly",
            "highly polished",
            "perfect symmetry",
            "overdesigned",
            "futuristic showcase",
            "sci-fi city",
            "utopian city",
            "fantasy lighting",
            "soft glow",
            "bloom",
            "lens flare",
            "dramatic sky",
            "hyper-saturated",
            "overly clean",
            "plastic surfaces",
            "smooth textures",
            "idealized people",
            "posed humans",
            "western stock photo people",
            "advertising shot",
        ],
        asSingleString:
            "illustration, digital painting, concept art, cinematic render, 3D render, CGI, unreal engine, octane render, stylized, anime, cartoon, isometric, low-poly, highly polished, perfect symmetry, overdesigned, futuristic showcase, sci-fi city, utopian city, fantasy lighting, soft glow, bloom, lens flare, dramatic sky, hyper-saturated, overly clean, plastic surfaces, smooth textures, idealized people, posed humans, western stock photo people, advertising shot",
        notes: [
            "Always apply to all Smart City image generations.",
            "Strengthen negatives if realism or cultural grounding drifts.",
        ],
    },

    disqualificationRules: {
        hardRejectIf: [
            "Humans are not clearly Thai or Asian",
            "Scene could plausibly be a western stock city",
            "Looks like illustration or concept art",
            "Technology dominates human presence",
            "Lighting or composition feels cinematic or staged",
        ],
    },

    canonReferenceStandard: {
        benchmarkStyles: [
            "documentary Asian street photography",
            "observational urban life in Thailand",
            "camera-real imperfection and atmosphere",
        ],
        narrativeTest: [
            "Feels like a real moment in a Thai or Asian city today",
            "People live normally; systems remain invisible",
            "City intelligence is felt, not announced",
        ],
    },
};