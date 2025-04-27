import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addUser } from "../data/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set } from "../data/userSlice";
export const ManagerRegister =()=>
{
    const [name,setName]=useState();
    const [id,setId]=useState();
    const [phone,setPhone]=useState();
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const dispach = useDispatch()
    const add=()=>{
        const manager={
            name,
            id,
            phone,
            password: "123",
            numCreditCard: '',
            validity:'' ,
            cvv:'' ,
            isManager:true
        }
            addUser(manager).then((x)=>
            {
              dispach(set(manager))
              console.log(x.data)
            }
            ).catch(error=>
              console.log(error)
            );
        navigate("../home")
    }
    return<>
       <div id ="all">
   <div id ="first">
    { (name || !click) &&
          <TextField id="outlined-search" label=" שם" type="search" variant="filled"
      onBlur={(event)=>{setName(event.target.value)}}/>
      ||     
      <TextField id="outlined-search" label=" שם" type="search" variant="filled" error helperText="הכנס שם"
      onBlur={(event)=>{setName(event.target.value)}}/>
      }
      <br></br>
      <br></br>
      { (id || !click) &&
      <TextField id="outlined-search" label=" תעודת זהות" type="search" variant="filled"
      onBlur={(event)=>{setId(event.target.value)}}/>
      ||
      <TextField id="outlined-search" label=" תעודת זהות" type="search" variant="filled" error helperText="הכנס תז"
      onBlur={(event)=>{setId(event.target.value)}}/>
      }
            <br></br>
            <br></br>
     {
        (phone || !click) &&
      <TextField id="outlined-search" label=" טלפון" type="search" variant="filled"
      onBlur={(event)=>{setPhone(event.target.value)}}/>
      ||
      <TextField id="outlined-search" label=" טלפון" type="search" variant="filled" error helperText="הכנס תז"
      onBlur={(event)=>{setPhone(event.target.value)}}/>
     }
           <br></br>
           <br></br>
     <Button id="send1" variant="contained" sx={{bgcolor:"#00dede"}} onClick={()=>
      {
        setClick(true)
        if(name && phone && id)
        add()} 
      }>
        לאישור
      </Button>
      </div>
      </div>
    </>
}