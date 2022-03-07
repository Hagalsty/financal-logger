import React from "react";

const InputsDraw = ({
  state,
  setState,
}: {
  state: any;
  setState: any;
}): JSX.Element => {
  type SelectInputEvent =
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLInputElement>;

  const handleClick = (e: SelectInputEvent) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setState({ ...state, [name]: newValue });
  };

  const DrawedInps = (
    <>
      <div className="field">
        <label>Type:</label>
        <select id="type" value={state.type} name="type" onChange={handleClick}>
          <option value="invoice">Invoice</option>
          <option value="payment">Payment</option>
        </select>
      </div>
      <div className="field">
        <label>To / From:</label>
        <input
          type="text"
          id="tofrom"
          name="tofrom"
          value={state.tofrom}
          onChange={handleClick}
        />
      </div>
      <div className="field">
        <label>Details:</label>
        <input
          type="text"
          id="details"
          name="details"
          value={state.details}
          onChange={handleClick}
        />
      </div>
      <div className="field">
        <label>Amount (£)</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={state.amount}
          onChange={handleClick}
        />
      </div>
    </>
  );
  return <>{DrawedInps}</>;
};

export default InputsDraw;
