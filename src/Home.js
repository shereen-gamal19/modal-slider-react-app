import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'
// follow another method custom hook
// import { AppContext ,useGlobalContext } from './context'

const Home = () => {
  // we will grab the two fn to open the modal and the side bar 
  const {openSidebar , openModal} = useContext (AppContext)
// follow another method custom hook
  //   const data = useGlobalContext

  //console.log(data)
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>  
        <FaBars/>
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
