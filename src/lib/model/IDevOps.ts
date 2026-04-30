
// IDevOps.ts

export interface IDevOps {
    title: string,
    span: string,
    subTitle: string,

    appium: IDevOpsStack,
    docker: IDevOpsStack,
    github: IDevOpsStack,
    gitlab: IDevOpsStack,
    jenkins: IDevOpsStack,
    kubernetes: IDevOpsStack,
    postman: IDevOpsStack,
    selenium: IDevOpsStack,
    soapui: IDevOpsStack,

    stacks: IDevOpsStack[],

    services: IDevOpsService
}

// IDevOpsFaq.ts
export interface IDevOpsFaq {
  question: string,
  answer: string
}

// IDevOpsFeature.ts
export interface IDevOpsFeature {
  title: string,
  description: string,
  list: string[]
}

// IDevOpsFramework.ts
export interface IDevOpsFramework {
    name: string,
    overview: string,
    strengths: string[],
    useCases: string[]
}

// IDevOpsService.ts

export interface IDevOpsService {
    title: string,
    descriptions: string[],
    items: IDevOpsServiceItem[]
}

// IDevOpsServiceItem.ts
export interface IDevOpsServiceItem {
  title: string,
  description: string,
}

// IDevOpsStack.ts

export interface IDevOpsStack {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string,

    features: IDevOpsFeature[],
    faqs: IDevOpsFaq[],
    frameworks?: IDevOpsFramework[],
}