import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
  const [values, setValues] = useState({
    type: "expence",
    amount: 0,
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="desc"
        value={values.desc}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="amount"
        value={values.amount}
        onChange={(e) => handleChange(e)}
      />
      <div className="radioBox">
        <input
          name="type"
          type="radio"
          value="expence"
          checked={values.type === "expence"}
          onChange={(e) => handleChange(e)}
        />
        <label>expence</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={(e) => handleChange(e)}
        />
        <label>income</label>
      </div>
      <button type="submit" className="btn primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
