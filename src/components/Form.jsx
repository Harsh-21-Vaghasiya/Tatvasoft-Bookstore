import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
const Form = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [UserDetails, setUserDetails] = useState({
        username: username,
        password: password,
    });

    useEffect(() => {
        if (UserDetails.username.length > 4) {
            console.log('use effect called with username');
        }
    }, [UserDetails.username]);


    const handleSubmit = () => {
        console.log("Username", UserDetails.username);
        console.log("Password", UserDetails.password);

    }
    return (
        <>
            <div className="form-demo">
                <Typography variant="h2">Register hear</Typography>
                <TextField label="Name"
                    variant="outlined"
                    value={UserDetails.username}
                    onChange={(e) => setUserDetails((prev) => ({ ...prev, username: e.target.value }))} />
                <TextField label="Email"
                    variant="outlined"
                    value={UserDetails.password}
                    onChange={(e) => setUserDetails({ password: e.target.value })}
                />
                <TextField label="Age"
                    variant="outlined"
                    value={UserDetails.password}
                    onChange={(e) => setUserDetails({ password: e.target.value })}
                />
                <TextField label="Password"
                    variant="outlined"
                    value={UserDetails.password}
                    onChange={(e) => setUserDetails((prev) => ({ ...prev, password: e.target.value }))}
                />
                <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </>
    )
};

export default Form;