import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from "react";
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import {getLendings } from '../../data/api';
export const  ListRentals=()=> {
 const[rentals,setRentals]=useState()
           useEffect(()=>
             {
                getLendings().then((x)=>
                 {
                 const c=x.data
                 setRentals(c)
                 }
                 )
                 .catch(e=>
                 console.log(e)
                 );              
             },[])
   return <>
         <List direction="rtl" sx={{display:"grid",gridTemplateColumns:"auto auto auto",rowGap:"1vw", width: '100%', bgcolor: 'background.paper'}}>

    {rentals && rentals.map((rent,i)=> 
    <Card >
      <CardContent>
        <Typography sx={{color:'#00dede', textAlignLast:"end" }} gutterBottom variant="h5" component="div">
          {rent.code}
        </Typography>
        <ListItemText sx={{color:'#00dede',textAlignLast:"end" }} 
          primary={"רכב: " +rent.code_car}
          secondary={   
            <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' ,direction:'rtl', textAlignLast:"end" }}
              >   
               <span> {" נלקח על ידי:" + rent.userName}  </span>
              <br />
              <span> {" ת.ז. : " + rent.idUser} </span>
              <br />
              <span> {" תאריך השכרה : " + rent.date +" בשעה: "+rent.hour}</span>
              <br />
              <span> {"  תאריך חזרה: " + rent.returnDate+" בשעה: "+rent.returnDate}</span>
              <br />  
              </Typography>             
          }/>
      <Button  size="small" color={rent.returnCar==true ? '#2478': '#5289'}> {rent.returnCar==true ?"הרכב הוחזר":"הרכב מושכר"}</Button>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>)}
    </List>
    </>
}