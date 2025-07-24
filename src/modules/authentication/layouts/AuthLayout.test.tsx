import { AuthLayout } from "./AuthLayout";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet-content">Mocked Outlet</div>,
  };
});

describe("AuthLayout", () => {
  it("should render the main container with correct structure", () => {
    const { container } = render(<AuthLayout />);
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer.tagName).toBe("DIV");
  });

  it("should have the correct DOM hierarchy", () => {
    const { container } = render(<AuthLayout />);
    
    const mainContainer = container.firstChild as HTMLElement;
    const innerWrapper = mainContainer.firstChild as HTMLElement;
    
    expect(mainContainer.tagName).toBe("DIV");
    expect(innerWrapper.tagName).toBe("DIV");
    expect(innerWrapper.className).toBe("w-full max-w-md");
    expect(innerWrapper.firstChild).toBeTruthy();
  });

  it("should render the Outlet component", () => {
    render(<AuthLayout />);
    const outletContent = screen.getByTestId("outlet-content");
    expect(outletContent).toBeInTheDocument();
    expect(outletContent.textContent).toBe("Mocked Outlet");
  });

  it("should have proper layout classes", () => {
    const { container } = render(<AuthLayout />);
    
    const mainContainer = container.firstChild as HTMLElement;
    const innerWrapper = mainContainer.firstChild as HTMLElement;
    expect(mainContainer.className).toContain("min-h-screen");
    expect(innerWrapper.className).toContain("max-w-md");
  });

  it("should render without crashing", () => {
    expect(() => render(<AuthLayout />)).not.toThrow();
  });
});


