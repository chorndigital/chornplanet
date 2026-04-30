
// IWeb3.ts

export interface IWeb3 {
    title: string,
    span: string,
    subTitle: string,

    services: IWeb3Service
}

// IWeb3Service.ts

export interface IWeb3Service {
    title: string,
    descriptions: string[],
    items: IWeb3ServiceItem[]
}

// IWeb3ServiceItem.ts
export interface IWeb3ServiceItem {
  title: string,
  description: string,
}