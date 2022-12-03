import { fetchClinics } from "./api/clinics";
import { fetchPatients } from "./api/patients";

function App() {
  fetchClinics().then((res) => console.log(res));
  fetchPatients("1").then((res) => console.log(res));
  fetchPatients("2").then((res) => console.log(res));
  return <div></div>;
}

export default App;
