import React from "react";

const InputsDraw = ({
  inps,
  valueSetersAndGeters,
}: {
  inps: string[];
  valueSetersAndGeters: any;
}): JSX.Element => {
  const DrawedInps: JSX.Element[] = inps.map((inp: string, i: number) => {
    const label: JSX.Element = <label>{inp}</label>;

    let input: JSX.Element;
    switch (inp) {
      case "Type:":
        input = (
          <select
            id="type"
            value={valueSetersAndGeters.type}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              valueSetersAndGeters.setType(e.target.value);
            }}
          >
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        );
        break;
      case "To / From:":
        input = (
          <input
            type="text"
            id="tofrom"
            value={valueSetersAndGeters.tofrom}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              valueSetersAndGeters.setTofrom(e.target.value);
            }}
          />
        );
        break;
      case "Details:":
        input = (
          <input
            type="text"
            id="details"
            value={valueSetersAndGeters.details}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              valueSetersAndGeters.setDetails(e.target.value);
            }}
          />
        );
        break;
      case "Amount (£):":
        input = (
          <input
            type="number"
            id="amount"
            value={valueSetersAndGeters.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              valueSetersAndGeters.setAmount(e.target.valueAsNumber);
            }}
          />
        );
        break;
    }

    const ret: JSX.Element = (
      <div className="field" key={i}>
        {label}
        {input}
      </div>
    );
    return ret;
  });

  return <>{DrawedInps}</>;
};

export default InputsDraw;
