import { ReactComponent as XIcon } from "../../../../assets/icon-x.svg";
import { ReactComponent as OIcon } from "../../../../assets/icon-o.svg";
import styles from "./SingleSquare.module.scss";

const SingleSquare = ({ squareData }) => {
  return (
    <div>
      {squareData && squareData.symbol === "x" && <XIcon />}
      {squareData && squareData.symbol === "o" && <OIcon />}
    </div>
  );
};

export default SingleSquare;
