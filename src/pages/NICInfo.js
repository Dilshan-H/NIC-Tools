import { useState } from "react";
import GetNICInfo from "../components/GetNICInfo";

const NICInfo = () => {
  const [inputText, setInputText] = useState("");
  const [inputPId, setInputPId] = useState("");
  const [NIC, setNIC] = useState("");

  const addInputText = (event) => {
    setInputText(event.target.value);
  };

  const addInputPId = (event) => {
    setInputPId(event.target.value);
  };

  const handleClick = () => {
    let NICText = inputText.replace(/\s+/g, "");
    setNIC(NICText.substring(0, 12));
  };

  return (
    <div className="nic-info">
      <p>Enter your NIC number: </p>
      <input
        type="text"
        id="input"
        className="text-input"
        aria-label="Input NIC Number:"
        placeholder="Input your NIC number"
        onChange={addInputText}
        maxLength={12}
        required
      />
      <br />

      <select
        value={inputPId}
        className="event-year-list"
        onChange={addInputPId}
        required
      >
        <option id="unknown" className="p-id" value="-">
          -
        </option>
        {[...Array(10).keys()].map((id, index) => (
          <option key={index} className="p-id" value={++id}>
            {id}
          </option>
        ))}
      </select>

      <br />
      <button onClick={handleClick} disabled={!inputText}>
        Submit
      </button>

      <div className="output">
        <GetNICInfo nic={NIC} pId={inputPId} />
      </div>
    </div>
  );
};

export default NICInfo;
