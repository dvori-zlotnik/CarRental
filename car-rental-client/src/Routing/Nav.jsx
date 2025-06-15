import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react';
import Button from '@mui/material/Button';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import HomeIcon from '@mui/icons-material/Home';
import { Home } from '../components/Home'
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './style_nav.css'
import Avatar from '@mui/material/Avatar';
import { set } from '../data/userSlice';
export default function Nav() {
  const user = useSelector(store => store.current.user)
  console.log(user)
  const dispach = useDispatch()
  function stringAvatar(user) {
    let name = undefined
    if (user)
      name = user.name
    if (name) {
      if (name.split(' ').length == 2)
        return {

          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      else
        return {

          children: `${name.split(' ')[0][0]}`,
        };
    }
    else return undefined
  }
  return (
    <div id="nav"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1301, // גבוה יותר מה-Drawer וה-AppBar של MUI
        background: "#fff",
        boxShadow: "0 2px 8px #eee",
        height: "64px",
        display: "flex",
        alignItems: "center"
      }}>
      <NavLink to={user.name && user.isManager ? "/manager" : "/home"} id="user" className={"link"}>
        <p onClick={() => {
          if (user.name && !user.isManager)
            dispach(set({}))
        }
        }>
          {user.name && (user.isManager && "אזור מנהל" || "התנתקות") || "להתחברות"}</p>
        <Avatar sx={{ bgcolor: "#fb2576" }} {...stringAvatar(user)} />
      </NavLink>
      <div id="center">
        <NavLink to="/home" className="link" >דף הבית</NavLink>
        <NavLink to="/search_car" className="link" >
          קטלוג רכבים
        </NavLink>
        <NavLink to="/contact" className="link" >
          צור קשר
        </NavLink>
        <NavLink to="/comingsoon" className="link" >
          ליסינג לעסקים
        </NavLink>
        <NavLink to="" className="link" > שאלות נפוצות
        </NavLink>
      </div>
      <NavLink to="/home" id='lc' >
        <img id="company" src={process.env.PUBLIC_URL + '/images/צילום מסך 2024-12-19 175800.png'}></img>
      </NavLink>
    </div>
  )
}
