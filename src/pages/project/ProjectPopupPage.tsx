import { useLocation } from "react-router-dom";
import { BtnApply, BtnReset, BtnZipCode } from "../../components/button/Button";
import { InputDate, InputSelect, InputText } from "../../components/input/Input";
import { Table, TableCell, TableRow } from "../../components/table/styles";
import { ProjectPopupContainer, Title } from "./styles";

export default function ProjectPopupPage() {
    const location = useLocation();

    const title = location.state.title as string;
    const valueApply = location.state.valueApply as string;    
    
    return (
        <ProjectPopupContainer>
            <Title>프로젝트 {title}</Title>
            <Table>
                <TableRow>
                    <TableCell>프로젝트 No</TableCell>
                    <TableCell textAlign="left" colSpan={3}>(PROJ_ID : 시스템에서 자동 부여함)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 프로젝트 명</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>기간</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputDate width="7rem" />
                        &nbsp;~&nbsp;
                        <InputDate width="7rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 담당자</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="80%" />
                    </TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="80%" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 산업구분코드</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"industryCode"}>
                            <option>산업구분코드 01</option>
                            <option>산업구분코드 02</option>
                            <option>산업구분코드 03</option>
                            <option>산업구분코드 04</option>
                        </InputSelect>
                    </TableCell>
                    <TableCell>* PJ 구분</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"ProjectCode"}>
                            <option>PJ 구분 01</option>
                            <option>PJ 구분 02</option>
                            <option>PJ 구분 03</option>
                            <option>PJ 구분 04</option>
                        </InputSelect>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 프로젝트 상태</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"ProjectState"}>
                            <option>프로젝트 상태 01</option>
                            <option>프로젝트 상태 02</option>
                            <option>프로젝트 상태 03</option>
                            <option>프로젝트 상태 04</option>
                        </InputSelect>
                    </TableCell>
                    <TableCell>의뢰일자</TableCell>
                    <TableCell textAlign="left">
                        <InputDate width="7rem" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 근무지역</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputSelect id={"workingArea"}>
                            <option>근무지역 01</option>
                            <option>근무지역 02</option>
                            <option>근무지역 03</option>
                            <option>근무지역 04</option>
                        </InputSelect>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>작업장 주소</TableCell>
                    <TableCell textAlign="left" colSpan={2}>
                        <InputText width="100%" />
                    </TableCell>
                    <TableCell>
                        <BtnZipCode />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>필수기술</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>특기사항</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>비고</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" />
                    </TableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                        <BtnReset />
                        &nbsp;
                        <BtnApply value={valueApply}/>
                    </TableCell>
                </TableRow>
            </Table>
        </ProjectPopupContainer>
    )
}