import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { deleteCar, getCars } from '../data/api';
import { Divider } from '@mui/material';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function DelList() {
    const [cars,setCars]=React.useState()
    React.useEffect(()=>
    {
        getCars().then(x=>
            setCars(x.data)
        
        )},[]
    )

  return (
          <Demo>
            <List>
              {cars && cars.map(car=>
                <ListItem sx={{width:"30%",borderColor:"#00dede",borderWidth:"thick"}}
                  secondaryAction={
                    <IconButton onClick={()=>deleteCar(car.code)} edge="start" aria-label="delete">
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
                    primary={car.model_name+" "+car.year+" "+car.city}
                  />
                </ListItem>,
                <Divider sx={{bgcolor:"#00dede"}}></Divider>
              )}
            </List>
          </Demo>

  );
}
