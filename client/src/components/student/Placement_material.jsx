// import React from 'react';
// import { NavLink} from "react-router-dom";
// import { NavItem } from 'reactstrap';

// const PlacementMaterialPage = () => {
//   const navItemStyle = {
//     width: '10%',
//     // Add any additional styles as needed
//   };

//   return (
//     <div className="placement-material-page">
//       <h1>Placement Material</h1>
//                 <NavItem>
//                   <NavLink to="https://drive.google.com/drive/folders/1SkCOcAS0Kqvuz-MJkkjbFr1GSue6Ms6m?usp=drive_link"> Placement Data</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/admin/users">Users</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/admin/contacts">Contacts</NavLink>
//                 </NavItem>
//     </div>
//   );
// };

// export default PlacementMaterialPage;
import React, { useState } from 'react';
import '../../elements/Sidebar.css';
import Header from '../../elements/header';
import { NavLink } from 'react-router-dom';

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
          {/* <div className='sidebar-brand'>
            <BsCart3 className='icon_header' /> Placement Data
          </div> */}
          <span className='icon close_icon' onClick={toggleSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <NavLink  to="https://drive.google.com/drive/folders/1SkCOcAS0Kqvuz-MJkkjbFr1GSue6Ms6m?usp=drive_link">
              Placement Material
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Placement Data
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Links 2
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Links 3
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="">
               Links 4
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default PlacementMaterialPage;
