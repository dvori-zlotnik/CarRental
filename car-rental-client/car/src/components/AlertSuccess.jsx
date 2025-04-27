import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Chip } from '@mui/material';
import PaySuccess from './PaySuccess';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertSuccess({code}) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate("../home")
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Chip variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Chip> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{padding:"0vw"}}
      >
        <DialogContent sx={{padding:"0vw"}}
        >
        <PaySuccess code={code}></PaySuccess>
        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center"}}>
          <Button sx={{ bgcolor:"#fb2576",color:"white",'&:hover': {color:"#fb2576"}}} onClick={handleClose}>לדף הבית</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
