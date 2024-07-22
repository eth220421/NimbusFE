import { useLocation } from "react-router-dom";
import { BtnApply, BtnReset } from "../../components/button/Button";
import { InputCheckBox, InputText, InputTextArea } from "../../components/input/Input";
import { Table, TableCell, TableRow } from "../../components/table/styles";
import { AgencyPopupContainer, Title } from "./styles";
import { AgencyObj } from "../../objects/AgencyObj";

export default function AgencyPopupPage() {
    const location = useLocation();

    const title = location.state.title as string;
    const valueApply = location.state.valueApply as string;    

    const {
        AgencyData,
        setAgencyName,
        setRelation,
        setAddress,
        setBusinessNum,
        setCeo,
        setTel,
        setIsUsed
    } = AgencyObj();

    // 등록신청 버튼 클릭 시
    const handleRegist = () => {
        console.log(AgencyData);
    }

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
                        <InputText width="20rem" value={AgencyData.companyName} onChange={(e) => setAgencyName(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>소속사 관계</TableCell>
                    <TableCell textAlign="left">
                        <InputTextArea value={AgencyData.relation} onChange={(e) => setRelation(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>주소</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="35rem" value={AgencyData.address} onChange={(e) => setAddress(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>사업자 번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="20rem" value={AgencyData.businessNumber} onChange={(e) => setBusinessNum(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>대표자</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="12rem" value={AgencyData.representative} onChange={(e) => setCeo(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="12rem" value={AgencyData.phoneNumber} onChange={(e) => setTel(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>*</TableCell>
                    <TableCell>사용여부</TableCell>
                    <TableCell textAlign="left" >
                        <InputCheckBox checked={AgencyData.active} onChange={(e) => setIsUsed(e.target.checked)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell textAlign="right">
                        <BtnReset />
                        &nbsp;
                        <BtnApply value={valueApply} onClick={handleRegist} />
                    </TableCell>
                </TableRow>
            </Table>
        </AgencyPopupContainer>
    )
}