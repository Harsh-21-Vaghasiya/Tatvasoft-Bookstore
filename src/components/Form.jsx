import { Button, TextField, Typography } from "@mui/material";
import React from "react";
const Form = () => {
    return (
        <>
            <div className="form-demo">
                <Typography variant="h2">Login hear</Typography>
                <TextField label="outlined" variant="outlined" />
                <TextField label="outlined" variant="outlined" />
                <Button variant="contained">Submit</Button>
            </div>
        </>
    )
};

export default Form;