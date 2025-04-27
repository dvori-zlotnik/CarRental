import * as React from 'react';
import { useState ,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCity } from '../data/api';
import Switch from '@mui/material/Switch';
// import Switch from '@mui/joy/Switch';

import { LocationOn } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { set } from '../data/rentSlice';
import Typography from '@mui/joy/Typography';

export const Pop1=({SetRental,rental})=>{
    const [adresss,setAdresss]=useState();
    const dispach = useDispatch()
 useEffect(()=>
    {
        getCity()
        .then(x=>
        {
        const c=x.data
        setAdresss(c)
        }
        )
        .catch(e=>
        console.log(e))
    },[]
        );
    const handleChange1 = (event) => {
        console.log(event.target.value)
        SetRental({...rental, city: event.target.value})
        dispach(set(rental))
    };
    const [adress2, setAdress2] = useState(''); 
    const handleChange2 = (event) => {
        setAdress2(event.target.value);
      //  SetRental({...rental, city : event.target.value})
       // dispach(set(rental))

    };
    const [checked, setChecked] = useState(true);
    const [FormAdress2, setFormAdress2]=useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked);
      if(FormAdress2==true)
        setFormAdress2(false);
      else
      setFormAdress2(true); 
       };
 return<div id='content' orientation="vertical"> 
       {/* <Switch       slotProps={{
          track: {
            children: (
              <React.Fragment>
                <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                  AtoA
                </Typography>
                <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                  AtoB
                </Typography>
              </React.Fragment>
            ),
          },
        }}
        sx={{
          '--Switch-thumbSize': '38px',
          '--Switch-trackWidth': '100px',
          '--Switch-trackHeight': '45px',
      
        }}
      /> */}
      <div id='s'>
        <p>AtoB</p>
 <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
            <p>AtoA</p>

    </div>
    <FormControl orientation="vertical" sx={{ mb: 1, minWidth: 120,width:"15vw" }} size="small" >
      <InputLabel id="demo-select-small-label" > {FormAdress2 &&" בחר כתובת איסוף" || "בחר כתובת"} </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={adress1}
        label="כתובת"
        onChange={handleChange1}
        
      >
       { adresss &&
        adresss.map((ad1)=>(
            <MenuItem 
            key={ad1.code}
            value={ad1.code}>
                {ad1.name}
            </MenuItem>
        ))}        
      </Select>
    </FormControl> 
    { FormAdress2 &&  <FormControl orientation="vertical" id="FormAdress2"  sx={{ mb: 2, minWidth: 120,width:"15vw" }} size="small">
      <InputLabel  id="demo-select-small-label">בחר כתובת החזרה</InputLabel>
     <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={adress2}
        label="Age"
        onChange={handleChange2}
      >
       {adresss && adresss.map((ad1)=>(
            <MenuItem 
            key={ad1.code}
            value={ad1.code}>
                {ad1.name}
            </MenuItem>
        ))}        
      </Select>

    </FormControl>
}
 </div>  
 
}



