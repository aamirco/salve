import { Sort } from "../Clinics";
import styled from "styled-components";

const Select = styled.select`
  margin: auto;
  margin-right: 0;
  height: 24px;
  width: 50px;
`;
const SortSelector = ({
  setSortType,
}: {
  setSortType: (arg0: Sort) => void;
}) => {
  return (
    <Select
      onChange={(e) => {
        setSortType(e.target.value as Sort);
      }}
    >
      <option value={Sort.ID}>ID</option>
      <option value={Sort.ASCENDING}>↑</option>
      <option value={Sort.DESCENDING}>↓</option>
    </Select>
  );
};

export default SortSelector;
