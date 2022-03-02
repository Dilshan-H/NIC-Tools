import { useState } from "react";
import GenerateNIC from "../components/GenerateNIC";
import "./NICGen.scss";

const NICGen = () => {
  const [inputDate, setInputDate] = useState("");

  const processDate = (event) => {
    setInputDate(event.target.value);
  };

  // const handleClick = () => {
  //   // let date = inputDate.replace(/\s+/g, "");
  //   //setNIC(NICText.substring(0, 12));
  // };

  return (
    <div className="nic-gen container">
      <div className="field">
        <label className="label">Select your birthday:</label>
        <div className="control">
            <input
              type="date"
              title="Select your birthday"
              value={inputDate}
              onChange={processDate}
              min="1910-01-01"
              max="9999-12-31"
              required
            />
        </div>
        <p className="help">Select the birthday that you need to Generate NIC number</p>
      </div>

      <div className="output">
        <GenerateNIC bDay={inputDate} />
      </div>
    </div>
  );
};

export default NICGen;
