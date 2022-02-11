import { useState } from "react";
import OverViewComponent from "./overViewComponent";
import TransActionComponent from "./transActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  const addTransaction = (values) => {
    setTransAction([...transAction, { ...values, id: Date.now() }]);
    console.log(transAction)
  };

  return (
    <section className="container">
      <OverViewComponent
        expanded={expence}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transActions={transAction} />
    </section>
  );
};

export default ExpenceApp;
