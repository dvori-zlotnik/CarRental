import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { return_car } from '../data/api';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Restitation() {

    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClick = () => {
      setOpenSnack(true);
    };
  
    const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnack(false);
    };
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose1}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button id='re' className='button' onClick={handleClickOpen}>
      <span> החזרת רכב </span>     </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson)
            return_car(parseInt(formJson.code)).then(x=>
                console.log(x.data)
            ).catch(
                e=>console.log(e)
            )
            handleClose();
            handleClick()
          },
        }}
      >
        <DialogTitle>החזרת רכב</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="code"
            label="הכנס קוד השאלה"
            type="text"
            fullWidth
            variant="standard"
          />
      <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="balance"
            label="הכנס יתרת דלק"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>חזרה</Button>
          <Button type="submit">אישור</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose1}
        message="החזרת הרכב בוצעה בהצלחה"
        action={action}
        sx={{bgcolor:"#00dede"}}
      />
    </React.Fragment>
  );
}
