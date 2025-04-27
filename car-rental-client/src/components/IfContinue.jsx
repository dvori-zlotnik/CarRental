import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addUser } from '../data/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set } from '../data/userSlice';

export default function Continue({setUser,user,setStep}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const dispach = useDispatch()
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
         setUser(user)

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
לשלב הבא      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"האם אתה מעונין להמשיך לשלב הבא?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          אם לא תכניס עכשו את פרטי האשראי, תוכל לתת אותם כשתשכיר את הרכב
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
                setStep(2)
            handleClose()
            }}>להמשיך</Button>
          <Button onClick={()=>
          {
                      addUser(user).then((x)=>
                      {
                        console.log(x.data)
                      }
                      ).catch(error=>
                        console.log(error)
                      );
                  navigate("../home")
            handleClose()
          }
            } autoFocus>
            סיום הרישום
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
