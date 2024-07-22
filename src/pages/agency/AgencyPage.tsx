import { AgencyController } from "../../components/controller/Controller";
import { AgencyTable } from "../../components/table/Table";
import { AgencyContainer } from "./styles";

export default function AgencyPage() {
    return (
        <AgencyContainer>
            <AgencyController />
            <AgencyTable />
        </AgencyContainer>
    )
}