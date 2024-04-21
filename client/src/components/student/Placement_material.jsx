import React, { useState } from 'react';
import '../../elements/Sidebar.css';
import Header from '../../elements/header';
import { NavLink } from 'react-router-dom';
import Placementdata from "../../Placementdata"
function PlacementMaterialPage() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <span className='icon close_icon' onClick={toggleSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <NavLink  to="https://drive.google.com/drive/folders/1SkCOcAS0Kqvuz-MJkkjbFr1GSue6Ms6m?usp=drive_link">
              Placement Material
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/Statistics">
               Placement Statics
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Tech videos
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Trending Tech
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/quiz">
               Quize
            </NavLink>
          </li>
        </ul>
      </aside>
      
      {/* Conditionally render content */}
      <div className={openSidebarToggle ? "content-container-shifted" : "content-container"}>
        {/* Content for Placement Material page */}
        <div className="placement-material-page-content">
           <Placementdata/>
        </div>
      </div>
    </div>
  );
}

export default PlacementMaterialPage;
