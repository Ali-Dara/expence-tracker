import { useState } from "react";
import TransActionForm from "./transActionForm";

const OverViewComponent = ({ expence, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance:{income - expence}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={isShow ? "btn cancel":"btn"}
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div className="expenceBox" style={{ color: "red" }}>
          Expence {expence}
        </div>
        <div className="expenceBox" style={{ color: "green" }}>
          Income {income}
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
