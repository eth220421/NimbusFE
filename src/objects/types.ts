export interface AgencyObjType {
    companyID?: number;
    companyName: string;
    relation: string;
    address: string;
    businessNumber: string;
    representative: string;
    phoneNumber: string;
    active: boolean;
}

// 단일 프로젝트의 Type(Interface)
export interface ProjectObjType {
    id?: number;
    projNo?: string;
    projName: string;
    startDate?: string;
    endDate?: string;
    manager: string;
    phoneNo?: string;
    industryCode: {
        id: number;
        codeType?: string;
        codeValue?: string;
        codeDescription?: string;
    };
    projCode: {
        id: number;
        codeType?: string;
        codeValue?: string;
        codeDescription?: string;
    };
    projState: {
        id: number;
        codeType?: string;
        codeValue?: string;
        codeDescription?: string;
    };
    workArea: {
        id: number;
        codeType?: string;
        codeValue?: string;
        codeDescription?: string;
    };
    reqDate?: string;
    workLocation?: string;
    projEtc?: string;
    projRemark?: string;
    essentialTech?: string;
}
