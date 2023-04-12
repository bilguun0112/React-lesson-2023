import Exercises from "@/components/Exercises";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  it("renders calculator", () => {
    render(<Exercises />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("adds numbers", () => {
    render(<Exercises />);
    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "8" } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("13");
  });

  it("adds numbers", () => {
    render(<Exercises />);
    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const result = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "8" } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("13");
  });
  it("subtract numbers", () => {
    render(<Exercises />);
    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const subtractButton = screen.getByTestId("subtract");
    const result = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "8" } });
    fireEvent.change(num2Input, { target: { value: "8" } });

    fireEvent.click(subtractButton);

    expect(result).toHaveTextContent("0");
  });
  it("multiply numbers", () => {
    render(<Exercises />);
    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("multiply");
    const result = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "8" } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("40");
  });
  it("multiply numbers", () => {
    render(<Exercises />);
    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("divide");
    const result = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "40" } });
    fireEvent.change(num2Input, { target: { value: "8" } });

    fireEvent.click(addButton);

    expect(result).toHaveTextContent("5");
  });
});
