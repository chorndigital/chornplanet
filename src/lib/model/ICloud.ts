
// ICloud.ts

export interface ICloud {
    title: string,
    span: string,
    subTitle: string,

    stacks: ICloudStack[],
}

// ICloudStack.ts
export interface ICloudStack {
    title: string,
    description: string,
    image: string,
    alt: string,
    readMore: string,
    link: string
}