import styled from "styled-components";
import { TableCellType, TableRowType } from "./types";

// table 폴더에서 사용될 CSS 속성 정의
export const TableContainer = styled.div`
    width: 100%;
    height: 500px;

    margin: 0 auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    font-size: 13px;
`;

export const TableRow = styled.tr<TableRowType>`
    height: 30px;

    background-color: ${(props) => props.backgroundColor || 'transparent'};
    color: ${(props) => props.fontColor || 'black'};
    font-size: ${(props) => props.fontSize || '12px'};
`

export const TableCell = styled.td<TableCellType>`
    width: ${(props) => props.width || 'fit-content'};
    height: 100%;
    
    padding: 5px;
    text-align: ${(props) => props.textAlign || 'center'};
    border: ${(props) => props.border || 'none'};
`