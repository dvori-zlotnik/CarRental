import { useEffect, useRef, useState } from "react"
import { addCar, getCity, getModel } from "../../../data/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SelectSmall } from "../../Select";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from 'react';


export const AddCar = () => {
  // const yearRef=useRef();
  // const numberOfSeatsRef=useRef();
  // const licensePlateRef=useRef();
  // const pricePerHourRef=useRef();
  // const consumptionPerKmRef=useRef();
  // const balanceInLitersRef=useRef();
  const [year, setYear] = useState();
  const [numberOfSeats, setNumber] = useState();
  const [licensePlate, setLicense] = useState();
  const [pricePerHour, setPrice] = useState();
  const [consumptionPerKm, setConsu] = useState();
  const [balanceInLiters, setBalance] = useState();
  const [city, setCity] = useState()
  const [model, setModel] = useState()
  const [cities, setCities] = useState()
  const [models, setModels] = useState()
  const [img, setImg] = useState()
  useEffect(() => {
    getCity().then(x => {
      const a = x.data
      setCities(a)
    }
    ).catch(e =>
      console.log(e)
    )
    getModel().then(x => {
      const a = x.data
      setModels(a)
    }
    ).catch(e =>
      console.log(e)
    )
  }, [])
  const add = () => {
    const car =
    {
      image_company: '',
      company: '',
      code: 1,
      numberOfSeats: numberOfSeats,
      gear: true,
      image: img,
      year: parseInt(year),
      available: true,
      codeModel: model,
      city_code: city,
      licensePlate: licensePlate,
      city: '',
      pricePerHour: parseInt(pricePerHour),
      consumptionPerKm: parseInt(consumptionPerKm),
      balanceInLiters: parseInt(balanceInLiters),
      model_name: '',
      driveType: '',
      typeVehicles: '',
      driveType_code: 0
    }
    addCar(car)
  }
  return <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="שנה" variant="filled" onBlur={(event) => {
        setYear(event.target.value)
      }}
      />
      <TextField id="filled-basic" label="תמונה" variant="filled" onBlur={(event) => {
        setImg(event.target.value)
      }}
      />
      <TextField id="filled-basic" label="מחיר לשעה" variant="filled" onBlur={(event) => {
        setPrice(event.target.value)
      }} />
      <TextField id="filled-basic" label="כמות דלק (בליטרים)" variant="filled" onBlur={(event) => {
        setBalance(event.target.value)
      }} />
      <TextField id="filled-basic" label="צריכת דלק לשעה" variant="filled" onBlur={(event) => {
        setConsu(event.target.value)
      }} />
      <TextField id="outlined-search" label="לוחית רישוי" type="search" />
      <TextField
        id="outlined-number"
        label="מספר מושבים"
        type="number"
        onBlur={(event) => {
          setNumber(parseInt(event.target.value))
        }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      {cities && <SelectSmall list={cities} value={city} set={setCity} text={"עיר"} father={"add"}></SelectSmall>}
      {models && <SelectSmall list={models} value={model} set={setModel} text={"מודל"} father={"add"}></SelectSmall>}
      {/* <Stack direction="row" spacing={2}> */}
      <Button variant="contained" onClick={() => add()} endIcon={<AddCircleOutlineIcon />}>הוספה
      </Button>
      {/* </Stack> */}
    </Box>
  </>

}