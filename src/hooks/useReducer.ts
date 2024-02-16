import { useContext } from "react";
import { SpecModule } from "../moduls";

function UseReduce() {
  return useContext(SpecModule.Context);
}

export default UseReduce;
