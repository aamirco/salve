import { ClinicSwitcher } from "./ClinicSwitcher";
import styled from "styled-components";

const ClinicsWrapper = styled.div``;
const Clinics = () => {
  return (
    <ClinicsWrapper>
      <ClinicSwitcher />
    </ClinicsWrapper>
  );
};

export default Clinics;
