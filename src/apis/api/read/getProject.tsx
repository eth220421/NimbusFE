import { axios } from '../../utils/axios';
import { getProjectType } from './types';

// 프로젝트 조회 GET Mapping 함수
export const getProject = async ({ name = '', startDate = '', endDate = '' }: getProjectType) => {
    try {
        const response = await axios.get(
            `/projects/search?projName=${name}&startDate=${startDate}&endDate=${endDate}`
        )
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}