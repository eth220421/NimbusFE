import { axios } from "../../utils/axios";
import { CreateProjectType } from "./types";

// 프로젝트 등록 POST Mapping 함수
export const createProject = async ({ ProjectData, navigate }: CreateProjectType) => {
    try {
        const response = await axios.post(
            '/projects',
            ProjectData
        )
        console.log(response.data);
        navigate(-1);
        return response.data
    } catch (error) {
        console.log(error);
    }
}