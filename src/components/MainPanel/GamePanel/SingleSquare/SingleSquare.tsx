import React from "react";
import { ReactComponent as MySvgIcon } from "../../../../assets/icon-x.svg";
type SingleSquareProps = {
  clicked: boolean;
};

const SingleSquare: React.FC<SingleSquareProps> = ({ clicked }) => {
  //if the col is clicked on, render the SvgIcon
  return <div className="icon-holder">{clicked && <MySvgIcon />}</div>;
};

export default SingleSquare;
