import { Link } from "react-router-dom";
import { MainButton } from "../../components/button/Button";
import { MainContainer } from "./styles";
import { useState } from "react";
import { useMainPageEvents } from "./events";

export default function MainPage() {
    // 관리자 이름
    const [adminName, setAdminName] = useState('');

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