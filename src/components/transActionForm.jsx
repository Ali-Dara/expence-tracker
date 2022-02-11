import { useState } from "react";

const TransActionForm = () => {
  const [values, setValues] = useState({
    type: "expence",
    amount: 0,
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log("desc:" + values.desc);
    console.log("amount:" + values.amount);
    console.log("type:" + values.type);
  };

  const handleSubmit = () => {};

  return (
    <form>
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
      <div>
        <input
          type="radio"
          value="expence"
          checked={values.type === "expence"}
          onChange={(e) => handleChange(e)}
        />
        <label for="type">expence</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={(e) => handleChange(e)}
        />
        <label>income</label>
      </div>
      <button type="submit" onSubmit={() => handleSubmit}>
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
