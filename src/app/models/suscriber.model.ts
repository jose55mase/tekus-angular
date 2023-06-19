export class SuscriberPostModel{
    Name: string;
    Email:string;
    CountryCode: string;
    PhoneNumber: string;
    JobTitle: string;
    Area: string;
    Topics: any[];
}

export class SuscriberGetModel{
    SystemId: any;
    Area: string;
    PublicId: number;
    CountryCode: string;
    CountryName: string;
    Name: string;
    EndpointsCount: number;
    Email: string;
    JobTitle: string;
    PhoneNumber: string;
    PhoneCode: string;
    PhoneCodeAndNumber: string;
    LastActivityUtc: any;
    LastActivity: any;
    LastActivityString: any;
    SubscriptionDate: any;
    SubscriptionMethod: number;
    SubscriptionState: number;
    SubscriptionStateDescription: string;
    Topics: any[];
    ValidEmail: boolean;
    Activity: string;
    ConnectionState: number;
    Id: number;
}

export class SuscriberPuttModel{
    Id?: number;
    Name: string;
    Email:string;
    CountryCode: string;
    PhoneNumber: string;
    JobTitle: string;
    Area: string;
    Topics: any[];
}