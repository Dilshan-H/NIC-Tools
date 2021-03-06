import { useState } from "react";
import GenerateNIC from "../components/GenerateNIC";
import "./NICGen.scss";

const NICGen = () => {
  const [inputDate, setInputDate] = useState("");

  const processDate = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <div id="NIC-gen" className="nic-gen container" data-aos="flip-up">
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
        <p className="help">
          Select the birthday that you need to Generate NIC number
        </p>
      </div>

      <div className="output">
        <GenerateNIC bDay={inputDate} />
      </div>
    </div>
  );
};

export default NICGen;
