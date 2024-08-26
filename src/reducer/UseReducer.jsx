import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const handleClick = () => {
    dispatch({ type: "incremented_age" });
  };//2nd

  const reducer = (state, action) => {

    if (action.type === "incremented_age") {
      return {
        age: state.age + 1,
      };
    }
    throw Error("Unknown action.");
  };//3rd

  const [state, dispatch] = useReducer(reducer, { age: 20 });//1st

  return (
    <div className='container p-40'>
      <h1>Hello Your age is {state.age}</h1>
      <button className='bg-white py-1 px-3 ' onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default UseReducer;
