import * as React from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';

export default function PaySuccess({code}) {
  return (
      <Alert
        size="lg"
       //  color="success"
        variant="solid"
        invertedColors
        endDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={{
              minWidth: 40,
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
              margin:"0vw",
              padding:"0vw",
              color:"#00dede"

            }}
          >
            <div>
              <Check fontSize="xl2" color='#00dede' />
            </div>
          </AspectRatio>
        }

        sx={{ alignItems: 'flex-start', overflow: 'hidden',bgcolor:"#00dede",width:"20vw",height:"10vw",fontSize:"4vw"
        }}
      >
        <div>
          <Typography level="title-lg" sx={{color:"white",fontSize:"1.5vw",textAlign:"center"}}>תודה שבחרת ביביליס</Typography>
          <Typography level="body-sm" sx={{color:"white",fontSize:"2.2vw",textAlign:"center"}}>
            קוד ההזמנה שלך הוא {code}
          </Typography>
        </div>
        <LinearProgress
          variant="solid"
         //  color="success"
          value={40}
          sx={{
            position: 'absolute',
            bgcolor:"#00dede",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: "10%",
          }}
        />
      </Alert>
  );
}
