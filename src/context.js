import React, { useState, useContext } from 'react'

const AppContext = React.createContext()
// we must pass the children as a prop otherwise we won't see any compnent 
const AppProvider = ({children}) => {
    // state values , one for modal and one for sidebar
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const [isModalOpen , setIsModalrOpen] = useState(false)

    const openSidebar = () =>{
        setIsSidebarOpen (true)
    }
    const closeSidebar = () =>{
        setIsSidebarOpen (false)
    }
    const openModal = () =>{
        setIsModalrOpen (true)
    }
    const closeModal = () =>{
        setIsModalrOpen (false)
    }


// in the value we will pass the two state values because depending on these values we will toggle the sidebar and the modal
    return <AppContext.Provider value ={{
        isModalOpen ,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
    }}>{children}</AppContext.Provider>

}

// custom hook another method instead of using useContext
// we must put use to refer to custom hook
// export const useGlobalContext = () =>{
//   return useGlobalContext(AppContext)
//} 
export {AppContext,AppProvider}