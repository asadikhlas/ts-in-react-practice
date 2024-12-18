import React, { useReducer } from "react";

// Step 1: Define the types for state and action
type CounterState = {
  count: number;
};

type CounterAction = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
  payload?: number;
};

// Step 2: Define the initial state
const initialState: CounterState = { count: 0 };

// Step 3: Define the reducer function with proper types
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + (action.payload ?? 1) };
    case "DECREMENT":
      return { count: state.count - (action.payload ?? 1) };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  // Step 4: Use the useReducer hook with state and action types
  const [state, dispatch] = useReducer<
    React.Reducer<CounterState, CounterAction>
  >(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
