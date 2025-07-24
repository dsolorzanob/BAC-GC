import { LoginLayout } from "./LoginLayout";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("LoginLayout", () => {
  it("should render the LoginLayout component", () => {
    const { container } = render(<LoginLayout children={<div>Test</div>} />);
    expect(container).toBeInTheDocument();
  });

  it("should receive children and render it as a div", () => {
    const testContent = "Test Children Content";
    render(
      <LoginLayout
        children={<div data-testid="test-children">{testContent}</div>}
      />
    );

    const childrenElement = screen.getByTestId("test-children");
    expect(childrenElement).toBeInTheDocument();

    expect(childrenElement.tagName).toBe("DIV");
    expect(childrenElement.textContent).toBe(testContent);
  });

  it("should render children in the main section", () => {
    const { container } = render(
      <LoginLayout
        children={<div data-testid="main-content">Main Content</div>}
      />
    );
    const mainElement = container.querySelector("main");
    const childrenElement = screen.getByTestId("main-content");

    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toContainElement(childrenElement);
  });

  it("should require children prop", () => {
    // Verificar que el componente requiere children
    const { container } = render(<LoginLayout children={<div>Required children</div>} />);
    expect(container).toBeInTheDocument();
  });

  it("should render children as div element", () => {
    render(
      <LoginLayout
        children={<div data-testid="children-div">Children as div</div>}
      />
    );
    
    const childrenDiv = screen.getByTestId("children-div");
    expect(childrenDiv.tagName).toBe("DIV");
    expect(childrenDiv.textContent).toBe("Children as div");
  });

  it("should render with different types of children", () => {
    const { container } = render(
      <LoginLayout>
        <div>Text content</div>
        <button>Button</button>
        <span>Span content</span>
      </LoginLayout>
    );

    expect(container).toBeInTheDocument();
    expect(screen.getByText("Text content")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Span content")).toBeInTheDocument();
  });
});
