import React from "react";
import { ReactComponent as XIcon } from "../../../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../../../assets/icon-o.svg"; // Assuming you meant OIcon for YIcon

const SingleSquare = ({ clickedSquare }) => {
  return (
    <div className="icon-holder">
      {clickedSquare && clickedSquare.symbol === "x" && <XIcon />}
      {clickedSquare && clickedSquare.symbol === "o" && <OIcon />}
    </div>
  );
};

export default SingleSquare;
