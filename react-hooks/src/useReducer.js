import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setInput":
      return { ...state, count: Number(action.payload) };
    case "reset":
      return { ...state, count: 0 };
    default:
      throw new Error("Not an valid action");
  }
};

const ACTION = {
  INCREMENT_COUNTER: "increment",
  DECREMENT_COUNTER: "decrement",
  SET_USER_INPUT: "setInput",
  RESET_COUNTER: "reset",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: ACTION.INCREMENT_COUNTER });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.DECREMENT_COUNTER });
        }}
      >
        -
      </button>
      <input
        type="number"
        value={state.count}
        onChange={(e) => {
          dispatch({ type: ACTION.SET_USER_INPUT, payload: e.target.value });
        }}
      />
      <input
        type="button"
        value="reset"
        onClick={() => {
          dispatch({ type: ACTION.RESET_COUNTER });
        }}
      />
    </div>
  );
};

export default Reducer;
