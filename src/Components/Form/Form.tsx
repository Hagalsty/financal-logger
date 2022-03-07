import React, { Dispatch, SetStateAction, useState } from "react";
import Payment from "../../Classes/Payment";
import Invoice from "../../Classes/Invoice";
import HasFormatter from "../../Interfaces/HasFormater";
import InputsDraw from "./InputsDraw/InputsDraw";

const Form = ({
  setTemplates,
  templates,
  setStatus,
}: {
  setTemplates: Dispatch<SetStateAction<HasFormatter[]>>;
  templates: HasFormatter[];
  setStatus: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
  const [state, setState] = useState({
    type: "invoice",
    tofrom: "",
    details: "",
    amount: "0",
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!state.tofrom || !state.details) {
      setStatus("Please fill form");
    } else if (Number(state.amount) <= 0) {
      setStatus("Amount must be set correctly");
    } else {
      setStatus("");
      const values: [string, string, string] = [
        state.tofrom,
        state.details,
        state.amount,
      ];

      if (state.type === "invoice") {
        setTemplates([...templates, new Invoice(...values)]);
      } else {
        setTemplates([...templates, new Payment(...values)]);
      }

      setState({
        ...state,
        tofrom: "",
        details: "",
        amount: "0",
      });
    }
  };

  return (
    <>
      <InputsDraw state={state} setState={setState} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Form;
