export interface IClinic {
  id: string;
  name: string;
}
export interface IPatient {
  id: string;
  clinic_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}
