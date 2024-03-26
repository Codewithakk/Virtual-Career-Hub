import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
export default function Company_dashboard(){
    return(
        <div className="d-flex"> {/* Add flex container */}
        <Nav vertical className="mr-auto"> {/* Add mr-auto to push nav to the left */}
            <NavItem>
                <NavLink to="/company/jobs">Post Job</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/company/jobs_view"> Job Posted</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/company/student_data">Student Data</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/company/JobDetailsPage">Job post2</NavLink>
            </NavItem>
        </Nav>
        <div className="d-flex align-items-center justify-content-center flex-grow-1"> {/* Center content */}
            <Outlet />
        </div>
    </div>
    );
}
{/* <li> <NavLink to="/CompanyJobPostPage">Job_Post</NavLink></li>
<li><NavLink to="/CompanyStudentManagementPage">Student_Details</NavLink></li>
<li><NavLink to="/JobDetailsPage">Job_Post</NavLink></li>
<li><NavLink to="/JobPostings">Job_Post</NavLink></li> */}