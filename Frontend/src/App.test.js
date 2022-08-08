import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Check if header and footer render", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headings = screen.getAllByRole("heading", { name: "Perfect Pup" });
  expect(headings[0]).toBeInTheDocument();
  expect(headings[1]).toBeInTheDocument();
});

test("Check if slider is on first render", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const slider = screen.getByRole("img", { name: "Pictures of Dogs" });
  expect(slider).toBeInTheDocument();
});
