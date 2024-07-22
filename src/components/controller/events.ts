import { deleteAgency } from "../../apis/api/delete/DeleteAgency";
import { getAgencyById } from "../../apis/api/read/getAgencyById";
import { getAllAgency } from "../../apis/api/read/getAllAgency"
import { AgencyControllerType } from "./types";

export const useControllerEvents = ({ setAgencys, id = '', name = '', checkedAgency }: AgencyControllerType) => {
    const companyName = checkedAgency?.companyName ?? '';

    const handleRead = async () => {
        // 전체 조회
        if(id === '' && name === '') {
            const dataList = await getAllAgency();
            setAgencys(dataList);
        }
        // ID 조회
        else if (id !== '' && name === '') {
            const dataList = await getAgencyById({ id });
            setAgencys(dataList ? [dataList] : []);
        }
        // 이름 조회
        else if (id === '' && name !== '') {
            
        }
        // ID & 이름 조회
        else if (id !== '' && name !== '') {
            
        }
    }

    const handleDelete = async () => {
        await deleteAgency({ companyName });
    }

    return { handleRead, handleDelete }
}