import { render, screen } from "@testing-library/react";
import { IPatient } from "../../../types";
import { Sort } from "../Clinics";
import PatientsTable from "./PatientsTable";

const mockPatients = [
  {
    id: "1",
    clinic_id: "1",
    first_name: "joe",
    last_name: "bloggs",
    date_of_birth: "2022-02-02",
  },
  {
    id: "2",
    clinic_id: "1",
    first_name: "jill",
    last_name: "cloggs",
    date_of_birth: "2022-01-01",
  },
];

describe("PatientsTable", () => {
  const renderer = (patients: IPatient[], sortType: Sort) => {
    render(<PatientsTable patients={patients} sortType={sortType} />);
  };
  it("should render a list of patients", async () => {
    renderer(mockPatients, Sort.ID);
    const table = screen.getByText("joe");
    expect(table).toBeDefined();
  });
  it("should sort a list descending by dob", async () => {
    renderer(mockPatients, Sort.DESCENDING);
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("joe");
  });
  it("should sort a list ascending by dob", async () => {
    renderer(mockPatients, Sort.ASCENDING);
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("jill");
  });
});
