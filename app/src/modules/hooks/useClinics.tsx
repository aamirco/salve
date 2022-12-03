import { useEffect, useState } from "react";
import { fetchClinics } from "../../api/clinics";
import { IClinic } from "../../types";

export const useClinics = () => {
  const [selectedClinic, setSelectedClinic] = useState("0");
  const [clinics, setClinics] = useState<IClinic[]>([]);
  useEffect(() => {
    fetchClinics().then((res) => setClinics(res));
  }, [selectedClinic]);
  return { selectedClinic, setSelectedClinic, clinics, setClinics };
};
