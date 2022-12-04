import { render, screen } from "@testing-library/react";
import ClinicSwitcher from "./ClinicSwitcher";

describe("ClinicSwitcher", () => {
  const selectClinic = jest.fn();
  const renderer = () => {
    render(
      <ClinicSwitcher
        selectedClinic={"1"}
        setSelectedClinic={selectClinic}
        clinics={[{ id: "1", name: "Salve" }]}
      />
    );
  };
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should render a button for the clinic", () => {
    renderer();
    const button = screen.getByText("Salve");
    expect(button).toBeDefined();
  });
  it("should select a button when clicked", () => {
    renderer();
    const button = screen.getByText("Salve");
    expect(selectClinic).toHaveBeenCalledTimes(0);
    button.click();
    expect(selectClinic).toHaveBeenCalledTimes(1);
  });
  it("should select a buttn when clicked", () => {
    renderer();
    const button = screen.getByText("Salve");
    expect(selectClinic).toHaveBeenCalledTimes(0);
    button.click();
    expect(selectClinic).toHaveBeenCalledTimes(1);
  });
});
