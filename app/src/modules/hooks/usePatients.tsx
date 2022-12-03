import { useEffect, useState } from "react";
import { fetchPatients } from "../../api/patients";
import { IPatient } from "../../types";

const usePatients = (selectedClinic: string) => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  useEffect(() => {
    if (selectedClinic) {
      fetchPatients(selectedClinic).then((res) => {
        setPatients(res);
      });
    }
  }, [selectedClinic]);
  return { patients };
};

export { usePatients };
