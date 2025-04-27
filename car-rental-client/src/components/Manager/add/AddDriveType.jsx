import {addDriveType } from "../../../data/api";
import { useRef, useState } from "react"
import { Button, TextField } from "@mui/material";

export const AddDriveType=()=>
{
    const [value,setValue]=useState()
    const add =()=>
    {
        const DriveType={
            code:0,
            descripition:value
        }
        addDriveType(DriveType)
    }
    return<>
    <TextField id="filled-basic" label="הנעה" variant="filled" onBlur={(event) => {
                 setValue(event.target.value)}}
                  />
    <Button sx={{bgcolor:"#00dede",marginTop:"1vw"}} className="b" variant="contained" size="medium"  onClick={()=>add()} >הוסף</Button>
    </>
}