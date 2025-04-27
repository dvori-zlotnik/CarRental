import * as React from 'react';
import  {Card}  from '@mui/joy';
import {CardActions} from '@mui/joy';
import {CardContent} from '@mui/joy';
import {Checkbox} from '@mui/joy';
import {Divider} from '@mui/joy';
import {FormControl} from '@mui/joy';
import {FormLabel} from '@mui/joy';
import {Input} from '@mui/joy';
import {Typography} from '@mui/joy';
import {Button} from '@mui/joy';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { DateRange } from '@mui/icons-material';
import { addUser } from '../data/api';
import { useDispatch } from 'react-redux';
import { set } from '../data/userSlice';
import { useNavigate } from 'react-router-dom';
export  const MyCreditCard=({setUser,user}) =>{
console.log(user)
  const dispach = useDispatch();
  const navigate = useNavigate()
  const add =()=>
  {
    console.log("OOO")
    setUser({...user,ismanager:false})
    dispach(set(user))
    addUser(user).then((x)=>
    {
      console.log(x.data)
    }
    ).catch(error=>
      console.log(error)
    );
  }
  console.log(user)
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '55%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        backgroundColor:"white",
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined sx={{color:"#00dede"}} />}>
      Add new card
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number  </FormLabel>
          <Input id='a' onBlur={(event)=>
          {
          if(user)
             setUser({...user,numCreditCard:event.target.value})}}
              endDecorator={<CreditCardIcon sx={{color:"#00dede"}} />} />
        </FormControl>
        <FormControl>
          <FormLabel> Expiry date</FormLabel>
          <Input  onBlur={(event)=>
             {
              if(user)
               setUser({...user,validity:event.target.value})}}
              endDecorator={<DateRange sx={{color:"#00dede"}} />} />
        </FormControl>
        {
         user && user.cvv &&
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input onBlur={(event)=>{
            if(user)
            setUser({...user,cvv:event.target.value})}}
           endDecorator={<InfoOutlined sx={{color:"#00dede"}}/>} />
        </FormControl>
        ||
        <FormControl>
        <FormLabel>CVC/CVV</FormLabel>
        <Input onBlur={(event)=>
          {
            if(user)
            setUser({...user,cvv:event.target.value})}}
           error endDecorator={<InfoOutlined sx={{color:"#00dede"}}/>} />
      </FormControl>
}
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name  </FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
        { user &&
          <Button  variant="solid" sx={{bgcolor:"#00dede"}} href='home' color="primary" onClick={ ()=>
            {
              if(user.cvv)
              {
                  add()
              navigate("../home")
              }
            }
            }> 
          Add Card
          </Button>
}
        </CardActions>
      </CardContent>
    </Card>
  );
}