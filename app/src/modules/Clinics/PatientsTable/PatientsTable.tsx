import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`;
const TableHead = styled.thead``;
const TableHeadCell = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
`;
const TableRow = styled.tr`
  border: 1px solid black;
  border-collapse: collapse;
`;
const TableData = styled.td`
  border: 1px solid grey;
`;
const PatientsTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>1</TableHeadCell>
          <TableHeadCell>2</TableHeadCell>
          <TableHeadCell>3</TableHeadCell>
          <TableHeadCell>4</TableHeadCell>
        </TableRow>
      </TableHead>
      <tbody>
        <TableRow>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
          <TableData>1</TableData>
        </TableRow>
        <TableRow>
          <TableData>2</TableData>
          <TableData>2</TableData>
          <TableData>2</TableData>
          <TableData>2</TableData>
        </TableRow>
        <TableRow>
          <TableData>3</TableData>
          <TableData>3</TableData>
          <TableData>3</TableData>
          <TableData>3</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default PatientsTable;
