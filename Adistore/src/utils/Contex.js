import { createContext ,useState} from "react";
export const Context = createContext();
const ApppContext = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
export default ApppContext;
