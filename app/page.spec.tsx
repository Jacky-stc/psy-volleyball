import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Home from "./page";
import Header from "../components/Header";

describe("Home page", () => {
  test("should render without crashing", () => {
    render(<Home />);
    const title = screen.getByText(/排球是永遠向上看的運動/);
    expect(title).toBeInTheDocument();
  });
});

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("testing route", () => {
  test("routing", () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({ push: pushMock }));

    const { getByText } = render(<Header />);
    fireEvent.click(getByText("首頁"));

    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
