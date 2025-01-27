import { AgencyObjType, ProjectObjType } from "../../objects/types";

// table 폴더에서 사용될 Type(Interface)
export interface TableRowType {
    backgroundColor?: string;
    fontColor?: string;
    fontSize?: string;
}

export interface TableCellType {
    width?: string;
    border?: string;
    textAlign? : string;
}

export interface AgencyTableType {
    agencys: AgencyObjType[];
    setCheckedAgency: (agency: AgencyObjType) => void;
    adminName: string;
}

export interface ProjectTableType {
    projects: ProjectObjType[];
    setCheckedProjects: (project: ProjectObjType) => void;
}