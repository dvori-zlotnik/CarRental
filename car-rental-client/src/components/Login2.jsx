import * as React from 'react';
import Grid from '@mui/joy/Grid';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TableRows } from '@mui/icons-material';

export const  InputAdornments = ()=> {
   React.useState(true);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>   
      <div sx={{ display: 'list-item'}} >
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">תעודת זהות</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type= 'text'           
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"> טלפון</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'            
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"> שם</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type= 'text' 
          />
        </FormControl>       
      </div>      
      </Grid>
  );
}