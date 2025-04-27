import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { CalendarTodayTwoTone,LocationOn, LockClockSharp,} from '@mui/icons-material';
import { useState } from "react"
import { Pop1 } from './P1';
import { Pop2 } from './P2';
import './style_step.css'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const steps = [
  {
    contentButton:'סוג הזמנה' ,
    iconB:  <LockClockSharp/>,
  },
  {
    contentButton:' מסלול וזמנים',
    iconB: <CalendarTodayTwoTone/> ,
  
  },
  {
    contentButton:' בחירת רכב',
    iconB: <LocationOn/> ,
  },
];
export const Popup=({rental,SetRental,activeStep,setActiveStep})=> {
    const[choic,setChois]=useState();  
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(activeStep+1);
    console.log(activeStep);
  };

  return (
    <React.Fragment>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
        {activeStep==0 ?<Pop1 SetRental={SetRental} rental={rental}></Pop1> :<Pop2 SetRental={SetRental} rental={rental}></Pop2>}
        </DialogContent>
        <DialogActions  sx={{display:"flex",justifyContent:"center"}}>
          <Button sx={{bgcolor:"#00dede",color:"white"}} onClick={handleClose}>המשך בהזמנה</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}