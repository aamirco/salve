import { baseUrl } from "./constants";

export const fetchPatients = (clinic_id: string) => {
  return fetch(baseUrl + "/patients/" + clinic_id, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
