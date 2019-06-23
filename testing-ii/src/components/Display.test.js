import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

it("should render", () => {
  render(<Display />);
});

it("should display text balls", () => {
  const { queryByText } = render(<Display strikes={0} balls={0} />);
  const hasBalls = queryByText(/balls/i);
  expect(hasBalls).toBeInTheDocument();
});

it("should display strikes", () => {
  const { queryByText } = render(<Display strikes={0} balls={0} />);
  const hasStrikes = queryByText(/strikes/i);
  expect(hasStrikes).toBeInTheDocument();
});

it("should display 0 counts in both strikes and balls", () => {
  const { queryAllByText } = render(<Display strikes={0} balls={0} />);

  //Checks if the prop values have been passed down
  const hasCounts = queryAllByText(/0/i);
  //Is is able to grab the elements with 0?
  expect(hasCounts);
});
