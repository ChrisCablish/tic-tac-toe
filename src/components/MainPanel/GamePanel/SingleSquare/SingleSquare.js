import React from "react";
import { ReactComponent as XIcon } from "../../../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../../../assets/icon-o.svg";

const SingleSquare = ({ isClicked, turn }) => {
  return <div className="icon-holder">{isClicked && <XIcon />}</div>;
};

export default SingleSquare;
