import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "./Redux/todoSlice";
import styles from "./styles.css";

function CompB() {
  const state = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();
  ////
  let dateCheck = "";
  ///
  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);

  return (
    <>
      {state.value.map((item, index, array) => {
        return (
          <div>
            <div className="op">{item.n}</div>
            <div className="opo">{item.d}</div>
            <div className="oppo">{item.dt}</div>
            <div className="oppo1">
              {item.dt.replace(/-/g, "") === dateCheck ? (
                <p>due date is today</p>
              ) : item.dt.replace(/-/g, "") <= dateCheck ? (
                <p>Due date is passed</p>
              ) : null}
            </div>
            <button
              className="opy"
              onClick={() => {
                dispatch(del({ in: index }));
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CompB;
