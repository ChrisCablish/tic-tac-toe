import React from "react";
import { ReactComponent as XIcon } from "../../../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../../../assets/icon-o.svg";

const SingleSquare = ({ squareData }) => {
  return (
    <div className="icon-holder">
      {squareData && squareData.symbol === "x" && <XIcon />}
      {squareData && squareData.symbol === "o" && <OIcon />}
    </div>
  );
};

export default SingleSquare;
