import { useState } from "react";
import GenerateNIC from "../components/GenerateNIC";

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
    <div className="nic-gen">
      <div className="input">
        <div className="input-date">
          <input type="date" value={inputDate} onChange={processDate} />
        </div>
        {/* <div className="input-submit">
          <button onClick={handleClick} disabled={!inputDate}>
            Submit
          </button>
        </div> */}
      </div>

      <div className="output">
        <GenerateNIC bDay={inputDate}/>
      </div>
    </div>
  );
};

export default NICGen;
