import { useState } from "react"
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ArrowBackIos} from "@mui/icons-material";
//import {courentAddUser}from '../data/Store'
//import { addCurrentAddUser } from "../data/Action";
import {FormHelperText} from "@mui/material";
import InputAdornment from "./InputAdorments"
import Continue from "./IfContinue";
export const LoginLevel2=({setStep,setUser,user})=>{
    const [password1,setPassword1]=useState();
    const [password2,setPassword2]=useState();
    console.log(password1)
    const add=()=>{
       setUser({...user,password:password1})
       setStep(2)
    }
  return<>
     <div id ="all">
     <div id ="first">
        <InputAdornment setPassword = {setPassword1} label={"הכנס סיסמה"}></InputAdornment>
        <br></br>
        <br></br>
        <InputAdornment setPassword = {setPassword2} label={"אימות סיסמה"}></InputAdornment>
           {password1 && password2 && password1!=password2 &&
                <FormHelperText sx={{color:"red"}} id="component-error-text">
        הסיסמה לא נכונה,נסה שוב
                    </FormHelperText>
            || <>
                  <br></br>
                  <br></br>
                {/* <Button id="send1" sx={{bgcolor:"#00dede"}} variant="contained" onClick={()=>add(0)}  endIcon={<ArrowBackIos/>}>לשלב הבא
                </Button> */}
                <Continue setUser={setUser} setStep={setStep} user = {{...user,password:password1}}></Continue>
                {/* <Button  variant="contained" onClick={()=>add(1)}  endIcon={<AddCircleOutlineIcon/>}> חזרה לדף הבית
                </Button>   */}
         
                
                </>             
            }
                   </div>
                   </div>
</>
}
