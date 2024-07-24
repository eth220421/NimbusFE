import { Link } from "react-router-dom";
import { MainButton } from "../../components/button/Button";
import { MainContainer } from "./styles";
import { useState } from "react";
import { useMainPageEvents } from "./events";

// 메인 페이지 (서비스 선택 창)
export default function MainPage() {
    // 관리자 이름
    const [adminName, setAdminName] = useState('');

    // 버튼 클릭 시 사용되는 함수 구조 분해 할당
    const { handleSelect } = useMainPageEvents({ setAdminName });

    return (
        <MainContainer>
            <Link
                to={"./agency"}
                state={{
                    adminName: adminName
                }}
            >
                <MainButton value={"소속사"} onClick={handleSelect}/>
            </Link>
            <div style={{width: 100}}></div>
            <Link
                to={"./project"}
                state={{
                    adminName: adminName
                }}
            >
                <MainButton value={"프로젝트"} onClick={handleSelect}/>
            </Link>
        </MainContainer>
    )
}