// import { useState } from "react";
// import { useAuth } from "../store/auth";
// import { toast } from "react-toastify";
// //import contactForm from "../server/contollers/contact-controller";
// const defaultContactFormData={
//     username:"",
//     email:"",
//     message:"",
// };
// export default function Contact()
// {
//     const[contact,setContact]=useState(defaultContactFormData);

//     const [userData,setUserData]=useState(true);
//     const{user}=useAuth();
//     if(userData && user){
//         setContact({
//             username:user.username,
//             email:user.email,
//             message:"",
//         });

//         setUserData(false);
//     }
//  //Function to handleinput
//     const handleInput=(e)=>{
//         const name=e.target.name;
//         const value=e.target.value;

//         setContact({
//             ...contact,
//             [name]: value,
//         });

//         // setContact((prev)=>({
//         //     ...prev,
//         //     [name]:value,
//         // }));
//     };

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/form/contact", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//             console.log("Message sended", response);
//         if(response.ok){
//             setContact(defaultContactFormData);
//             toast.success("Message Sent Successfully");
//         }
//     }
//         catch(error){
//             console.log(error);
//         }
//     }
//     return(
//         <>
//         <section className="section-contact">
//             <div className="contact-content container">
//                 <h1 className="main-heading">contact us</h1>
//             </div>
//             {/* Contact Form */}
//             <div className="container grid grid-two-cols">
//                 <div className="contact-img">
//                     <img src="src/assets/5124556.jpg" alt="Always ready to Help" />
//                 </div>
//                 {/*Contact form content */}
//                 <section className="section-form">
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="username">UserName:</label>
//                             <input type="text" 
//                             name="username" 
//                             id="username" 
//                             autoComplete="off"
//                             value={contact.username}
//                             onChange={handleInput}
//                             required
//                             />
                        
//                         </div>
//                         <div>
//                             <label htmlFor="email">Email:</label>
//                             <input type="email" 
//                             name="email" 
//                             id="email" 
//                             autoComplete="off"
//                             value={contact.email}
//                             onChange={handleInput}
//                             required
//                             />
//                             <div>
//                                 <label htmlFor="message">Message</label>
//                                 <textarea 
//                                 name="message" 
//                                 id="message" 
//                                 value={contact.message}
//                                 onChange={handleInput}
//                                 cols="30" rows="10"
//                                 autoComplete="off"
//                                 required>

//                                 </textarea>
//                             </div>
//                         <div>
//                             <button className="btn" type="submit">submit</button>
//                         </div>
//                      </div>
//                   </form>
//                 </section>
//             </div>
//             <section className="mb-3">

//             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14237.87885482682!2d80.9427798!3d26.8568138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a819131cb%3A0x11553d04f3a32d9c!2sNational%20Post%20Graduate%20College!5e0!3m2!1sen!2sin!4v1707143770992!5m2!1sen!2sin" 
//             width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </section>
//         </section>
//         </>
//     );
// }


import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

export default function Contact() {
    const [contact, setContact] = useState(defaultContactFormData);
    const { user } = useAuth();

    // Set initial contact data if user exists
    if (user && Object.keys(contact).every(key => contact[key] === "")) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            console.log("Message sent", response);
            if (response.ok) {
                setContact(defaultContactFormData);
                toast.success("Message Sent Successfully");
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message");
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="src/assets/5124556.jpg" alt="Always ready to Help" />
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">UserName:</label>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
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
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={contact.message}
                                    onChange={handleInput}
                                    cols="30"
                                    rows="10"
                                    autoComplete="off"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
                <section className="mb-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14237.87885482682!2d80.9427798!3d26.8568138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a819131cb%3A0x11553d04f3a32d9c!2sNational%20Post%20Graduate%20College!5e0!3m2!1sen!2sin!4v1707143770992!5m2!1sen!2sin"
                        width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
        </>
    );
}
