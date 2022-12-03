export interface IClinic {
  id: number;
  name: string;
}
export interface IPatient {
  id: number;
  clinic_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}
