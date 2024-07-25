import { axios } from "../../utils/axios";
import { DeleteProjectType } from "./type";

// 프로젝트 수정 PUT Mapping 함수
export const updateProject = async ({ ProjectData, navigate, projectId }: DeleteProjectType) => {
    try {
        const response = await axios.put(`projects/${projectId}`, ProjectData);
        console.log(response.data);
        navigate('/statistics/project');
    } catch (error) {
        console.log(error);
    }
}