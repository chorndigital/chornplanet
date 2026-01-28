export interface IContact {
    location: IContactDetail
    email: IContactDetail
    tel: IContactDetail
    github: IContactDetail
    linkedin: IContactDetail
    line: IContactDetail
    contacts: IContactDetail[]

    contactInfo: {
        title: string
        description: string
        header: string
        roles: IContactRole[]
    }
}

export interface IContactDetail {
    icon: string
    label: string
    isLink: boolean
    link: string
    linkText: string
    button: string
}

export interface IContactRole {
    title: string
    span: string
    email?: string
    officePhone?: string
    mobilePhone?: string
    locations?: {
        office?: string,
    },
    nearbyShopping?: string
    nearbyUniversity1?: string
    nearbyUniversity2?: string
    nearbyAirport?: string
}