import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

it("should render", () => {
  render(<Dashboard />);
});

it("displays a number from state", () => {
  const { queryAllByText } = render(<Dashboard />);

  //Checks if the prop values have been passed down
  const hasCounts = queryAllByText(/0/i);
  //Is is able to grab the elements with 0?
  expect(hasCounts);
});

it("number goes up when ball button clicked", () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText("Ball");

  fireEvent.click(button);
  getByText(/1/);
});

it("number goes up when strike button clicked", () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText("Strike");

  fireEvent.click(button);
  getByText(/1/);
});

it("number goes up when foul button clicked", () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText("Foul");

  fireEvent.click(button);
  getByText(/1/);
});

it("number goes up when hit button clicked", () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText("Hit");

  fireEvent.click(button);
  getAllByText(/0/);
});
