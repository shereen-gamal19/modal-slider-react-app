import React ,{useContext}from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen , closeSidebar} = useContext (AppContext)

  // iterate throw the links 
  return ( 
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar--header'>
        <img src={logo} className='logo' alt='coding addict' />
        {/* to close the side bar we will make a button */}
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes/>
        </button>
      </div>
      <ul className='links'>
        {links.map((link)=>{
          const {id,url,text,icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {/* we can write it as link just we did above or lin or any name  */}
        {social.map((lin)=>{
          const {id,url,icon} = lin
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
