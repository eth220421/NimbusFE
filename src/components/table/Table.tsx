import { Table, TableCell, TableContainer, TableRow } from "./styles"
import { AgencyTableType } from "./types"
import { AgencyObjType } from "../../objects/types"
import { useTableEvents } from "./events";
import { InputRadioBtn } from "../input/Input";

export const AgencyTable = ({ agencys, setCheckedAgency, adminName }: AgencyTableType) => {
    const { handleCalCurrentDay } = useTableEvents();
    const currentDay = handleCalCurrentDay();

    const handleCheck = (agency: AgencyObjType) => {
        setCheckedAgency(agency);
    }

    return <TableContainer>
        <Table>
            <TableRow backgroundColor="rgb(48, 84, 150)" fontSize="10px" fontColor="white">
                <TableCell border="1px solid black">▣</TableCell>
                <TableCell border="1px solid black">소속사 ID</TableCell>
                <TableCell border="1px solid black">소속사명</TableCell>
                <TableCell border="1px solid black">관계</TableCell>
                <TableCell border="1px solid black">주소</TableCell>
                <TableCell border="1px solid black">사업자 번호</TableCell>
                <TableCell border="1px solid black">대표자</TableCell>
                <TableCell border="1px solid black">전화번호</TableCell>
                <TableCell border="1px solid black">수정자</TableCell>
                <TableCell border="1px solid black">수정일</TableCell>
                <TableCell border="1px solid black">사용여부</TableCell>
            </TableRow>
            {agencys.map((agency: AgencyObjType) => (
                    <TableRow key={agency.companyID}>
                        <TableCell border="1px solid black">
                            <InputRadioBtn onChange={() => handleCheck(agency)} />
                        </TableCell>
                        <TableCell border="1px solid black">{agency.companyID}</TableCell>
                        <TableCell border="1px solid black">{agency.companyName}</TableCell>
                        <TableCell border="1px solid black">{agency.relation}</TableCell>
                        <TableCell border="1px solid black">{agency.address}</TableCell>
                        <TableCell border="1px solid black">{agency.businessNumber}</TableCell>
                        <TableCell border="1px solid black">{agency.representative}</TableCell>
                        <TableCell border="1px solid black">{agency.phoneNumber}</TableCell>
                        <TableCell border="1px solid black">{adminName}</TableCell> {/* 수정자 */}
                        <TableCell border="1px solid black">{currentDay}</TableCell> {/* 수정일 */}
                        <TableCell border="1px solid black">{agency.active ? 'O' : 'X'}</TableCell>
                    </TableRow>
                ))}
        </Table>
    </TableContainer>
}