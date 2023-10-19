import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MenuPanel from "./MenuPanel";

describe("MenuPanel Component", () => {
  it("renders without crashing", () => {
    const { getByText, getByAltText } = render(
      <MenuPanel setGameState={() => {}} setPlayerTurn={() => {}} />
    );

    // Check if "Pick Player 1's Mark" is in the document
    expect(getByText("Pick Player 1's Mark")).toBeInTheDocument();
  });
});
