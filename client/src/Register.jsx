// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {useAuth} from "../store/auth";
// import { toast } from "react-toastify";

// export default function Register() {
//     const [user, setUser] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         password: "",
//     });
    
//     const navigate = useNavigate();
//     const {storeTokenInLS}=useAuth();
//     // Function to handle the input
//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     // Handle the form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/api/auth/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json", 
//                 },
//                 body: JSON.stringify(user),
//             });

//            const res_data=await response.json();
//            console.log("res from server",res_data.extraDetails);

//             if (response.ok) {
//                 // const res_data= await response.json();
//                 // console.log('res from server',res_data.message);;
//                 toast.success("Register successfully");
//                 storeTokenInLS(res_data.token);
//                 setUser({ username: "", email: "", phone: "", password: "" });
//                 navigate("/");
//             } else {
//                 toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message);
                
//             }
//         } catch (error) {
//             console.error("Error in Register page:", error);
//         }
//     };

//     return (
//         <section>
//             <main>
//                 <div className="section-registration">
//                     <div className="container grid grid-two-cols">
//                         <div className="registration-image">
//                             <img src="src/assets/20943447.jpg" alt="Loading registration" />
//                         </div>
//                         {/* Registration form */}
//                         <div className="registration-form">
//                             <h1 className="main-heading mb-3">Registration</h1>
//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label htmlFor="username">Username:</label>
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         placeholder="Username"
//                                         id="username"
//                                         required
//                                         autoComplete="off"
//                                         value={user.username}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email">Email:</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Enter Your email"
//                                         id="email"
//                                         required
//                                         autoComplete="off"
//                                         value={user.email}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="phone">Phone:</label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         placeholder="Phone"
//                                         id="phone"
//                                         required
//                                         autoComplete="off"
//                                         value={user.phone}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="password">Password:</label>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         id="password"
//                                         required
//                                         autoComplete="off"
//                                         value={user.password}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
//                                 <button type="submit" className="btn btn-submit">
//                                     Register Now
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </section>
//     );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export default function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        role: "student", // Default role is set to "student"
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    // Function to handle the input  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const resData = await response.json();
                toast.success("Register successfully");
                storeTokenInLS(resData.token);
                setUser({ username: "", email: "", phone: "", password: "", role: "student" });
                navigate("/");
            } else {
                const errorData = await response.json();
                toast.error(errorData.extraDetails || "Registration failed");
            }
        } catch (error) {
            console.error("Error in Register page:", error);
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="src/assets/20943447.jpg" alt="Loading registration" />
                        </div>
                        {/* Registration form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username" className="large-label">Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleChange}
                                        className="large-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="large-label">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleChange}
                                        className="large-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="large-label">Phone:</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleChange}
                                        className="large-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="large-label">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleChange}
                                        className="large-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role" className="large-label">Role:</label>
                                    <select
                                        className="Role large-input"
                                        name="role"
                                        id="role"
                                        value={user.role}
                                        onChange={handleChange}
                                    >
                                        <option value="student">Student</option>
                                        <option value="admin">Admin</option>
                                        <option value="company">Company</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
