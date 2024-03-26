// import  {createContext, useContext, useEffect, useState} from "react";

// export const AuthContext= createContext();
  

// export const AuthProvider=({children})=>{
//     const[token,setToken]=useState(localStorage.getItem("token"));   
//     const [user,setuser]=useState("");
//     const {authorizationToken}=`Bearer ${token}`;
    
//     const storeTokenInLS=(serverToken)=>{
//         setToken(serverToken);
//         return localStorage.setItem("token",serverToken);
//     };
// let isLoggedIn=!!token;
// console.log("isLoggedIn",isLoggedIn);


//     //logout functionality
//     const LogoutUser=()=>{
//         setToken("");
//         return localStorage.removeItem("token");
//     };
//     //JWT AUTHENTICATION- to get the currently loggedIN user data
//     const userAuthentication=async()=>{
//       try{
//         const response=await fetch(`http://localhost:5000/api/auth/user`,{
//             method:"GET",
//             headers:{
//                 Authorization:authorizationToken,
//             },
//         });
       
//         if (response.status === 401) {
//             // Handle unauthorized access
//             console.log("Authentication failed: Unauthorized access");
//             return;
//         }
        
//        if(response.ok){
//            const data=await response.json();
//            console.log("user Data", data.userData);
//            setuser(data.userData);
//        }
//       else{
//           throw new Error ("Authentication Failed!");
//        }
//     }catch(error){
//         console.log("Error fectching user data");
//       }
//     };

//     useEffect(()=>{
//         userAuthentication();
//     },[]);

//     return (
//     <AuthContext.Provider value={{
//         isLoggedIn,storeTokenInLS,LogoutUser,user,authorizationToken}}>
//         {children}
//      </AuthContext.Provider>);
//         };

// export const useAuth=()=>{
//     const authContextValue=useContext(AuthContext);
//     if(!authContextValue){
//         throw new Error("useAuth used outside of the Provider");
//     }
//     return authContextValue;
// };

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(""); // New state for user role
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    // Logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWT authentication - get the currently logged-in user data and role
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.status === 401) {
                console.log("Authentication failed: Unauthorized access");
                return;
            }

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                setUserRole(data.userData.role); 
                setIsLoading(false);// Set the user's role
            } else {
                throw new Error("Authentication Failed!");
            }
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            storeTokenInLS,
            LogoutUser,
            user,
            userRole,
            isLoading,
            //Include userRole in the context value
            authorizationToken
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
