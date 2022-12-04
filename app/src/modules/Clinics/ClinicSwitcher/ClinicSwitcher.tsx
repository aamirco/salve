import { IClinic } from "../../../types";
import { Button, ClinicSwitcherWrapper } from "./styled";

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
