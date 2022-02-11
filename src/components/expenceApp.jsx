import { useEffect, useState } from "react";
import OverViewComponent from "./overViewComponent";
import TransActionComponent from "./transActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transAction.forEach((t) => {
      t.type === "expence"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpence(exp);
    setIncome(inc);
  }, [transAction]);

  const addTransaction = (values) => {
    setTransAction([...transAction, { ...values, id: Date.now() }]);
    console.log(transAction);
  };

  return (
    <section className="container">
      <OverViewComponent
        expence={expence}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transActions={transAction} />
    </section>
  );
};

export default ExpenceApp;
