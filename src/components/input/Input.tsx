import styled from "styled-components";
import { InputDateType, InputSelectType, InputTextAreaType, InputTextType } from "./types";

// 프로젝트 내에서 사용할 입력 필드들 컴포넌트화 (재사용성 ↑, 유지보수성 ↑)
export const  InputText= styled.input.attrs(props => ({
    type: 'text',
    required: props.required || false,
}))<InputTextType>`
    width: ${(props) => props.width || '5rem'};
    height: 0.7rem;

    border: 1px solid gray;
    border-radius: 5px;
`

export const InputTextArea = styled.textarea<InputTextAreaType>`
    width: ${(props) => props.width || '35rem'};
    height: ${(props) => props.height || '3rem'};

    border-radius: 5px;
`

export const InputCheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    width: fit-content;
`

export const InputRadioBtn = styled.input.attrs({
    type: 'radio',
    name: 'agency'
})`
    width: fit-content;
    border: 1px solid gray;
`

export const InputDate = styled.input.attrs({
    type: 'date',
})<InputDateType>`
    width: ${(props) => props.width || '5rem'};

    border: 1px solid gray;
    border-radius: 5px;
`

export const InputSelect = styled.select.attrs(props => ({
    id: props.id || 'sel'
}))<InputSelectType>`
    width: 'fit-content';

    border: 1px solid gray;
    border-radius: 5px;
`