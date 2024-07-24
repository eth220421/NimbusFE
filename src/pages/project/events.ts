import { createProject } from "../../apis/api/create/createProject";
import { updateProject } from "../../apis/api/update/updateProject";
import { useProjectEventsType } from "./types"

// project 폴더에서 사용될 함수 정의
export const useProjectEvents = ({ ProjectData, navigate, projectId }: useProjectEventsType) => {

    const handleRegister = () => {
        if (!ProjectData.projName) {
            alert("프로젝트 명은 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.manager) {
            alert("담당자는 필수 입력값입니다.");
            return;
        }
        if (ProjectData.industryCode.id === 0) {
            alert("산업구분코드는 필수 입력값입니다.");
            console.log(ProjectData.industryCode.id)
            return;
        }
        if (ProjectData.projCode.id === 0) {
            alert("PJ 구분은 필수 입력값입니다.");
            return;
        }
        if (ProjectData.projState.id === 0) {
            alert("프로젝트 상태는 필수 입력값입니다.");
            return;
        }
        if (ProjectData.workArea.id === 0) {
            alert("근무지역은 필수 입력값입니다.");
            return;
        }

        createProject({ ProjectData, navigate });
    }

    const handleUpdate = () => {
        if (!ProjectData.projName) {
            alert("프로젝트 명은 필수 입력값입니다.");
        }
        else if (!ProjectData.manager) {
            alert("담당자는 필수 입력값입니다.");
        }
        else if (ProjectData.industryCode.id === 0 ) {
            alert('산업구분코드를 선택해주세요.');
        }
        else if (ProjectData.projCode.id === 0) {
            alert('PJ 구분을 선택해주세요.');
        }
        else if (ProjectData.projState.id === 0) {
            alert('프로젝트 상태를 선택해주세요.');
        }
        else if (ProjectData.workArea.id === 0) {
            alert('근무지역을 선택해주세요.');
        }
        else (
            updateProject({ ProjectData, navigate, projectId })
        )
    }

    return { handleRegister, handleUpdate }
}