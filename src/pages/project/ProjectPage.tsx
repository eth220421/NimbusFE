import { useEffect, useState } from "react";
import { ProjectController } from "../../components/controller/Controller";
import { ProjectTable } from "../../components/table/Table";
import { ProjectObjType } from "../../objects/types";
import { ProjectContainer } from "./styles";
import { useProjectControllerEvents } from "../../components/controller/events";

export default function ProjectPage() {
    // 테이블에 매핑할 데이터
    const [projects, setProjects] = useState<ProjectObjType[]>([])

    // 체크된 프로젝트 상태 관리
    const [checkedProjects, setCheckedProjects] = useState<ProjectObjType | null>(null);

    const { handleRead } = useProjectControllerEvents({ setProjects });
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