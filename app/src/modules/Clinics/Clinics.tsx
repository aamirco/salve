import { ClinicSwitcher } from "./ClinicSwitcher";
import styled from "styled-components";
import { useClinics } from "../hooks/useClinics";
import { PatientsTable } from "./PatientsTable";
import { usePatients } from "../hooks/usePatients";
import { useState } from "react";
import { SortSelector } from "./SortSelector";

const ClinicsWrapper = styled.div``;

export enum Sort {
  ID = "ID",
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}
const Clinics = () => {
  const { selectedClinic, setSelectedClinic, clinics } = useClinics();
  const { patients } = usePatients(selectedClinic);
  const [sortType, setSortType] = useState<Sort>(Sort.ID);
  return (
    <ClinicsWrapper>
      <div style={{ display: "flex" }}>
        <ClinicSwitcher
          selectedClinic={selectedClinic}
          setSelectedClinic={setSelectedClinic}
          clinics={clinics}
        />
        {!!patients.length && (
          <SortSelector data-test="sort-selector" setSortType={setSortType} />
        )}
      </div>
      <PatientsTable patients={patients} sortType={sortType} />
    </ClinicsWrapper>
  );
};

export default Clinics;
