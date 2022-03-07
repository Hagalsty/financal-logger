import React, { Dispatch, SetStateAction, useState } from "react";
import HasFormatter from "../Interfaces/HasFormater";
import Invoice from "../Classes/Invoice";
import Form from "./Form/Form";
import Wrapper from "./Wrapper/Wrapper";

export const App = (): JSX.Element => {
  const Example = new Invoice(
    ` (To / From -> "Hayk") `,
    ` (Details -> "web developmnet") `,
    ` (Amount -> 200) `
  );

  const [templates, setTemplates]: [
    HasFormatter[],
    Dispatch<SetStateAction<HasFormatter[]>>
  ] = useState([Example]);

  const [status, setStatus]: [string, Dispatch<SetStateAction<string>>] =
    useState("");

  return (
    <>
      <Wrapper templates={templates} />
      <Form
        setTemplates={setTemplates}
        templates={templates}
        setStatus={setStatus}
      />
      <h5>{status}</h5>
    </>
  );
};
