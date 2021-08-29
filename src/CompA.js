import React from "react";
import { useState } from "react";
import { add } from "./Redux/todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./styles.css";

function CompA() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  // const state = useSelector((state) => state.todoSlice);

  return (
    <>
      <div className="task">
        <input
          placeholder="task here"
          onChange={(event) => setName(event.target.value)}
          type="text"
        />

        <input
          placeholder="description here"
          onChange={(event) => setDesc(event.target.value)}
          type="text"
        />

        <input onChange={(event) => setDate(event.target.value)} type="date" />
      </div>

      <div>
        {/* <button style={{color:"red",fontSize:"15px",width:"90px",background:"yellow"}} className='plus' */}
        <button
          className="plus"
          onClick={() => {
            dispatch(add({ n: name, d: desc, dt: date }));
          }}
        >
          ADD HERE
        </button>
      </div>
    </>
  );
}

export default CompA;
