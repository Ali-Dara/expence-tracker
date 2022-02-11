import { useState } from "react";
import OverViewComponent from "./overViewComponent";
import TransActionComponent from "./transActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  return (
    <section className="container">
      <OverViewComponent expanded={expence} income={income}/>
      <TransActionComponent transAction={transAction}/>
    </section>
  );
};

export default ExpenceApp;
