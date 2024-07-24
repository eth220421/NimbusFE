import { useEffect, useState } from "react";
import { ProjectController } from "../../components/controller/Controller";
import { ProjectTable } from "../../components/table/Table";
import { ProjectObjType } from "../../objects/types";
import { ProjectContainer } from "./styles";
import { useProjectControllerEvents } from "../../components/controller/events";

// 프로젝트 페이지
export default function ProjectPage() {
    // 테이블에 매핑할 데이터
    const [projects, setProjects] = useState<ProjectObjType[]>([])

    // 체크된 프로젝트 상태 관리
    const [checkedProjects, setCheckedProjects] = useState<ProjectObjType | null>(null);

    // 페이지 렌더링 시 사용될 함수 구조 분해 할당
    const { handleRead } = useProjectControllerEvents({ setProjects });

    // 페이지 렌더링 시 모든 프로젝트 조회
    useEffect(() => {
        handleRead();
    }, [])

    return (
        <ProjectContainer>
            <ProjectController setProjects={setProjects} checkedProjects={checkedProjects} />
            <ProjectTable projects={projects} setCheckedProjects={setCheckedProjects}/>
        </ProjectContainer>
    )
}