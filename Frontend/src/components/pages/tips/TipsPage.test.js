import { render, screen } from "@testing-library/react";
import TipsPage from "./TipsPage";

test("Check if render", () => {
  render(<TipsPage />);
  const heading = screen.getByRole("heading", {
    name: "Is this your first time adopting a dog?",
  });
  const image = screen.getByRole("img", { name: "Small brown dog" });
  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("check if tips array mapped", () => {
  render(<TipsPage />);
  const tips = screen.getAllByTestId("tips");
  expect(tips).toHaveLength(7);
});
