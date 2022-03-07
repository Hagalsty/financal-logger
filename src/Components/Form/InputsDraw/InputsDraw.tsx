import React from "react";

const InputsDraw = ({
  state,
  setState,
}: {
  state: any;
  setState: any;
}): JSX.Element => {
  const DrawedInps = (
    <>
      <div className="field">
        <label>Type:</label>
        <select
          id="type"
          value={state.type}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setState({ ...state, type: e.target.value });
          }}
        >
          <option value="invoice">Invoice</option>
          <option value="payment">Payment</option>
        </select>
      </div>
      <div className="field">
        <label>To / From:</label>
        <input
          type="text"
          id="tofrom"
          value={state.tofrom}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setState({ ...state, tofrom: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Details:</label>
        <input
          type="text"
          id="details"
          value={state.details}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setState({ ...state, details: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Amount (£)</label>
        <input
          type="number"
          id="amount"
          value={state.amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setState({ ...state, amount: e.target.valueAsNumber });
          }}
        />
      </div>
    </>
  );
  return <>{DrawedInps}</>;
};

export default InputsDraw;
