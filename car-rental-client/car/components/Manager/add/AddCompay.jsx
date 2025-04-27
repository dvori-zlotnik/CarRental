import { useState } from "react";
import { addCompany } from "../../../data/api";
import { Button, TextField } from "@mui/material";
export const AddCompany=()=>
{
    const [value,setValue]=useState()
    const add =()=>
    {
        const company={
            code:0,
            name:value
        }
        addCompany(company)
    }
    return<>
    <TextField id="filled-basic" label="חברה" variant="filled" onBlur={(event) => {
                 setValue(event.target.value)}}
                  />
    <Button sx={{bgcolor:"#00dede",marginTop:"1vw"}} className="b" variant="contained" size="medium"  onClick={()=>add()} >הוסף</Button>
    </>
}