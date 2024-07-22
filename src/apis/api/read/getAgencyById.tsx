import { axios } from '../../utils/axios';
import { AgencyObjType } from '../../../objects/types'
import { getAgencyType } from './types';

export const getAgencyById = async ({ id }: getAgencyType): Promise<AgencyObjType | null> => {
    try {
        const response = await axios.get<AgencyObjType>(`/api/companies/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}