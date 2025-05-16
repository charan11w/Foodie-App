import { createContext, useContext } from "react";
import useHeader from "../hooks/useHeader";

const HeaderContext=createContext();

export const HeaderProvider=({children}) =>{
  const headerControls=useHeader();

  return(
    <HeaderContext.Provider value={headerControls}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext=() => useContext(HeaderContext);