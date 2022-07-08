import { render, screen } from "@testing-library/react";
import App from "../../../App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";

test("Check if tabs change page", async () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
  const header = screen.getByRole("heading", {
    name: "Find your new best friend",
  });
  const aboutTab = screen.getByTestId("aboutNavButton");
  const homepage = screen.getByRole("heading", { name: "Welcome, dog-lovers" });
  await user.click(aboutTab);
  const aboutPage = screen.getByRole("heading", { name: "Who we are" });
  expect(header).toBeInTheDocument();
  expect(aboutTab).toBeInTheDocument();
  expect(aboutPage).toBeInTheDocument();
  expect(homepage).not.toBeInTheDocument();
});
