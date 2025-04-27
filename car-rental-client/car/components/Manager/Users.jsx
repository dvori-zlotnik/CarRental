import * as React from 'react';
import { useState,useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getUsers } from '../../data/api';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';

export  const ListUser=() =>{
    const[users,setUsers]=useState()
          useEffect(()=>
            {
                getUsers().then((x)=>
                {
                const c=x.data
                setUsers(c)
                }
                )
                .catch(e=>
                console.log(e)
                );              
            },[])
  return <>
      <List direction="rtl" sx= {{ display:"grid",gridTemplateColumns:"auto auto auto",rowGap:"1vw",columnGap:"1vw", width: '100%', bgcolor: 'background.paper' }}>
      {users && users.map((user,i)=> 
         <>
      <ListItem sx={{boxShadow:"4px 4px 8px 4px rgba(0, 0, 0, 0.2);"}}  alignItems="flex-start" direction="rtl">
        <ListItemText
          primary={user.name?user.name:""}
          sx={{ textAlignLast:"end"}}
          secondary={   
            <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' ,direction:'rtl'}}
              >   
              <span> {"תעודת זהות : " + user.id}  </span>
              <br />
              <span> {" סיסמה : " + user.password} </span>
              <br />
              <span> {" טלפון : " + user.phone}</span>
              </Typography>             
          }/>
                  <ListItemAvatar>
          <Avatar alignItems="center" sx={{ color: '#fb2576',fontSize:"2vw"}}>
              {user.name[0]} 
             </Avatar>
        </ListItemAvatar>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      </>)}     
    </List>
    </>;
}