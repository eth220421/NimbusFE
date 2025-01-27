import styled from "styled-components";

// controller 폴더에서 사용될 CSS 속성 정의 (재사용성 ↑, 유지보수성 ↑)
export const ControllerContainer = styled.div`
    width: 100%;
    height: 7rem;
    margin: 1rem 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    border: 1px solid gray;
    border-radius: 5px;

    font-size: 12px;
`

export const SearchArea = styled.div`
    width: 95%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: start;
`

export const ButtonArea = styled.div`
    width: 95%;
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: end;
`