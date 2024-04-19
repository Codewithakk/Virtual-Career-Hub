import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/company/head'; // Assuming 'Header' component path

import '../../elements/Sidebar.css';

function Company_dashboard() {
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
            <NavLink to="/company/jobs" activeClassName="active-link">
              Job Post
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/company/jobs_view" activeClassName="active-link">Job Posted</NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/company/student_data" activeClassName="active-link">Student Applied</NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="" activeClassName="active-link">Selected Students</NavLink>
          </li>
        </ul>
      </aside>
      
      {/* Conditionally render content */}
      <div className={openSidebarToggle ? "content-container-shifted" : "content-container"}>
      <main id='companycontent'>
        <Outlet />
      </main>
                {/* Content for Outlet */}
      </div>
    </div>
  );
}

export default Company_dashboard;
