import React,{useState} from "react";
import {Box,TextField} from "@material-ui/core";
import Button from '@mui/material/Button';
const User=({onAddData})=>{
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const handleFirstName=(event)=>{
        setFirstName(event.target.value);
    };
    const handleLastName=(event)=>{
        setLastName(event.target.value);
    }
    const handleAddData=()=>{
        const inputData=`${firstName} ${lastName}`
        if (inputData){
            onAddData(inputData);
            setFirstName('');
            setLastName('');
        }
    };
    return(
        <>
            <Box>
                <h3>First name</h3>
                <TextField 
                id="filled-basic" 
                label="enter you name" variant="filled" 
                onChange={handleFirstName}/>

                <h3>Last name</h3>
                <TextField 
                id="filled-basic" 
                label="enter your last name" variant="filled" 
                onChange={handleLastName}/>

                <Button 
                variant="contained" 
                style={{ margin: '10px' }} 
                onClick={handleAddData}>Add Data</Button>

            </Box>
            
        </>
    )
}
export default User;