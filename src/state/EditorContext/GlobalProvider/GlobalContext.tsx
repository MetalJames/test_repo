import { createContext } from "react";
import { GlobalContextType } from "./GlobalProvider";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);