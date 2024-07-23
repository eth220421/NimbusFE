import { Table, TableCell, TableContainer, TableRow } from "./styles"
import { AgencyTableType, ProjectTableType } from "./types"
import { AgencyObjType, ProjectObjType } from "../../objects/types"
import { useTableEvents } from "./events";
import { InputRadioBtn } from "../input/Input";

export const AgencyTable = ({ agencys, setCheckedAgency, adminName }: AgencyTableType) => {
    const { handleCalCurrentDay } = useTableEvents();
    const currentDay = handleCalCurrentDay();

    const handleCheck = (agency: AgencyObjType) => {
        setCheckedAgency(agency);
    }

    return (
        <TableContainer>
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
    )
}

export const ProjectTable = ({ projects, setCheckedProjects }: ProjectTableType) => {
    const handleCheck = (project: ProjectObjType) => {
        setCheckedProjects(project);
    }

    return (
        <TableContainer>
            <Table>
                <TableRow backgroundColor="rgb(48, 84, 150)" fontSize="10px" fontColor="white">
                    <TableCell border="1px solid black">▣</TableCell>
                    <TableCell border="1px solid black">Proj No</TableCell>
                    <TableCell border="1px solid black">프로젝트명</TableCell>
                    <TableCell border="1px solid black">상태</TableCell>
                    <TableCell border="1px solid black">수행사</TableCell>
                    <TableCell border="1px solid black">시작일</TableCell>
                    <TableCell border="1px solid black">종료일</TableCell>
                    <TableCell border="1px solid black">담당자</TableCell>
                    <TableCell border="1px solid black">전화</TableCell>
                    <TableCell border="1px solid black">산업</TableCell>
                    <TableCell border="1px solid black">PJ 구분</TableCell>
                    <TableCell border="1px solid black">필수기술</TableCell>
                    <TableCell border="1px solid black">특기사항</TableCell>
                    <TableCell border="1px solid black">지역</TableCell>
                    <TableCell border="1px solid black">비고</TableCell>
                </TableRow>
                {projects.map((project: ProjectObjType) => (
                    <TableRow key={project.id}>
                        <TableCell border="1px solid black">
                            <InputRadioBtn onChange={() => handleCheck(project)}/>
                        </TableCell>
                        <TableCell border="1px solid black">{project.projNo}</TableCell>
                        <TableCell border="1px solid black">{project.projName}</TableCell>
                        <TableCell border="1px solid black">{project.projState.codeDescription}</TableCell>
                        <TableCell border="1px solid black">{/* 수행사 생략 */}</TableCell>
                        <TableCell border="1px solid black">{project.startDate}</TableCell>
                        <TableCell border="1px solid black">{project.endDate}</TableCell>
                        <TableCell border="1px solid black">{project.manager}</TableCell>
                        <TableCell border="1px solid black">{project.phoneNo}</TableCell>
                        <TableCell border="1px solid black">{project.industryCode.codeDescription}</TableCell>
                        <TableCell border="1px solid black">{project.projCode.codeDescription}</TableCell>
                        <TableCell border="1px solid black">{project.essentialTech}</TableCell>
                        <TableCell border="1px solid black">{project.projRemark}</TableCell>
                        <TableCell border="1px solid black">{project.workArea.codeDescription}</TableCell>
                        <TableCell border="1px solid black">{project.projEtc}</TableCell>
                    </TableRow>
                ))}
            </Table>
        </TableContainer>
    )
}