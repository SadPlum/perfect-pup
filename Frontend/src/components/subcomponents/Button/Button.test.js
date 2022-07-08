import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";
import Button from "./Button";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";

test("should render", () => {
  render(
    <BrowserRouter>
      <Button to="" text="test" />
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { name: "test" });
  expect(button).toBeInTheDocument();
});

test("button should change page", async () => {
  const history = createMemoryHistory();
  const user = userEvent.setup();
  render(
    <BrowserRouter location={history.location} navigator={history}>
      <App />
    </BrowserRouter>
  );
  const button = screen.getByText(/Head to Contact Page/i);
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(button).not.toBeInTheDocument();
  const contact = screen.getByRole("heading", { name: "Contact us today!" });
  expect(contact).toBeInTheDocument();
});
