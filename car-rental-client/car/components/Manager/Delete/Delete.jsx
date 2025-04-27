import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { Divider } from '@mui/material';
import { deleteModel, getModel } from '../../../data/api';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Delete() {
    const [cars,setCars]=React.useState()
    React.useEffect(()=>
    {
        getModel().then(x=>
            setCars(x.data)
        
        )},[]
    )

  return (
          <Demo>
            <List>
              {cars && cars.map(model=>
                <ListItem sx={{width:"30%",borderColor:"#00dede",borderWidth:"thick"}}
                  secondaryAction={
                    <IconButton onClick={()=>deleteModel(model.code)} edge="start" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <DirectionsCarFilledIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={model.code+" "+model.model_name+" "+model.company+" "+model.size}
                  />
                </ListItem>,
                <Divider sx={{bgcolor:"#00dede"}}></Divider>
              )}
            </List>
          </Demo>

  );
}
