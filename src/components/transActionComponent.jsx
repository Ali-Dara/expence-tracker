const TransActionComponent = ({ transActions }) => {
  return (
    <div>
      {transActions.map((transAction) => (
        <div key={transAction.id}>
          <span>{transAction.desc}</span>
          <span>{transAction.type}</span>
          <span>{transAction.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TransActionComponent;
