import React from "react";
import { Context } from ".";
import { reducer, specializations } from "./store";
import { IDispatch, IEntity } from "./types";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer<IEntity.Specialization[] | any>(
    reducer,
    specializations
  );

  return (
    // @ts-ignore
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Container;
