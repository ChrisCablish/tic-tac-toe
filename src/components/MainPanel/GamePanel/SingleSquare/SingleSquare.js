import React from "react";
import { ReactComponent as XIcon } from "../../../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../../../assets/icon-o.svg"; // Assuming you meant OIcon for YIcon

const SingleSquare = ({ clickedSquare }) => {
  return (
    <div className="icon-holder">
      {clickedSquare === "p1" && <XIcon />}
      {clickedSquare === "p2" && <OIcon />}
    </div>
  );
};

export default SingleSquare;
