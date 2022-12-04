import { render, screen } from "@testing-library/react";
import { Button } from "./styled";
describe("Button", () => {
  it("renders correct color when selected", () => {
    render(<Button selected>test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: #8665e3; color: #ffffff;");
  });
  it("renders correct color when not selected", () => {
    render(<Button selected={false}>test</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: white; color: #8665e3;");
  });
});
