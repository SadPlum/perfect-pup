import { render, screen } from "@testing-library/react";
import App from "../../../App";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Goes from front page (/home) to about, and then tips
describe("test tab functionality", () => {
  // Front page to about page.
  test("Check if tabs change to about page", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Get home page and tab.
    const header = screen.getByRole("heading", {
      name: "Find your new best friend",
    });
    const homeTab = screen.getByTestId("homeNavButton");
    // Check for active class on home tab
    expect(homeTab).toHaveClass("tab-active");
    const aboutTab = screen.getByTestId("aboutNavButton");
    // Get about tab and check it does NOT have active class
    expect(aboutTab).not.toHaveClass("tab-active");
    const homepage = screen.getByRole("heading", {
      name: "Welcome, dog-lovers",
    });
    // Clicks about tab
    await user.click(aboutTab);
    // Get about page
    const aboutPage = screen.getByRole("heading", { name: "Who we are" });
    // Checks to see if header, tabs and about page are in document.
    // Home page NOT in document.
    // About tab has active class. Home tab does NOT have active class.
    expect(header).toBeInTheDocument();
    expect(aboutTab).toBeInTheDocument();
    expect(aboutTab).toHaveClass("tab-active");
    expect(homeTab).not.toHaveClass("tab-active");
    expect(aboutPage).toBeInTheDocument();
    expect(homepage).not.toBeInTheDocument();
  });

  test("Check is about page changes to tips page", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const aboutPage = screen.getByRole("heading", { name: "Who we are" });
    expect(aboutPage).toBeInTheDocument();
    const aboutTab = screen.getByTestId("aboutNavButton");
    expect(aboutTab).toHaveClass("tab-active");
    const tipsTab = screen.getByTestId("tipsNavButton");
    await user.click(tipsTab);
    expect(aboutTab).not.toHaveClass("tab-active");
    expect(tipsTab).toHaveClass("tab-active");
    expect(aboutPage).not.toBeInTheDocument();
    const tipsPage = screen.getByRole("heading", {
      name: "Is this your first time adopting a dog?",
    });
    expect(tipsPage).toBeInTheDocument();
  });
});
