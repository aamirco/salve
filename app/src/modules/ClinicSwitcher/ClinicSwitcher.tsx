import { useState } from "react";
import styled from "styled-components";

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
const clinics = ["clinic1", "clinic2"];
const ClinicSwitcher = () => {
  const [selectedClinic, setSelectedClinic] = useState("");
  return (
    <ClinicSwitcherWrapper>
      {clinics.map((clinic) => (
        <Button
          selected={clinic === selectedClinic}
          onClick={() => setSelectedClinic(clinic)}
        >
          {clinic}
        </Button>
      ))}
    </ClinicSwitcherWrapper>
  );
};

export default ClinicSwitcher;
