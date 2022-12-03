import { baseUrl } from "./constants";

export const fetchClinics = () => {
  return fetch(baseUrl + "/clinics/all", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
