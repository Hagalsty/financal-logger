import React from "react";
import Invoice from "../../Classes/Invoice";
import Payment from "../../Classes/Payment";
import HasFormatter from "../../Interfaces/HasFormater";

const Wrapper = ({ templates }: { templates: HasFormatter[] }): JSX.Element => {
  return (
    <>
      <h1>Finance Logger</h1>
      <ul className="item-list">
        {templates.map((el: Invoice | Payment, i: number) => {
          const heading = el instanceof Invoice ? "Invoice" : "Payment";

          return (
            <li key={i}>
              <h4>{heading}</h4>
              <p>{el.format()}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Wrapper;
