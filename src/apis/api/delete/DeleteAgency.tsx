import { axios } from '../../utils/axios';
import { DeleteAgency } from './types';

export const deleteAgency = async ({ companyName }: DeleteAgency) => {
    try {
        const response = await axios.delete(`/api/companies/search/${companyName}`);
        console.log(response.data);
    } catch (error) {
        console.log("딜리트 에러", error);
    }
}