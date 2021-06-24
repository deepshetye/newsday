import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
import './header.css';
import { IconContext } from 'react-icons';
import { BiMenu, BiX } from "react-icons/bi";

const Header = ({setCategory}) => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <div to='#' className='menu-bars'>
              <BiMenu onClick={showSidebar}/>
            </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <div to='#' className='menu-bars' >
                  <BiX />
                </div>
              </li>
              <div className="news_category_list">
                <button onClick={ () => setCategory("Business") } >Business</button>
                <button onClick={ () => setCategory("Entertainment") } >Entertainment</button>
                <button onClick={ () => setCategory("General") } >General</button>
                <button onClick={ () => setCategory("Health") } >Health</button>
                <button onClick={ () => setCategory("Science") } >Science</button>
                <button onClick={ () => setCategory("Sports") } >Sports</button>
                <button onClick={ () => setCategory("Technology") } >Technology</button>
            </div>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }

export default Header
