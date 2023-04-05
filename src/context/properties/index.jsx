import { createContext, useReducer } from "react";
import { reduser } from "./reduser";

const Property = createContext();

const PropertyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, [])
  return (<Property.Provider>{children}</Property.Provider>)
}
export default PropertyContext