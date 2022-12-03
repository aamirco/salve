import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchClinics } from "../../../api/clinics";
import { IClinic } from "../../../types";

const ClinicSwitcherWrapper = styled.div`
  display: flex;
`;
interface IButton {
  selected: boolean;
}
const Button = styled.button<IButton>`
  border: 1px solid #8665e3;
  background-color: ${(props) => (props.selected ? "#8665e3" : "white")};
  color: ${(props) => (props.selected ? "white" : "#8665e3")};
  font-size: 16px;
  margin: 5px;
  border-radius: 5px;
  padding: 5px 10px;
`;
interface IClinicSwitcher {
  selectedClinic: string;
  setSelectedClinic: (selectedClinic: string) => void;
  clinics: IClinic[];
}
const ClinicSwitcher = ({
  selectedClinic,
  setSelectedClinic,
  clinics,
}: IClinicSwitcher) => {
  return (
    <ClinicSwitcherWrapper>
      <p>Select clinic:</p>
      {clinics.map((clinic) => (
        <Button
          key={clinic.id}
          selected={clinic.id === selectedClinic}
          onClick={() => setSelectedClinic(clinic.id)}
        >
          {clinic.name}
        </Button>
      ))}
    </ClinicSwitcherWrapper>
  );
};

export default ClinicSwitcher;
