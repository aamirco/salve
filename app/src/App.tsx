import { ClinicSwitcher } from "./modules/ClinicSwitcher";
import { Navigation } from "./modules/Navigation";
import styled from "styled-components";
// import { fetchClinics } from "./api/clinics";
// import { fetchPatients } from "./api/patients";

const Container = styled.div`
  padding: 0 50px;
`;
function App() {
  // fetchClinics().then((res) => console.log(res));
  // fetchPatients("1").then((res) => console.log(res));
  // fetchPatients("2").then((res) => console.log(res));

  return (
    <>
      <Navigation />
      <Container>
        <ClinicSwitcher />
      </Container>
    </>
  );
}

export default App;
