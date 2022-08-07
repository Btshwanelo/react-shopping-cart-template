import { render, screen } from "@testing-library/react";
import App from "./App";
import { testUseAppSelector } from "./features/test-app-selector";
import { useAppDispatch, useAppSelector } from "./store.js";

jest.mock("./store.js");

describe("App", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/your bag/i);
    expect(linkElement).toBeInTheDocument();
  });
});
