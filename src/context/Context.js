import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../store/store.js";

export const StateContext = createContext({});

const StateContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
