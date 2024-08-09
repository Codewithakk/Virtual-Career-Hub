import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import { useAuth } from '../../store/auth';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Dropdown, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'; 

function Navbars(args) {
    const [isOpen, setIsOpen] = useState(true);
    const [dropdownOpen1, setDropdownOpen1] = useState(false); // State for first dropdown
    const [dropdownOpen2, setDropdownOpen2] = useState(false); // State for second dropdown

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown1 = () => setDropdownOpen1(!dropdownOpen1); // Toggle first dropdown
    const toggleDropdown2 = () => setDropdownOpen2(!dropdownOpen2); // Toggle second dropdown

    const { isLoggedIn, userRole } = useAuth();

    const navItemStyle = {
        fontSize: '1.8rem',
        color: '#007bff'
    };
    const navbarStyle = {
        top: 0,
        width: '100%', 
    };

    const handleDropdown1Enter = () => {
        setDropdownOpen1(true);
    };

    const handleDropdown1Leave = () => {
        setDropdownOpen1(false);
    };

    const handleDropdown2Enter = () => {
        setDropdownOpen2(true);
    };

    const handleDropdown2Leave = () => {
        setDropdownOpen2(false);
    };

    return (
        <div className='main-navbar'>
            <Navbar
                color='faded'
                light
                expand='sm'
                fixed=''
                style={navbarStyle}
            >
                <NavbarBrand tag={ReactLink} to="/">
                    <img src="src/assets/_5f53aa6c-cf2b-4317-acfd-95766342c78f.jpeg" alt="logo loading" height='100px' width='100px'/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" id='navBar' navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/" style={navItemStyle}>Home</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about" style={navItemStyle}>About</NavLink>
                        </NavItem>
                        {userRole === "company" && isLoggedIn && (
                            <>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/company" style={navItemStyle}>Company Dashboard</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/calendar" style={navItemStyle}>Calendar</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/contact" style={navItemStyle}>Contact</NavLink>
                                </NavItem>
                            </>
                        )}
                        {userRole === "admin" && (
                            <>
                                {/* <NavItem>
                                    <NavLink tag={ReactLink} to="/admin" style={navItemStyle}>Admin Dashboard</NavLink>
                                </NavItem> */}
                                 <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1} onMouseEnter={handleDropdown1Enter} onMouseLeave={handleDropdown1Leave}>
                                    <DropdownToggle tag={NavLink} caret style={navItemStyle}>
                                        Admin Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={ReactLink} to="/admin">Admin Profile</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/users">Users</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/contacts">Contacts</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/team_add" style={navItemStyle}>Team_Add</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/calendar" style={navItemStyle}>Calendar</NavLink>
                                </NavItem>
                            </>
                        )}
                        {userRole === "student" && isLoggedIn && (
                            <>
                                <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1} onMouseEnter={handleDropdown1Enter} onMouseLeave={handleDropdown1Leave}>
                                    <DropdownToggle tag={NavLink} caret style={navItemStyle}>
                                        Student Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={ReactLink} to="/profile">Profile</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/registration">Registration</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/events">Events</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/placement_material">Placement Related</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/feedback">Feddback</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown isOpen={dropdownOpen2} toggle={toggleDropdown2} onMouseEnter={handleDropdown2Enter} onMouseLeave={handleDropdown2Leave}>
                                    <DropdownToggle tag={NavLink} caret style={navItemStyle}>
                                        Job Portal
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={ReactLink} to="/job_portal">On-Campus</DropdownItem>
                                        <DropdownItem tag={ReactLink} to="/jobspage">Off-Campus</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/resume_builder" style={navItemStyle}>Resume-Builder</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/contact" style={navItemStyle}>Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/notifications" style={navItemStyle}><IoMdNotifications /></NavLink>
                                </NavItem>
                            </>
                        )}
                        {isLoggedIn ? (
                       <div className="right-nav">
                       <ul>
                        <li>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/team" style={navItemStyle}>Team</NavLink>
                        </NavItem>

                        </li>
                       <li>

                        <NavItem>
                            <NavLink tag={ReactLink} to="/procedure" style={navItemStyle}>Procedure</NavLink>
                        </NavItem>
                       </li>
                       <li>
                        <NavLink tag={ReactLink} to="/logout" style={navItemStyle}>Logout</NavLink>
                        </li>
                        </ul>
                       </div>
                        ) : (
                            <>
                                <NavLink tag={ReactLink} to="/register" style={navItemStyle}>Register</NavLink>
                                <NavLink tag={ReactLink} to="/login" style={navItemStyle}>Login</NavLink>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbars;
