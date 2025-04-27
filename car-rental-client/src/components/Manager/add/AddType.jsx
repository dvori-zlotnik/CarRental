import { addTypeVehicle } from '../../../data/api';
import { useRef, useState } from "react"
import { Button, TextField } from "@mui/material";

export const AddType=()=>
{
    const [value,setValue]=useState()
    const add =()=>
    {
        const Type={
            code:0,
            descripition:value
        }
        addTypeVehicle(Type)
    }
    return<>
    <TextField id="filled-basic" label="גודל" variant="filled" onBlur={(event) => {
                 setValue(event.target.value)}}
                  />
    <Button sx={{bgcolor:"#00dede",marginTop:"1vw"}} className="b" variant="contained" size="medium"  onClick={()=>add()} >הוסף</Button>
    </>
}