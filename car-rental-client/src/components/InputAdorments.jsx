import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FilledInput } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function InputAdornments({setPassword,label}) {
  const [showPassword, setShowPassword] = React.useState(false);
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (

<FormControl sx={{ m: 1 ,width:"14vw"
}} variant="filled">
<InputLabel htmlFor="filled-adornment-password">{label}</InputLabel>
<FilledInput
  id="filled-adornment-password"
  type={showPassword ? 'text' : 'password'}
  onBlur={(event)=>
    {console.log(event.target.value)
    setPassword(event.target.value.toString())}
  }
 
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label={
          showPassword ? 'hide the password' : 'display the password'
        }
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        onMouseUp={handleMouseUpPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  }
/>
</FormControl>
  );
}