import React, {useState, useContext} from "react";


const AppContext = React.createContext();


const AppProvider = ({children})=>{
 const [isModalOpen, setisModalOpen] = useState(false)

 const openModal =()=> {
  setisModalOpen(true)
 }
 const closeModal =()=> {
  setisModalOpen(false)
 }
 return <AppContext.Provider value={{isModalOpen,openModal,closeModal}}>{children}</AppContext.Provider>
}

//Custom hook
export const useGlobalContext =()=>{
 return useContext(AppContext)
}


export {AppContext, AppProvider}