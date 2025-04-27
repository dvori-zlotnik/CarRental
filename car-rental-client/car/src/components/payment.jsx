import { useSelector } from "react-redux"
import { Cvv } from "./Cvv"
import { useState } from "react"
import { Alert, Button, Chip } from "@mui/material"
import { addLending, update_avalable } from "../data/api"
import CreditDialog from "./CreditDialog"
import './style_payment.css'
import AlertSuccess from "./AlertSuccess"
import { Car } from "./Car"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export const  Payment=()=> {

    const user = useSelector(store => store.current.user)
    console.log(user)
    const [pay,setPay] = useState(false)
    const [code_lending,setCode_lending] =useState()
    const rent = useSelector(s=>s.rental.rent)
    const Root = styled('div')(({ theme }) => ({
      width: '40vw',
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
      '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(4),
      },
    }));
console.log(rent)
    const save = ()=>
    {
       let lending={
            idUser:user.id,
             date:rent.date,
            // hour:props.hour,
             code_car:rent.code_car.code,
             returnDate:rent.returnDate
       }
       addLending(lending).then(x=>
        setCode_lending(x.data)
      ).catch(e=>console.log(e))
    }

    return<>
    <div id="detail">      
      <div id="dates">
        <Root>
          <Divider>
            <Chip  sx={{bgcolor:"#00dede",color:"white",}}  label="תאריך איסוף" size="large" />
        </Divider>
          <p>{rent.date} </p>
        <Divider>
          <Chip sx={{bgcolor:"#00dede",color:"white"}} label="תאריך החזרה" size="large" />
        </Divider>
          <p>{rent.returnDate}</p>
        </Root>
      </div>
    <Car car = {rent.code_car}></Car>
  </div>
    { !pay &&
    <div id="credit">
    {
   
      <>
      <CreditDialog setPay={setPay}></CreditDialog>
      <br></br>
      </>
    }
    <div id="cvv"> { user.cvv &&  <Cvv u_cvv={user.cvv} setPay={setPay}></Cvv>}
    </div>
  </div>
|| <>
      <div id="success">
      <Alert sx={{bgcolor:"#00dede"}} variant="filled" severity="success">
        פרטי אשראי נקלטו בהצלחה
      </Alert>
      <div id="chip">
      <Chip sx={{bgcolor:"#fb2576",color:"white",'&:hover': {color:"#fb2576"}}} label="לסיום ותשלום" variant="outlined" onClick={()=>save()}></Chip>
      </div>
      </div>
      {code_lending && <AlertSuccess code={code_lending}></AlertSuccess>}
     </>}
    </>
}