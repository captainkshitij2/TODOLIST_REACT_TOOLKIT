import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "./Redux/todoSlice";
import styles from './styles.css'

function CompB() {
  const state = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();

  return (
    <>
      {state.value.map((item, index, array) => {
        return (
          <div>
            <div className='op'>{item.n}</div>
            <div className='opo'>{item.d}</div>
            <div className='oppo'>{item.dt}</div>
            <div></div>
            <button className='opy'
              onClick={() => {dispatch(del({ in: index })
              );}} >

              delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CompB;
