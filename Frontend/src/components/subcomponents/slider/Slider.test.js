import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slider from "./Slider";

test("Make sure an image renders", () => {
  render(<Slider />);
  const image = screen.getByRole("img", { name: "Pictures of Dogs" });
  expect(image).toBeInTheDocument();
});

test("Make sure image changes on click right", async () => {
  const user = userEvent.setup();
  render(<Slider />);
  const image1 = screen.getByRole("img", { name: "Pictures of Dogs" });
  const button = screen.getByTestId("right-slider-button");
  await user.click(button);
});
