import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MenuPanel from "./MenuPanel";

describe("MenuPanel Component", () => {
  it("renders without crashing", () => {
    const { getByText, getByAltText } = render(
      <MenuPanel setGameState={() => {}} setPlayerTurn={() => {}} />
    );
    expect(getByText("Pick Player 1's Mark")).toBeInTheDocument();
  });

  it("updates playerTurn when X is clicked", () => {
    const mockSetPlayerTurn = jest.fn();
    const { getByAltText } = render(
      <MenuPanel setPlayerTurn={mockSetPlayerTurn} />
    );

    const symbolX = getByAltText(""); // Note: Ideally, your image alt attribute should have a description.
    fireEvent.click(symbolX);

    expect(mockSetPlayerTurn).toHaveBeenCalledWith(1);
  });
});

// Check if the default props or initial state render the expected UI elements.
