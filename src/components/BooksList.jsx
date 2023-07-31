import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const BooksList = () => {

    const navigate=useNavigate();
const handleButtonclick=()=>{
    navigate('/');
}

    return (<>
        <div>book</div>
        <button onClick={()=>{handleButtonclick()}}>Go to Home</button>
    </>)
};
export default BooksList;