import { axios } from '../../utils/axios';

// 프로젝트 전체 조회 GET Mapping 함수
export const getAllProject = async () => {
    try {
        const response = await axios.get('/projects');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}