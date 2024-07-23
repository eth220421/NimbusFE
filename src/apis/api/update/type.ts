import { ProjectObjType } from "../../../objects/types";

export interface DeleteProjectType {
    ProjectData: ProjectObjType;
    navigate: any;
    projectId: number;
}