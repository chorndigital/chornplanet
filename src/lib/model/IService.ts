
// IService.ts

export interface IService {
    title: string,
    description: string,

    services: IServiceItem[],

    demo: {
        title: string,
        description: string,
        link: IServiceLink,
        procedure: {
            title: string,
            steps: IServiceItem[],
        }
        note: IServiceItem[]
    }
}

// IServiceItem.ts
export interface IServiceItem {
  title: string,
  description: string,
}

// IServiceLink.ts
export interface IServiceLink {
  text: string,
  href: string,
}