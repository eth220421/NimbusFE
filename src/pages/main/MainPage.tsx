import { Link } from "react-router-dom";
import { MainButton } from "../../components/button/Button";
import { MainContainer } from "./styles";

export default function MainPage() {
    return (
        <MainContainer>
            <Link to="./agency">
                <MainButton value={"소속사"}/>
            </Link>
            <div style={{width: 100}}></div>
            <Link to="./project">
                <MainButton value={"프로젝트"}/>
            </Link>
        </MainContainer>
    )
}