import { axios } from '../../utils/axios';
import { DeleteProject } from './types';

export const deleteProject = async ({ projectId }: DeleteProject) => {
    try {
        const response = await axios.delete(`/projects/${projectId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}