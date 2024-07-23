import { createProject } from "../../apis/api/create/createProject";
import { useProjectEventsType } from "./types"

export const useProjectEvents = ({ ProjectData, navigate }: useProjectEventsType) => {
    const handleRegister = () => {
        if (!ProjectData.projName) {
            alert("프로젝트 명은 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.manager) {
            alert("담당자는 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.industryCode.id) {
            alert("산업구분코드는 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.projCode.id) {
            alert("PJ 구분은 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.projState.id) {
            alert("프로젝트 상태는 필수 입력값입니다.");
            return;
        }
        if (!ProjectData.workArea.id) {
            alert("근무지역은 필수 입력값입니다.");
            return;
        }

        createProject({ ProjectData, navigate });
    }

    return { handleRegister }
}