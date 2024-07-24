import { ProjectObjType } from "../../../objects/types";

// update 폴더에서 사용될 Type(Interface)
export interface DeleteProjectType {
    ProjectData: ProjectObjType;
    navigate: any;
    projectId: number;
}