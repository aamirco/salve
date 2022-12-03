import styled from "styled-components";
import { IPatient } from "../../../types";
import { Sort } from "../Clinics";

const Table = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`;
const TableHead = styled.thead``;
const TableBody = styled.tbody``;
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

const PatientsTable = ({
  patients,
  sortType,
}: {
  patients: IPatient[];
  sortType: Sort;
}) => {
  if (!patients.length) return null;
  const sortedPatients = patients.sort((a, b) =>
    sortType === Sort.ASCENDING
      ? Date.parse(a.date_of_birth) - Date.parse(b.date_of_birth)
      : sortType === Sort.DESCENDING
      ? Date.parse(b.date_of_birth) - Date.parse(a.date_of_birth)
      : +a.id - +b.id
  );
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Id</TableHeadCell>
          <TableHeadCell>First name</TableHeadCell>
          <TableHeadCell>Last name</TableHeadCell>
          <TableHeadCell>Date of birth</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedPatients.map((patient) => (
          <TableRow>
            <TableData>{patient.id}</TableData>
            <TableData>{patient.first_name}</TableData>
            <TableData>{patient.last_name}</TableData>
            <TableData>{patient.date_of_birth}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PatientsTable;
