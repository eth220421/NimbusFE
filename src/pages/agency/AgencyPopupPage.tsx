import { useLocation } from "react-router-dom";
import { BtnApply, BtnReset } from "../../components/button/Button";
import { InputCheckBox, InputText, InputTextArea } from "../../components/input/Input";
import { Table, TableCell, TableRow } from "../../components/table/styles";
import { AgencyPopupContainer, Title } from "./styles";

export default function AgencyPopupPage() {
    const location = useLocation();

    // Controller.tsx로부터 넘어오는 state 객체 할당
    const title = location.state.title as string;
    const valueApply = location.state.valueApply as string;

    return (
        <AgencyPopupContainer>
            <Title>소속사 {title}</Title>
            <Table>
                <TableRow>
                    <TableCell width="1rem"></TableCell>
                    <TableCell width="8rem">소속사 ID</TableCell>
                    <TableCell textAlign="left">(시스템에서 자동 부여함)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>소속사 명</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="20rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>소속사 관계</TableCell>
                    <TableCell textAlign="left">
                        <InputTextArea />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>주소</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="35rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>사업자 번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="20rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>대표자</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="12rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="12rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>사용여부</TableCell>
                    <TableCell textAlign="left">
                        <InputCheckBox />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell textAlign="right">
                        <BtnReset />
                        &nbsp;
                        <BtnApply value={valueApply} />
                    </TableCell>
                </TableRow>
            </Table>
        </AgencyPopupContainer>
    )
}