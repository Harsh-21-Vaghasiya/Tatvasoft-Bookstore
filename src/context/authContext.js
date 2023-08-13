import Cookies from "js-cookie";
import React, { Children, createContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";


const intialUserValue = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    roleId: "",
    role: "",
    password: "",
};

const initialstate = {
    setUser: () => { },
    user: intialUserValue,
    signOut: () => { },
    appInitialize: false,
};
export const AuthContext = createContext(initialstate);



const AuthWrapper = ({ children }) => {


    // declaring use navigate
    const navigate = useNavigate();

    // useState Declarations
    const [userData, setUserData] = useState();


    // Functions Declaration

    const setUser = (data) => {
        // Cookies.set("UserInfo", JSON.stringify(data));
        // console.log("data11", data);
        setUserData(data);


        // set data in local system
        localStorage.setItem("UserInfo", JSON.stringify(data));
    }


    const signOut = (data) => {
        setUserData(intialUserValue);
        localStorage.removeItem("UserInfo");
        navigate("/");

    };


    // values Declaration
    let value = {
        setUser,
        user: userData,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
};


export default AuthWrapper;
