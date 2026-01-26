export interface IPolicy {
    title: string
    subTitle: string
    description: string
    contents: IPolicyContent[]
}

export interface IPolicyContent {
    title: string,
    description?: string
    expand?: string,
    details?: IPolicyDetail[]
}

export interface IPolicyDetail {
    title: string,
    description: string,
}