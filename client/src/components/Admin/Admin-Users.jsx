import { useState, useEffect } from "react";
import { useAuth } from "/store/auth";
// import { Link } from "react-router-dom";
import Btnn from "../../elements/btn";
import EditButton from "../../elements/Edit_btn";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch users data");
            } 

            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users data:", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log('Delete user status', data);
            getAllUsersData();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser) => (
                            <tr key={curUser._id}>
                                <td>{curUser.username}</td>
                                <td>{curUser.email}</td>
                                <td>{curUser.phone}</td>
                                <td>
                                    {/* <Link to={`/admin/users/${curUser._id}/edit`}>EDIT</Link> */}
                                    <EditButton to={`/admin/users/${curUser._id}/edit`}/>

                                </td>
                                <td>
                                <Btnn onClick={() => deleteUser(curUser._id)}>DELETE</Btnn>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
