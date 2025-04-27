import { useEffect, useRef, useState } from "react"
import * as React from 'react';
import {addModel, getCompany, getDriveType, getTypeVehicle} from "../../../data/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SelectSmall } from "../../Select";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddModel=()=>
{    
    const [model_,setModel]=useState();
    const[company,setCompany] = useState()
    const[typeVehicles,setTypeVehicles] =useState()
    const[driveType,setDriveType] = useState()
    const[companies,setCompanies] = useState()
    const[typeVehicless,setTypeVehicless] =useState()
    const[driveTypes,setDriveTypes] = useState()
    useEffect(()=>
    {
      getCompany().then(x=>
      {
        const a=x.data
        setCompanies(a)
      }
      ).catch(e=>
        console.log(e)
      )
      getTypeVehicle().then(x=>
        {
          const a=x.data
          setTypeVehicless(a)
        }
        ).catch(e=>
          console.log(e)
        )
        getDriveType().then(x=>
            {
              const a=x.data
              setDriveTypes(a)
            }
            ).catch(e=>
              console.log(e)
            )
    },[])
    const add =()=>
    {
        // console.log(modelRef.current. (React.ChangeEvent<HTMLInputElement>).target.value)
        const model=
        {
            
            codeCompany:company,
            driveType_code:driveType,
            typeVehicles_code:typeVehicles,
            model_name:model_,
            driveType:"",
            typeVehicles:"",
            company:"",
            image_company:""
        }
        addModel(model)

    }
  return <>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="תיאור" variant="filled" onBlur={(event) => {
             setModel(event.target.value)}}
        // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //     setName(event.target.value);
         />
        {companies && <SelectSmall list={companies} value={company} set={setCompany} text={"חברה"} father={"add"}></SelectSmall>}
       { driveTypes && <SelectSmall list={driveTypes} value={driveType} set={setDriveType} text={"הנעה"} father={"add"}></SelectSmall>}
       { typeVehicless && <SelectSmall list={typeVehicless} value={typeVehicles} set={setTypeVehicles} text={"סוג"} father={"add"}></SelectSmall>}
            {/* <Stack direction="row" spacing={2}> */}
      <Button variant="contained" onClick={add} endIcon={<AddCircleOutlineIcon />}>הוספה
      </Button>
    {/* </Stack> */}
    </Box>
    </>
}