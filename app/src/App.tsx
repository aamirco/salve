// import { fetchClinics } from "./api/clinics";
// import { fetchPatients } from "./api/patients";
import { Navigation } from "./modules/Navigation";

function App() {
  // fetchClinics().then((res) => console.log(res));
  // fetchPatients("1").then((res) => console.log(res));
  // fetchPatients("2").then((res) => console.log(res));
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
