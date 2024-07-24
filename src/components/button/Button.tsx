import styled from "styled-components";
import { ButtonType } from "./types";

// 프로젝트 내에서 사용할 버튼들 컴포넌트화 (재사용성 ↑, 유지보수성 ↑)
export const MainButton = styled.input.attrs({
    type: 'button',
})<ButtonType>`
    width: 100px;
    height: 100px;

    border: 1px solid lightgray;
    border-radius: 1rem;
    background-color: whitesmoke;

    font-weight: 500;
    font-size: 12px;
    color: darkgray;

    &:hover {
        cursor: pointer;
        background-color: #cfcfcf;
        color: black;
        border: 1px solid gray;
    }
`

export const BtnCRUD = styled.input.attrs({
    type: 'submit',
    name: 'Btn_CRUD'
})`
    width: 2.5rem;
    height: 1.2rem;
    margin-inline: 0.2rem;

    border: 1px solid rgb(141, 186, 220);
    border-radius: 5px;

    color: rgb(141, 186, 220);
    background-color: transparent;

    font-size: 11px;

    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
`

export const BtnApply = styled.input.attrs({
    type: 'submit',
    name: 'Btn_Apply',
})`
    width: 70px;
    height: 30px;

    border: 1px solid rgb(75, 141, 248);
    border-radius: 3px;

    background-color: rgb(75, 141, 248);
    color: white;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: rgb(58, 123, 228);
        border: 1px solid rgb(58, 123, 228);
    }
`

export const BtnReset = styled.input.attrs({
    type: 'button',
    name: 'Btn_Reset',
    value: '초기화'
})`
    width: fit-content;
    height: 30px;

    border: 1px solid lightgray;
    border-radius: 3px;

    background-color: whitesmoke;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #e2e2e2;
    }
`

export const BtnZipCode = styled.input.attrs({
    type: 'button',
    value: '우편번호 검색'
})`
    width: 120px;
    height: 25px;

    background-color: rgb(58, 123, 228);
    color: white;
    font-weight: bold;
    
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: rgb(33, 100, 207);
        cursor: pointer;
    }
`