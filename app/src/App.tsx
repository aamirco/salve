import { Navigation } from "./modules/Navigation";
import styled from "styled-components";
import Clinics from "./modules/Clinics/Clinics";

const Container = styled.div`
  padding: 0 50px;
  @media (max-width: 786px) {
    padding: 0 5px;
  }
`;
function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Clinics />
      </Container>
    </>
  );
}

export default App;
