import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

it("should render", () => {
  render(<Dashboard />);
});

it("displays a number");
