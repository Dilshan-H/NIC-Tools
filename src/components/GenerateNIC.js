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
  if (!bDay || parseInt(bDay.split("-")[0]) < 1910) {
    return <span className="text-output"></span>;
  }

  bDay = dayjs(bDay);
  if (bDay.isValid()) {
    if (bDay.year() < 1910 || bDay.year() > 9999) {
      //fix?
      return (
        <span className="NIC-output container">
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
        male: bDay.year() + (dateTag + "0 XXXX"),
        female: bDay.year() + (parseInt(dateTag) + 500 + "0 XXXX"),
      };
      oldIDs = {
        male: bDay.year().toString().substring(2) + (dateTag + " XXXX V"),
        female:
          bDay.year().toString().substring(2) +
          (parseInt(dateTag) + 500 + " XXXX V"),
      };
    } else {
      newIDs = {
        male: bDay.year() + (dateTag + "0 XXXX"),
        female: bDay.year() + (parseInt(dateTag) + 500 + "0 XXXX"),
      };
      oldIDs = {};
    }
  } else {
    return <span className="text-output">Invalid date!</span>;
  }

  return (
    <div className="id-output">
      <div className="box male" title="Male" data-aos="fade-left">
        <div className="box-img">
          <span className="icon is-large">
            <ion-icon name="man" size="large"></ion-icon>
          </span>
        </div>
        <div className="box-content">
          <span className="subtitle">{newIDs["male"]}</span>
          <br />
          <span className="subtitle">{oldIDs["male"]}</span>
        </div>
      </div>

      <div className="box female" title="Female" data-aos="fade-right">
        <div className="box-img">
          <span className="icon is-large">
            <ion-icon name="woman" size="large"></ion-icon>
          </span>
        </div>
        <div className="box-content">
          <span className="subtitle">{newIDs["female"]}</span>
          <br />
          <span className="subtitle">{oldIDs["female"]}</span>
        </div>
      </div>
    </div>
  );
};

// const buildNIC = () => {
//   return "";
// };

export default GetNICInfo;
