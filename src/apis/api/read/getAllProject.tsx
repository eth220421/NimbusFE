import { axios } from '../../utils/axios';

export const getAllProject = async () => {
    try {
        const response = await axios.get('/projects');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}