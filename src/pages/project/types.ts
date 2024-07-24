import { ProjectObjType } from "../../objects/types";

// project 폴더에서 사용할 Type(Interface) 정의
export interface useProjectEventsType {
    ProjectData: ProjectObjType;
    navigate: any;
    projectId: number;
}