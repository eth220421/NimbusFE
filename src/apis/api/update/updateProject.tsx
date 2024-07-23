import { axios } from "../../utils/axios";
import { DeleteProjectType } from "./type";

export const updateProject = async ({ ProjectData, navigate, projectId }: DeleteProjectType) => {
    try {
        const response = await axios.put(`/${projectId}`, ProjectData);
        console.log(response.data);
        navigate(-1);
    } catch (error) {
        console.log(error);
    }
}