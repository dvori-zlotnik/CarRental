import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { MyCreditCard } from './CreditCard';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CreditDialog({setPay}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='credit' sx={{bgcolor:"#00dede",color:"white",borderColor:"#00dede",}} variant="outlined" onClick={
        ()=>
          {
            handleClickOpen()
          }
        }>
        לתשלום בכרטיס אשראי
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{margin:0}}>
<MyCreditCard></MyCreditCard>  
      </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center"}}>
          <Button  sx={{ bgcolor:"#fb2576",color:"white",'&:hover': {color:"#fb2576"}}} autoFocus onClick={()=>
          {
            setPay(true)
            handleClose()
            
          }

          }>
            לסיום
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
