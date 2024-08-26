import React from "react";
import { useReducer } from "react";

const UseReducer2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "changeName": {
        return {
          name: action.newName,
          age: state.age,
        };
      }

      case "age_increase": {
        return {
          age: state.age + 1,
          name: state.name,
        };
      }

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { name: "Asil", age: 20 });

  const handleChange = (e) => {
    dispatch({ type: "changeName", newName: e.target.value });
  };

  const handleAge = () => {
    dispatch({ type: "age_increase" });
  };

  return (
    <div>
      <input type='text' value={state.name} onChange={handleChange} />
      <p>
        Age is {state.age} New name is {state.name}
      </p>
      <button onClick={handleAge}>Click</button>
    </div>
  );
};

export default UseReducer2;
