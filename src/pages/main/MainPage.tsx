import { Link } from "react-router-dom";
import { MainButton } from "../../components/button/Button";
import { MainContainer } from "./styles";
import { useEffect, useState } from "react";

export default function MainPage() {
    // 관리자 이름
    const [adminName, setAdminName] = useState('');

    useEffect(() => {
        let name: string | null = '';
        while (!name) {
            name = prompt('사용자 이름을 입력하세요.');
            if (!name) {
                alert('이름을 입력해주세요.');
            }
        }
        setAdminName(name);
    }, [])

    return (
        <MainContainer>
            <Link
                to={"./agency"}
                state={{
                    adminName: adminName
                }}
            >
                <MainButton value={"소속사"}/>
            </Link>
            <div style={{width: 100}}></div>
            <Link
                to={"./project"}
                state={{
                    adminName: adminName
                }}
            >
                <MainButton value={"프로젝트"}/>
            </Link>
        </MainContainer>
    )
}