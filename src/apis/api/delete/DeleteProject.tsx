import { axios } from '../../utils/axios';
import { DeleteProject } from './types';

// 프로젝트 삭제 DELETE Mapping 함수
export const deleteProject = async ({ projectId }: DeleteProject) => {
    try {
        const response = await axios.delete(`/projects/${projectId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}