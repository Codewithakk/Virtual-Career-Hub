import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const {storeTokenInLS}=useAuth();
    const navigate = useNavigate();

    // Function to handle the login form submission.
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login successfully");
            const res_data= await response.json();
           
            if (response.ok) {
                toast.success("Login successfully");
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                
                toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message); 
                            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img
                                    src="src/assets/6310507.jpg"
                                    alt="Let's fill the Login form"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            {/* Login form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email"  className="large-label">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Your email"
                                            id="email"
                                            className="large-input"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password"  className="large-label">Password:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            className="large-input"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
