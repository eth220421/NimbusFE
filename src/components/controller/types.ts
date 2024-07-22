import { AgencyObjType } from "../../objects/types";

export interface AgencyControllerType {
    setAgencys: (agencys: AgencyObjType[]) => void;
    checkedAgency?: AgencyObjType | null;
    id?: string;
    name?: string;
}