import { ClinicSwitcher } from "./ClinicSwitcher";
import styled from "styled-components";
import { useClinics } from "../hooks/useClinics";
import { PatientsTable } from "./PatientsTable";

const ClinicsWrapper = styled.div``;

const Clinics = () => {
  const { selectedClinic, setSelectedClinic, clinics } = useClinics();

  return (
    <ClinicsWrapper>
      <ClinicSwitcher
        selectedClinic={selectedClinic}
        setSelectedClinic={setSelectedClinic}
        clinics={clinics}
      />
      <PatientsTable />
    </ClinicsWrapper>
  );
};

export default Clinics;
