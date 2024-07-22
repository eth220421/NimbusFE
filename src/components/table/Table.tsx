import { Table, TableCell, TableContainer, TableRow } from "./styles"

export const AgencyTable = () => {
    return <TableContainer>
        <Table>
            <TableRow backgroundColor="rgb(48, 84, 150)" fontSize="10px" fontColor="white">
                <TableCell border="1px solid black">▣</TableCell>
                <TableCell border="1px solid black">소속사 ID</TableCell>
                <TableCell border="1px solid black">소속사명</TableCell>
                <TableCell border="1px solid black">관계</TableCell>
                <TableCell border="1px solid black">주소</TableCell>
                <TableCell border="1px solid black">사업자 번호</TableCell>
                <TableCell border="1px solid black">대표자</TableCell>
                <TableCell border="1px solid black">전화번호</TableCell>
                <TableCell border="1px solid black">수정자</TableCell>
                <TableCell border="1px solid black">수정일</TableCell>
                <TableCell border="1px solid black">사용여부</TableCell>
            </TableRow>
            <TableRow>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
                <TableCell border="1px solid black"></TableCell>
            </TableRow>
        </Table>
    </TableContainer>
}