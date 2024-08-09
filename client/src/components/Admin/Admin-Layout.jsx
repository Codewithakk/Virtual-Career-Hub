import { NavLink, Outlet, Navigate } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import { FaHome, FaUser } from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import { useAuth } from '/store/auth';
import Analytics from "../../components/Admin/AdminDashboardChart";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }

    return (
    <>
       
        <div className="d-flex"> {/* Add flex container */}
            <Nav vertical className="mr-auto"> {/* Add mr-auto to push nav to the left */}
                <NavItem>
                    <NavLink to="/admin_dashboard"><FaHome /> Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/admin/users"><FaUser /> Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink>
                </NavItem>
               
            </Nav>
            <div className="d-flex align-items-center justify-content-center flex-grow-1"> {/* Center content */}
            <Analytics/>
                <Outlet />
            </div>
        </div>
    </>
    );
};
