
import { TextField,Button } from "@mui/material"
import "./style_home.css"
import InputAdornments from "./InputAdorments"
import { useState } from "react"
import { findUser } from "../data/api"
import { useDispatch, useSelector } from "react-redux"
import { set } from "../data/userSlice"
import { useNavigate } from "react-router-dom"
import { Margin, Padding } from "@mui/icons-material"
import Restitation from "./Restitation"
import Questions from "./Questions"
import { Contact } from "./Contact"
export const Home=()=>{
  const [name,setName] = useState()
  const [password,setPassword] = useState()
  const dispach =useDispatch()
  const[user,setUser] = useState()
  const user1 = useSelector(store=>store.current.user)
  const navigate = useNavigate()
  console.log(user)
  const login = () =>
  {
    findUser(name,password).then(x=>
    {
      console.log(x.data)

      if(x.data == "")
      {
        console.log(x.data)
        navigate("/login")
      }
      else{
        console.log(x.data)

      dispach(set(x.data))
      setUser(x.data)
      }
    }
    ).catch(x=>
      console.log(x)
    )

  }
    return<>
    <div id="all" >
    { (!user1.name) && <div className="inside" id="login" >
      <TextField
       id="filled-basic"
        label="שם מלא"
        variant="filled"
        sx={{width:"100%"}}
        onBlur={(e)=>setName(e.target.value)}
      />
      <InputAdornments sx={{width:"100%",Margin:"0vw",Padding:"0vw"}}
      label={"סיסמה"} setPassword={setPassword}></InputAdornments>
      <Button sx={{width:"100%",bgcolor:"#00dede", color:"white",borderColor:"#00dede"}} variant="outlined" onClick={()=>{login()}}>להתחברות</Button>
      <Button sx={{color:"#00dede"}} variant="text" onClick={()=>
        {
          navigate('../login')
        }
      }>עדיין לא רשום? הירשם עכשיו</Button>

      </div>
      ||
      <div className="inside" id="buttoms">
        <button onClick={()=>navigate(`../AddRental/:${0}`)} class="button" ><span> השכרת רכב </span></button>
        <Restitation></Restitation>
        </div>
      }
      <div id="image">
      <img width={"650vw"} height={"400vw"} src={process.env.PUBLIC_URL+"/images/myhome.png"}></img>
      </div>

      </div>
      <img id="service" height={"450vw"} src={process.env.PUBLIC_URL+"/images/service experience.png"}></img>
      {/* <Questions></Questions> */}
      <Contact></Contact>
    </>
}