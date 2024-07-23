import { MainPageEventsType } from "./types";

export const useMainPageEvents = ({ setAdminName }: MainPageEventsType) => {
    const handleSelect = () => {
        let name: string | null = '';
        while (!name) {
            name = prompt('사용자 이름을 입력하세요.');
            if (!name) {
                alert('이름을 입력해주세요.');
            }
        }
        setAdminName(name);
    }

    return { handleSelect }
}