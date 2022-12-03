import { render, screen } from "@testing-library/react";
import ClinicSwitcher from "./ClinicSwitcher";

describe("ClinicSwitcher", () => {
  render(
    <ClinicSwitcher
      selectedClinic={"1"}
      setSelectedClinic={() => {}}
      clinics={[{ id: "1", name: "salve" }]}
    />
  );
  it("should render a button for the clinic", () => {
    expect(
      screen
        .getAllByRole("button")
        .find((button) => button.innerHTML === "salve")
    ).toBeDefined();
  });
});
