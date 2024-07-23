import { deleteAgency } from "../../apis/api/delete/DeleteAgency";
import { deleteProject } from "../../apis/api/delete/DeleteProject";
import { getAgencyById } from "../../apis/api/read/getAgencyById";
import { getAllAgency } from "../../apis/api/read/getAllAgency"
import { getAllProject } from "../../apis/api/read/getAllProject";
import { getProject } from "../../apis/api/read/getProject";
import { AgencyControllerType, ProjectControllerType } from "./types";

// Agency
export const useAgencyControllerEvents = ({ setAgencys , id = '', name = '', checkedAgency }: AgencyControllerType) => {
    const companyName = checkedAgency?.companyName ?? '';

    // 소속사 조회
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

    // 소속사 삭제
    const handleDelete = async () => {
        await deleteAgency({ companyName });
    }

    return { handleRead, handleDelete }
}

// Project
export const useProjectControllerEvents = ({ setProjects, name = '', startDate = '', endDate = '', checkedProjects }: ProjectControllerType) => {
    const projectId = checkedProjects?.id ?? 0;
    
    const handleRead = async () => {
        if (name === '' && startDate === '' && endDate === '') {
            const dataList = await getAllProject();
            setProjects(dataList);
        } else {
            const dataList = await getProject({ name, startDate, endDate });
            setProjects(dataList);
        }
    }

    const handleDelete = async () => {
        await deleteProject({ projectId });
        handleRead();
    }

    return { handleRead, handleDelete }
}