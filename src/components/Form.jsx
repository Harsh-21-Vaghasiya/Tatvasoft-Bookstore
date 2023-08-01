import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const Form = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [UserDetails, setUserDetails] = useState({
        username: username,
        password: password,
    });


    const handleSubmit = () => {
        console.log("Username", UserDetails.username);
        console.log("Password", UserDetails.password);

    }
    return (
        <>
            <div className="form-demo">
                <Typography variant="h2">Login hear</Typography>
                <TextField label="outlined"
                    variant="outlined"
                    value={UserDetails.username}
                    onChange={(e) => setUserDetails({username:e.target.value})} />
                <TextField label="outlined"
                    variant="outlined"
                    value={UserDetails.password}
                    onChange={(e) => setUserDetails({password:e.target.value})}
                />
                <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </>
    )
};

export default Form;