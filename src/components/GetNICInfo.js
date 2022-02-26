const dayjs = require("dayjs");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);
const isLeapYear = require("dayjs/plugin/isLeapYear");
dayjs.extend(isLeapYear);

const GetNICInfo = ({ nic, pId }) => {
  if (!nic) {
    return <span className="text-output"></span>;
  }

  const nicNum = nic.match(/\d{9}[vVxX]|\d{12}/); // 199847648124 | 487694781V

  return (
    <span className="error-output">
      {nicNum ? ProcessNIC(nicNum[0], pId) : "Not a valid NIC number!"}
      <br />
    </span>
  );
};

const ProcessNIC = (nicNum, pId) => {
  let bDay,
    nicType,
    gender,
    dateTag,
    year,
    age,
    isValid,
    isLeap,
    province = "";

  const verifyNIC = (tag, isLeap, year) => {
    if (!isLeap && (tag === 60 || tag === 560)) {
      return "Discrepancy in birth date (February, 29) - Not a leap year!";
    } else if (tag === 0 || tag > 866) {
      return "Discrepancy in birth date - Birth date not within the range!";
    } else if (year < 1910) {
      return "Discrepancy in birth year - Has to be greater than 1910";
    } else {
      return "valid";
    }
  };

  const getBDay = (gender, year, tag, isLeap) => {
    if (gender === "Female") {
      const diff = !isLeap && tag > 559 ? 501 : 500;
      const tmpDate = dayjs(year + "-01-01")
        .dayOfYear(tag - diff)
        .format("YYYY-MM-DD");
      return tmpDate;
    } else {
      const diff = !isLeap && tag > 59 ? 1 : 0;
      const tmpDate = dayjs(year + "-01-01")
        .dayOfYear(tag - diff)
        .format("YYYY-MM-DD");
      return tmpDate;
    }
  };

  const getAge = (bDay) => {
    const now = dayjs();
    const years = now.diff(bDay, "y");
    const months = now.diff(bDay, "M");
    const days = now.diff(bDay, "d");
    return { years, months, days };
  };

  const getGender = (tag) => {
    return tag > 500 ? "Female" : "Male";
  };

  const getProvince = (id) => {
    switch (parseInt(id)) {
      case 1:
        return "Western"
      case 2:
        return "Central"
      case 3:
        return "Southern"
      case 4:
        return "Northern"
      case 5:
        return "Eastern"
      case 6:
        return "North Western"
      case 7:
        return "North Central"
      case 8:
        return "Uva"
      case 9:
        return "Sabaragamuwa"
      default:
        return "Unknown";
    }
  };

  nicNum.length === 10 ? (nicType = "Old") : (nicType = "New");
  if (nicType === "Old") {
    dateTag = parseInt(nicNum.substring(2, 5));
    year = "19" + nicNum.substring(0, 2);
    isLeap = dayjs(year + "-01-01").isLeapYear();
    isValid = verifyNIC(dateTag, isLeap, year);
    gender = getGender(dateTag);
    bDay = getBDay(gender, year, dateTag, isLeap);
    age = getAge(bDay);
  }

  if (nicType === "New") {
    dateTag = parseInt(nicNum.substring(4, 7));
    year = nicNum.substring(0, 4);
    isLeap = dayjs(year + "-01-01").isLeapYear();
    isValid = verifyNIC(dateTag, isLeap, year);
    gender = getGender(dateTag);
    bDay = getBDay(gender, year, dateTag, isLeap);
    age = getAge(bDay);
  }

  if (pId) {
    province = getProvince(pId);
    province += (province !== "Unknown") ? " Province" : "";
  }

  return (
    <div>
      {isValid === "valid" ? (
        <div className="NIC-output">
          <div className="NIC-number">NIC Number: {nicNum}</div>
          <div className="NIC-type">NIC Type: {nicType}</div>
          <div className="BDay-year">Year: {bDay.split("-")[0]}</div>
          <div className="BDay-month">Month: {bDay.split("-")[1]}</div>
          <div className="BDay-day">Day: {bDay.split("-")[2]}</div>
          <div className="Age">Age: {age['years']}</div>
          <div className="Province">Province: {province}</div>
        </div>
      ) : (
        <div className="NIC-output">
          Malformed NIC number! <br />
          {isValid}
        </div>
      )}
    </div>
  );
};

export default GetNICInfo;
