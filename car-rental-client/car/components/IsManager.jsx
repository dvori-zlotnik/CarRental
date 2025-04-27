import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export const IsManager=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Button variant='text'
       sx={{color:"#00dede",borderColor:"#00dede"}}
      onClick={handleClickOpen}>
        להרשמה כמנהל
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
            const pass = formJson.pass;
            if(pass == "123")
                navigate("../ManagerRegister")
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
            name="pass"
            label="קוד"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>חזרה</Button>
          <Button type="submit">אישור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
