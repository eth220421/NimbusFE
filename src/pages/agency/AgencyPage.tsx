import { useLocation } from "react-router-dom";
import { AgencyController } from "../../components/controller/Controller";
import { AgencyTable } from "../../components/table/Table";
import { AgencyContainer } from "./styles";
import { useEffect } from "react";

export default function AgencyPage() {
    const location = useLocation();
    
    // 관리자 이름
    const adminName = location.state.adminName as string;

    useEffect(() => {
        console.log(adminName);
    }, [])

    return (
        <AgencyContainer>
            <AgencyController />
            <AgencyTable />
        </AgencyContainer>
    )
}