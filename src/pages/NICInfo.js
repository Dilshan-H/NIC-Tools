import { useState } from "react";
import GetNICInfo from "../components/GetNICInfo";

const NICInfo = () => {
  const [inputText, setInputText] = useState("");
  const [NIC, setNIC] = useState("");
  const addInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    let NICText = inputText.replace(/\s+/g, "");
    setNIC(NICText.substring(0, 12));
  };

  return (
    <div className="NIC-input">
      <p>Enter your NIC number: </p>
      <input
        type="text"
        id="input"
        className="text-input"
        aria-label="Input NIC Number:"
        placeholder="Input your NIC number"
        onChange={addInputText}
        maxLength={12}
      />
      <br />

      <GetNICInfo nic={NIC} />

      <br />
      <button onClick={handleClick} disabled={!inputText}>
        Submit
      </button>
    </div>
  );
};

export default NICInfo;
