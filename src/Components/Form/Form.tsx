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
  const inputsNames: string[] = [
    "Type:",
    "To / From:",
    "Details:",
    "Amount (£):",
  ];
  const [type, setType] = useState("invoice");
  const [tofrom, setTofrom] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState(0);

  const valueSetersAndGeters = {
    type,
    tofrom,
    details,
    amount,
    setType,
    setTofrom,
    setDetails,
    setAmount,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!tofrom || !details) {
      setStatus("Please fill form");
    } else if (amount <= 0) {
      setStatus("Amount must be set correctly");
    } else {
      setStatus("");
      const values: [string, string, number] = [tofrom, details, amount];

      if (type === "invoice") {
        setTemplates([...templates, new Invoice(...values)]);
      } else {
        setTemplates([...templates, new Payment(...values)]);
      }

      setTofrom("");
      setDetails("");
      setAmount(0);
    }
  };

  return (
    <>
      <InputsDraw
        inps={inputsNames}
        valueSetersAndGeters={valueSetersAndGeters}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Form;
