import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "/store/auth";

export default function AdminUpdate() {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    useEffect(() => {
        getSingleUserData();
    }, []);

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });
            const userData = await response.json();
            console.log(`User data:`, userData);
            setData(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your update logic here
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update User Data</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">UserName:</label>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Mobile number:</label>
                                <input type="phone"
                                    name="phone"
                                    id="phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <button className="btn" type="submit">Update</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
}
