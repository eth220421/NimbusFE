import { useLocation, useNavigate } from "react-router-dom";
import { BtnApply, BtnReset, BtnZipCode } from "../../components/button/Button";
import { InputDate, InputSelect, InputText } from "../../components/input/Input";
import { Table, TableCell, TableRow } from "../../components/table/styles";
import { ProjectPopupContainer, Title } from "./styles";
import { ProjectObj } from "../../objects/ProjectObj";
import { useProjectEvents } from "./events";
import { ProjectObjType } from "../../objects/types";
import { useEffect } from "react";

export default function ProjectPopupPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const title = location.state.title as string;
    const valueApply = location.state.valueApply as string;
    const checkedProjects = location.state.checkedProjects as ProjectObjType;
    const projectId = checkedProjects?.id ?? 0;

    console.log(checkedProjects);

    const {
        ProjectData,
        setProjName,
        setStartDate,
        setEndDate,
        setManager,
        setPhoneNo,
        setIndustryCodeID,
        setProjCodeID,
        setProjStateID,
        setReqDate,
        setWorkAreaID,
        setWorkLocation,
        setEssentialTech,
        setProjRemark,
        setProjEtc
    } = ProjectObj();

    useEffect(() => {
        if(valueApply === '수정' && checkedProjects) {
            setProjName(checkedProjects.projName);
            setStartDate(checkedProjects.startDate || '');
            setEndDate(checkedProjects.endDate || '');
            setManager(checkedProjects.manager);
            setPhoneNo(checkedProjects.phoneNo || '');
            setIndustryCodeID(checkedProjects.industryCode.id);
            setProjCodeID(checkedProjects.projCode.id);
            setProjStateID(checkedProjects.projState.id);
            setReqDate(checkedProjects.reqDate || '');
            setWorkAreaID(checkedProjects.workArea.id);
            setWorkLocation(checkedProjects.workLocation || '');
            setEssentialTech(checkedProjects.essentialTech || '');
            setProjRemark(checkedProjects.projRemark || '');
            setProjEtc(checkedProjects.projEtc || '');
        }
    }, [ valueApply, checkedProjects, setProjName, setStartDate, setEndDate, setManager, setPhoneNo, setIndustryCodeID, setProjCodeID, setProjStateID, setReqDate, setWorkAreaID, setWorkLocation, setEssentialTech, setProjRemark, setProjEtc ])

    const { handleRegister, handleUpdate } = useProjectEvents({ ProjectData, navigate, projectId });
    
    const handleApplyClick = () => {
        if (valueApply === '등록신청') {
            handleRegister();
        } else {
            handleUpdate();
        }
    };

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
                        <InputText width="90%" value={ProjectData.projName} onChange={(e) => setProjName(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>기간</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputDate width="7rem" value={ProjectData.startDate} onChange={(e) => setStartDate(e.target.value)} />
                        &nbsp;~&nbsp;
                        <InputDate width="7rem" value={ProjectData.endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 담당자</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="80%" value={ProjectData.manager} onChange={(e) => setManager(e.target.value)} />
                    </TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell textAlign="left">
                        <InputText width="80%" value={ProjectData.phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 산업구분코드</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"industryCode"} value={ProjectData.industryCode.id} onChange={(e) => setIndustryCodeID(Number(e.target.value))}>
                            <option value="1">소프트웨어 개발</option>
                            <option value="2">재정 서비스</option>
                        </InputSelect>
                    </TableCell>
                    <TableCell>* PJ 구분</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"ProjectCode"} value={ProjectData.projCode.id} onChange={(e) => setProjCodeID(Number(e.target.value))}>
                            <option value="3">관리자 프로젝트</option>
                            <option value="4">클라이언트 프로젝트</option>
                        </InputSelect>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 프로젝트 상태</TableCell>
                    <TableCell textAlign="left">
                        <InputSelect id={"ProjectState"} value={ProjectData.projState.id} onChange={(e) => setProjStateID(Number(e.target.value))}>
                            <option value="5">진행 중</option>
                            <option value="6">중지</option>
                            <option value="7">완료</option>
                        </InputSelect>
                    </TableCell>
                    <TableCell>의뢰일자</TableCell>
                    <TableCell textAlign="left">
                        <InputDate width="7rem" value={ProjectData.reqDate} onChange={(e) => setReqDate(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>* 근무지역</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputSelect id={"workingArea"} value={ProjectData.workArea.id} onChange={(e) => setWorkAreaID(Number(e.target.value))}>
                            <option value="8">서울</option>
                            <option value="9">부산</option>
                        </InputSelect>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>작업장 주소</TableCell>
                    <TableCell textAlign="left" colSpan={2}>
                        <InputText width="100%" value={ProjectData.workLocation} onChange={(e) => setWorkLocation(e.target.value)} />
                    </TableCell>
                    <TableCell>
                        <BtnZipCode />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>필수기술</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" value={ProjectData.essentialTech} onChange={(e) => setEssentialTech(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>특기사항</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" value={ProjectData.projRemark} onChange={(e) => setProjRemark(e.target.value)} />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>비고</TableCell>
                    <TableCell textAlign="left" colSpan={3}>
                        <InputText width="90%" value={ProjectData.projEtc} onChange={(e) => setProjEtc(e.target.value)} />
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
                        <BtnApply value={valueApply} onClick={handleApplyClick} />
                    </TableCell>
                </TableRow>
            </Table>
        </ProjectPopupContainer>
    )
}