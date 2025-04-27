import { useRef, useState } from "react"
import { addCity } from "../../../data/api";
import { Button, TextField } from "@mui/material";
export const AddCity=()=>
{
    const [value,setValue]=useState()
    const add =()=>
    {
        const city={
            code:0,
            name:value
        }
        addCity(city)
    }
    return<>
    <TextField id="filled-basic" label="עיר" variant="filled" onBlur={(event) => {
                 setValue(event.target.value)}}
                  />
    <Button sx={{bgcolor:"#00dede",marginTop:"1vw"}} className="b" variant="contained" size="medium"  onClick={()=>add()} >הוסף</Button>
    </>
}