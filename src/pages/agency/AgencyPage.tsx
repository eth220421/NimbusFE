import { useLocation } from "react-router-dom";
import { AgencyController } from "../../components/controller/Controller";
import { AgencyTable } from "../../components/table/Table";
import { AgencyContainer } from "./styles";
import { useEffect, useState } from "react";
import { AgencyObjType } from "../../objects/types";
import { useAgencyControllerEvents } from "../../components/controller/events";

export default function AgencyPage() {
    const location = useLocation();
    
    // 관리자 이름
    const adminName = location.state.adminName as string;

    // Controller.tsx와 Table.tsx의 부모 폴더에서 상태 관리
    const [agencys, setAgencys] = useState<AgencyObjType[]>([]);

    // 체크된 소속사의 상태 관리
    const [checkedAgency, setCheckedAgency] = useState<AgencyObjType | null>(null);

    // 초기 렌더링 시 GET All을 위한 handleRead
    const { handleRead } = useAgencyControllerEvents({ setAgencys });
    useEffect(() => {
        handleRead();
    }, [])

    return (
        <AgencyContainer>
            <AgencyController setAgencys={setAgencys} checkedAgency={checkedAgency} />
            <AgencyTable agencys={agencys} setCheckedAgency={setCheckedAgency} adminName={adminName}/>
        </AgencyContainer>
    )
}