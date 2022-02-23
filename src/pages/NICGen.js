import { useState } from "react";

const NICGen = () => {
  const [inputText, setInputText] = useState("");
  const processText = (event) => {
    setInputText(event.target.value);
  };
};

export default NICGen;
