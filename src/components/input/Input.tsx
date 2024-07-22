import styled from "styled-components";
import { InputTextAreaType, InputTextType } from "./types";

export const  InputText= styled.input.attrs(props => ({
    type: 'text',
    required: props.required || false,
}))<InputTextType>`
    width: ${(props) => props.width || '5rem'};
    height: 0.7rem;
`

export const InputTextArea = styled.textarea<InputTextAreaType>`
    width: ${(props) => props.width || '35rem'};
    height: ${(props) => props.height || '3rem'};
`

export const InputCheckBox = styled.input.attrs({
    type: 'checkbox'
})`
    width: fit-content;
`