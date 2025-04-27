import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./style_home.css"
import { Button } from '@mui/material';
export const Contact = ()=>
{
    return<>
    <img id='title' width={"100%"} src={process.env.PUBLIC_URL+"/images/kesher.png"}></img>
    <div id='contact'>

      <div id='inputs'>
        <div id='f'>
        <TextField
          id="filled-multiline-flexible"
          label="שם פרטי"
          maxRows={4}
          variant="filled"
          sx={{textAlignLast:"end",marginRight:"1vw"}}
        />
        <TextField
          id="filled-textarea"
          label="שם משפחה"
          variant="filled"
          sx={{textAlignLast:"end"}}
        />
                <br></br>
                <br></br>

                </div>
      <div id='second'>
        <TextField
          id="filled-multiline-flexible"
          label="טלפון"
          maxRows={4}
          variant="filled"
          sx={{textAlignLast:"end",marginRight:"1vw"}}
        />
        <TextField
          id="filled-textarea"
          label="מייל"
          variant="filled"
          sx={{textAlignLast:"end"}}
        />
                <br></br>
                <br></br>
      </div>
        <TextField
          id="filled-multiline-static"
          label="ההודעה שלך"
          multiline
          fullWidth
          rows={2}
          variant="filled"
          sx={{textAlignLast:"end"}}
        />
        <br></br>
        <br></br>

          <Button id="send" sx={{bgcolor:"#00dede"}} variant='contained'>צור קשר</Button>

        </div>
        <div id='imagee'>
      <img src={process.env.PUBLIC_URL+"/images/are.png"}></img>
      </div>
      </div>
    
    </>
}


export default function MultilineTextFields() {
  return (
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
       //   rows={2}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
  );
}
