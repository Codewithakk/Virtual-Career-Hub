// import { useEffect, useState } from "react";
// import { useAuth } from "/store/auth";
// import { toast } from "react-toastify";


// export const AdminContacts=()=>{
//     const [contactData,setContactData]=useState([])
//     const {authorizationToken}=useAuth();
//     const getContactsData=async()=>{
//         try {
//             const response=await fetch("http://localhost:5000/api/admin/contacts",{
//                 method:"GET",
//                 headers:{
//                     Authorization:authorizationToken,
//                 },
//             });
//             const data=await response.json();
//             console.log("contact data",data);
//             if(response.ok){
//                 setContactData(data);
//             }
//         } catch (error) {
//             console.log(error);

//         }

//     };
//     const deleteContactById=async()=>{
//         try {
//             const response=await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
//                 method:"DELETE",
//                 headers:{
//                     Authorization:authorizationToken,
//                 },
//                 body:JSON.stringify(data),
//             });
            
//             if(response.ok){
//                 toast.success("Deleted successfully");
//             }
//             else{
//                 toast.error("Not Deleted");
//             }
//         } catch (error) {
//             console.log(error);

//         }
//     }
//     useEffect(()=>{
//         getContactsData();
//     },[]);

//     return(
//         <>
//         <section className="admin-contacts-section">
//             <h1>Admin Contact data</h1>
//             <div className="container admin-users">
//             {contactData.map((curContactData,index)=>{
//                 const{username,email,message,_id} = curContactData;
//             return (
//                 <div key={index}>
//                     <p>{username}</p>
//                     <p>{email}</p>
//                     <p>{message}</p>
//                     <button className="btn" onClick={()=>deleteContactById
//                     (_id)}>delete</button>
//                 </div>
//             );
//             })}
//             </div>
//         </section>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import { useAuth } from "/store/auth";
import { toast } from "react-toastify";
import Btnn from "../../elements/btn";

export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();

    const getContactsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("contact data", data);
            if (response.ok) {
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContactById = async (id) => { 
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                toast.success("Deleted successfully");
                // Refresh contact data after deletion
                getContactsData();
            } else {
                toast.error("Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <>
            <section className="admin-contacts-section">
                <div className="Card">
                    {contactData.map((curContactData, index) => {
                        const { username, email, message, _id } = curContactData;
                        return (
                            <div key={index}>
                                <p>UserName: {username}</p>
                                <p>Email: {email}</p>
                                <p>Message: {message}</p>
                                {/* Use Btnn component for the delete button */}
                                <Btnn onClick={() => deleteContactById(_id)}>DELETE</Btnn>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};
