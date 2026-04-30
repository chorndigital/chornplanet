
// IFeature.ts

export interface IFeature {
    title: string,
    span: string,
    subTitle: string,

    stacks: IFeatureStack[],
}

// IFeatureFaq.ts
export interface IFeatureFaq {
  question: string,
  answer: string
}

// IFeatureFeature.ts
export interface IFeatureFeature {
  title: string,
  description: string,
  list: string[]
}

// IFeatureFramework.ts
export interface IFeatureFramework {
    name: string,
    overview: string,
    strengths: string[],
    use_cases: string[]
}

// IFeatureStack.ts

export interface IFeatureStack {
    title: string,
    description: string,
    link: string,
    icon: string

    frameworks?: IFeatureFramework[],
}