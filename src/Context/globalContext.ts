import { createContext, useContext } from "react";
import ChitterClient from "../utils/chitterClient";

// Default values of the context
export const GlobalContext = createContext({
  client: new ChitterClient(),
});

export const useGlobalContext = () => useContext(GlobalContext);
