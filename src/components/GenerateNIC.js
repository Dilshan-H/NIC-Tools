const dayjs = require("dayjs");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);
const isLeapYear = require("dayjs/plugin/isLeapYear");
dayjs.extend(isLeapYear);

const GetNICInfo = ({ bDay }) => {
  let year,
    dateTag = "";
  let oldIDs,
    newIDs = {};
  if (!bDay) {
    return <span className="text-output"></span>;
  }

  bDay = dayjs(bDay);
  if (bDay.isValid()) {
    if (bDay.year() < 1910 || bDay.year() > 9999) {
      return (
        <span className="text-output">
          Birth year is out of range! - Has to be greater than 1910 &amp; less
          than 9999.
        </span>
      );
    }
    dateTag = bDay.dayOfYear();
    year = bDay.year();
    dateTag = !bDay.isLeapYear() && dateTag > 59 ? ++dateTag : dateTag;
    dateTag =
      dateTag.toString().length < 3
        ? dateTag.toString().padStart(3, "0")
        : dateTag;
    if (year < 2000) {
      newIDs = {
        male: bDay.year() + dateTag + "0XXXX",
        female: bDay.year() + (parseInt(dateTag) + 500 + "0XXXX"),
      };
      oldIDs = {
        male: bDay.year().toString().substring(2) + (dateTag + "XXXX V"),
        female:
          bDay.year().toString().substring(2) +
          (parseInt(dateTag) + 500 + "XXXX V"),
      };
    } else {
      newIDs = {
        male: bDay.year() + (dateTag + "0XXXX"),
        female: bDay.year() + (parseInt(dateTag) + 500 + "0XXXX"),
      };
      oldIDs = {};
    }
  } else {
    return <span className="text-output">Invalid date!</span>;
  }

  return (
    <div>
      {bDay.format("YYYY-MM-DD")},{newIDs["male"]},{newIDs["female"]},
      {oldIDs["male"]},{oldIDs["female"]}
    </div>
  );
};

// const buildNIC = () => {
//   return "";
// };

export default GetNICInfo;
