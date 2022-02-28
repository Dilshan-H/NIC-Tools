import { useState } from "react";
import GetNICInfo from "../components/GetNICInfo";
import "./NICInfo.scss";

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
    <div className="NIC-input container" data-aos="flip-up">
      <div className="field">
        <label className="label">Your NIC number:</label>
        <div className="control">
          <input
            type="text"
            className="input is-primary is-rounded"
            aria-label="Input NIC Number:"
            placeholder="Input your NIC number"
            onChange={addInputText}
            maxLength={12}
            required
            autoFocus
          />
        </div>
        <p className="help">Input your Identity Card number here</p>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Province Code:</label>
          <div className="select is-primary is-rounded">
            <select
              value={inputPId}
              className="event-year-list"
              onChange={addInputPId}
              required
            >
              <option id="unknown" className="p-id" value="-">
                -
              </option>
              {[...Array(9).keys()].map((id, index) => (
                <option key={index} className="p-id" value={++id}>
                  {id}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="help">
          This is the number marked in the front side of ID card
        </p>
      </div>

      <div className="control">
        <button
          className="button is-primary"
          onClick={handleClick}
          disabled={!inputText}
        >
          Submit
        </button>
      </div>

      <GetNICInfo nic={NIC} pId={inputPId} />
    </div>
  );
};

export default NICInfo;
