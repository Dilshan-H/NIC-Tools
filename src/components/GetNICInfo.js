const dayjs = require("dayjs");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);
const isLeapYear = require('dayjs/plugin/isLeapYear')
dayjs.extend(isLeapYear)

const GetNICInfo = ({ nic }) => {
  if (!nic) {
    return <span className="text-output"></span>;
  }

  const nicNum = nic.match(/\d{9}[vVxX]|\d{12}/); // 199847648124 | 487694781V

  return (
    <span className="text-output">
      {nicNum ? ProcessNIC(nicNum[0]) : "Not a valid NIC number!"}
      <br />
    </span>
  );
};

const ProcessNIC = (nicNum) => {
  let message,
    bDay,
    nicType,
    gender,
    dateTag,
    year,
    isValid,
    isLeap = "";
  console.log("Process", nicNum);

  const verifyNIC = (tag, year, isLeap) => {
    if ((!isLeap && (tag == 60 || tag == 560)) || (tag == 0 || tag > 866)){
      return "Malformed NIC!"
    }
  }

  const getBDay = (gender, year, tag, isLeap) => {
    console.log("Working");
    if (gender === "Female") {
      const diff = !isLeap && tag > 559 ? 501 : 500; 
      const tmpDate = dayjs(year + "-01-01").dayOfYear(tag - diff).format('DD-MM-YYYY');
      return(tmpDate);
    } else {
      const diff = !isLeap && tag > 59 ? 1 : 0; 
      const tmpDate = dayjs(year + "-01-01").dayOfYear(tag - diff).format('DD-MM-YYYY');
      return(tmpDate);
    }
  };

  const getGender = (tag) => {
    return tag > 500 ? "Female" : "Male";
  };

  nicNum.length === 10 ? (nicType = "old") : (nicType = "new");
  if (nicType === "old") {
    dateTag = parseInt(nicNum.substring(2, 5));
    year = "19" + nicNum.substring(0, 2);
    isLeap = dayjs(year + '-01-01').isLeapYear();
    isValid = verifyNIC(dateTag, year, isLeap)
    gender = getGender(dateTag);
    bDay = getBDay(gender, year, dateTag, isLeap);
  }

  if (nicType === "new") {
    dateTag = parseInt(nicNum.substring(4, 7));
    year = nicNum.substring(0, 4);
    isLeap = dayjs(year + '-01-01').isLeapYear();
    isValid = verifyNIC(dateTag, year, isLeap)
    gender = getGender(dateTag);
    bDay = getBDay(gender, year, dateTag, isLeap);
  }

  return (
    <div>
      -- DONE -- 
      {dateTag},
      {nicType},
      {year},
      {gender},
      {bDay},
      {isLeap}
    </div>
  );
};

export default GetNICInfo;
