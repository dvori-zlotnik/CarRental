import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Popup}from '../components/Popup1'
import { CalendarToday, CameraIndoor, LockClock } from '@mui/icons-material';
import { CityCar } from './CityCar';
import { Cars } from './Cars';

const steps = [
  {
    label: ' בחירת סניף איסוף והחזרה',
    contentButton:'סוג הזמנה'+<LockClock/>,
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'מסלול וזמנים',
    contentButton:' מסלול וזמנים'+<CalendarToday/>,
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'בחירת רכב',
    contentButton:' בחירת רכב'+<CameraIndoor/>,
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export const  StepAdd=()=> {

let param = useParams();
const[rental,SetRental]=useState();
const [activeStep,setActiveStep]=useState(0);
  return <>
    <Box sx={{ Width: '100%', }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step) => (
          <Step  key={step.label}>
            <StepLabel >
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                {activeStep==2 ? <Cars rental={rental} setRental={SetRental}></Cars> :
                  <Popup rental={rental}  SetRental={SetRental} setActiveStep={setActiveStep} activeStep={activeStep}></Popup>  
                }     
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
    </>
}