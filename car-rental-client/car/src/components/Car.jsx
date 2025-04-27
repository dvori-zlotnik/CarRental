import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import Typography from '@mui/material/Typography';
import FolderList from "./FolderList";
import './style_card.css'
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
import EventBusyTwoToneIcon from '@mui/icons-material/EventBusyTwoTone';
import {  } from '@mui/material/colors';
// {import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { setCar } from "../data/rentSlice";
export const Car =(props)=>
{
  //console.log(props.car.image)
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width:props.father? "60vw":"40vw",
    height:"30vh",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    '&:hover': {
      backgroundColor:props.father? 'white':'#d9d4dd',
    //  color:"white",
    },
   // backgroundColor:"#010400"
  }));
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   let navigate = useNavigate();
   const dispach = useDispatch();
   const user = useSelector(store=>store.current.user)
    return<>
        <Stack direction="row" spacing={2}>
        <DemoPaper onClick={()=> 
          {
            if(!props.father)
            {
              dispach(setCar(props.car))
              //  props.setCar(props.car)
              navigate("../payment")
            }
          }
          } id ={"card"} square={false}>
         { props.father &&  <div id="left">
          <Tooltip title="like">
          <Checkbox  {...label} icon={<FavoriteBorder sx={{color:'#fb2576' }} />} checkedIcon={<Favorite sx={{color:'#fb2576' }}  />} />
          </Tooltip>
          <br></br>
          <br></br>   <br></br>
          <br></br>   <br></br>
          <br></br>   <br></br>  
        <div id={"inside"}>
   <Button id ={"details"} sx={{width:"10vw"}} disabled={!props.car.available} variant="contained" size="medium" onClick={()=>
    {
      
      if(props.father && user.name)
         navigate('../AddRental/'+props.car.code)
      else
      navigate("../login")
    }
    }>
   הזמינו עכשיו        </Button>
    {props.car.available &&
        <Tooltip title="פנוי"  id ={"icon"} sx={{fontSize:"2.5vw",color:"#00dede"}}>
        <EventAvailableTwoToneIcon/>
      </Tooltip>
  || 
  <Tooltip title="תפוס"  id ={"icon"} sx={{fontSize:"2.5vw",color:"#62BBC1"}}>
  <EventBusyTwoToneIcon />
</Tooltip>
  }
        </div>
        </div>}
        <div id ={"o"}>
    <Typography id={"model"} variant="h5" gutterBottom >
        {props.car.model_name}
      </Typography>
      <Typography id={"type"} variant="h6" gutterBottom >
        {props.car.size+" "+ props.car.typeVehicles}
      </Typography>
      <Typography id={"type"} variant="h6" gutterBottom >
        {"מחיר לשעה: "+props.car.pricePerHour+"$"}
      </Typography>
      <br></br>   <br></br>

      <FolderList id={"list"} year={props.car.year} num ={props.car.numberOfSeats} city={props.car.city} gear ={props.car.gear}></FolderList>
        </div>
        <img id={"image"} height={"150vh"} width={"220vw"} src={process.env.PUBLIC_URL+"/images/cars/"+props.car.image}></img>
        </DemoPaper>
        </Stack>
 </>
}
