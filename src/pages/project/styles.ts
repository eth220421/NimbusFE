import styled from "styled-components";

// project 폴더에서 사용될 CSS 속성 정의
export const ProjectContainer = styled.div`
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
`

export const ProjectPopupContainer = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 2rem auto;
    padding: 2rem;

    border: 1px solid gray;
    border-radius: 5px;
`

export const Title = styled.h3`
    text-align: center;
`