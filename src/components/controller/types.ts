import { AgencyObjType, ProjectObjType } from "../../objects/types";

// controller 폴더에서 사용할 Type(Interface)
export interface AgencyControllerType {
    setAgencys: (agencys: AgencyObjType[]) => void;
    checkedAgency?: AgencyObjType | null;
    id?: string;
    name?: string;
}

export interface ProjectControllerType {
    setProjects: (projects: ProjectObjType[]) => void;
    checkedProjects?: ProjectObjType | null;
    name?: string;
    startDate?: string;
    endDate?: string;
    navigate?: any;
}