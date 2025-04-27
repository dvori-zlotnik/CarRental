import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box } from '@mui/material';
import { AddCircleOutline, CreditCard, Man, Man2, Man2Sharp, ManageSearch, ManRounded, Password, PasswordRounded } from '@mui/icons-material';
import {Popup}from '../components/Popup1'
import StepContent from '@mui/material/StepContent';
import { useState } from 'react';
import { Cars } from './Cars';
import { useNavigate, useParams } from 'react-router-dom';
import { getCarByCode } from '../data/api';
import { Payment } from './payment';

const QontoStepIconRoot = styled('div')(({ theme }) => ({
  color: '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  ...theme.applyStyles('dark', {
    color: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: '#784af4',
      },
    },
  ],
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
       "#fb2576"
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
       "#fb2576"
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
          backgroundColor:
       "#fb2576"
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
        backgroundColor:
       "#fb2576"
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
      backgroundColor:
       "#fb2576"
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
          backgroundColor:
       "#fb2576"
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const icons = {
    1: <LocationOnIcon />,
    2: <AccessAlarmIcon />,
    3: <DirectionsCarFilledIcon />,
  };



  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['מקום איסוף והחזרה', 'זמנים', 'בחירת רכב'];

export  const Rental=()=> {
    const[rental,setRental]=useState({});
    const [activeStep,setActiveStep]=useState(0);
    const navigate = useNavigate()
    const params = useParams();
    // if(params.car!=0)
    //   setRental({...rental,code_car:getCarByCode(params.car)})
  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            <StepContent>
            <Box>
                  {activeStep!==2 &&<Popup rental={rental}  SetRental={setRental} setActiveStep={setActiveStep} activeStep={activeStep}></Popup> }     
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
          {activeStep==2 && <Cars rental={rental} setRental={setRental}></Cars>}
  </>

  );
}

