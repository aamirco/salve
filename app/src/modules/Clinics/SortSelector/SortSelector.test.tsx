import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortSelector from "./SortSelector";

describe("SortSelector", () => {
  it("update state when selecting option", () => {
    const funct = jest.fn();
    render(<SortSelector setSortType={funct} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "ID" })
    );
    expect(funct).toHaveBeenCalledTimes(1);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "↑" })
    );
    expect(funct).toHaveBeenCalledTimes(2);
  });
});
