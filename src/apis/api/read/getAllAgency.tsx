import { axios } from '../../utils/axios';
import { AgencyObjType } from '../../../objects/types'

export const getAllAgency = async (): Promise<AgencyObjType[]> => {
    try {
        const response = await axios.get<AgencyObjType[]>('/api/companies');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}