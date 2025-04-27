import { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ArrowBackIos, Phone } from "@mui/icons-material";
import {courentAddUser}from '../data/Store'
import "./style_login.css"
import { IsManager } from "./IsManager";
//import { addCurrentAddUser } from "../data/Action";
export const LoginLevel1=({setStep,user,setUser})=>{
  console.log(user)
  const [click, setClick] = useState(false)
     const add=()=>{
      //  addCurrentAddUser(user);
        setStep(1);
     }
   return<>
   <div id ="all">
   <div id ="first">
    { (user.name || !click) &&
      <TextField id="filled" label=" שם" type ="search" variant="filled" 
      onBlur={(event)=>{setUser({...user,name:event.target.value})}}/>
      ||
      <TextField id="filled" label=" שם" type ="search" variant="filled" error  helperText="הכנס שם"
      onBlur={(event)=>{setUser({...user,name:event.target.value})}}/>
    }
      <br></br>
      <br></br>
      {
        (user.id  || !click )&&
      <TextField id="outlined-search" label=" תעודת זהות" type="search" variant="filled"
      onBlur={(event)=>{setUser({...user,id:parseInt(event.target.value)})}}/>
      ||
      <TextField id="outlined-search" label=" תעודת זהות" type="search" error helperText="תז לא תקינה" variant="filled"
      onBlur={(event)=>{setUser({...user,id:parseInt(event.target.value)})}}/>
      }
      <br></br>
      <br></br>
      {( user.phone || !click) && 
      <TextField id="outlined-search" label=" טלפון" type="search" variant="filled"
      onBlur={(event)=>{setUser({...user,phone:event.target.value})}}/>
      ||
      <TextField id="outlined-search" label=" טלפון" type="search" error helperText="הכנס טלפון" variant="filled"
      onBlur={(event)=>{setUser({...user,phone:event.target.value})}}/>
}
            <br></br>
            <br></br>
      <Button id="send1" variant="contained" sx={{bgcolor:"#00dede"}} onClick={()=>
      {
        setClick(true)
        if(user.name && user.phone && user.id)
        add()} 
      }
       endIcon={<ArrowBackIos/>}>לשלב הבא
      </Button>
      <br></br>
      <div id="m">
      <IsManager></IsManager>
      </div>
      </div>
      </div>

</>
}
