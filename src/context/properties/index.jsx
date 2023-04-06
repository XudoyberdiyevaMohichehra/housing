// import { createContext, useReducer } from "react";
// import { reduser } from "./reduser";

// const Property = createContext();

// const PropertyContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reduser, [])
//   return (<Property.Provider>{children}</Property.Provider>)
// }
// export default PropertyContext


import { createContext, useReducer } from "react";
import {reducer}  from "./reduser";


export const PropertiesContext = createContext();
const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;