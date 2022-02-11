const TransActionComponent = ({ transActions }) => {
  return (
    <div>
      {transActions.map((transAction) => (
        <div
          key={transAction.id}
          className="transaction"
          style={{
            borderRight:
              transAction.type === "expence"
                ? "4px solid red"
                : "4px solid green",
          }}
        >
          <span>{transAction.desc}</span>
          <span>{transAction.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TransActionComponent;
