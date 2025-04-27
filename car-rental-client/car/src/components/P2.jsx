import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from 'react-redux';
import { set } from '../data/rentSlice';

export const Pop2=({SetRental,rental})=>{
    const inputRef = React.useRef(null);
    const dispach = useDispatch()
   return<>
    <Stack spacing={1.5} sx={{ minWidth: 300 }} >
    <InputLabel id="demo-select-small-label" > תאריך איסוף  </InputLabel>
      <Input
        labelId="demo-select-small-label"
        type="date"
        onChange={(event)=>
          {
            SetRental({...rental, date : event.target.value})
            dispach(set({...rental, date : event.target.value}))
          }
        }
        slotProps={{
          input: {
            min: '2023-06-07',
            max: '2025-12-14',
          },
        }}
      />
       <InputLabel id="demo-select-small-label" >  תאריך החזרה  </InputLabel>
      <Input
        labelId="demo-select-small-label"
        type="date"
        onChange={(event)=>
          {

            SetRental({...rental, returnDate:event.target.value})
            console.log(event.target.value)
            console.log(rental)
           dispach(set({...rental,returnDate:event.target.value}))
            
          }}

        slotProps={{
          input: {
            min: '2023-06-07',
            max: '2025-12-14',
          },
        }}
      />
    </Stack>
  </>
}