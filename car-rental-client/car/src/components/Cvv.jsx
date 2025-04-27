
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { addLending } from '../data/api';
import { CreditCard } from '@mui/icons-material';
import { MyCreditCard } from './CreditCard';
import CreditDialog from './CreditDialog';

export const Cvv =({u_cvv,setPay})=>{

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='credit'
       sx={{color:"#00dede",borderColor:"#00dede" ,}}
      onClick={handleClickOpen}>
        תשלום בכרטיס אשראי ששמור במערכת
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const cvv = formJson.cvv;
            console.log(u_cvv)
            if(cvv == u_cvv)
            {
               setPay(true)
            }
            handleClose();
          },
        }}
      >
        <DialogTitle>הכנס קוד</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="cvv"
            label="cvv"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions  sx={{display:"flex",justifyContent:"center"}}>
          <Button sx={{ bgcolor:"#fb2576",color:"white",'&:hover': {color:"#fb2576"}}} type="submit">אישור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
