import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NoCrash } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { pink } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function FolderList({year,num,city}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, display:"flex"}}>
        {/* {gear && */}
         <ListItem >
   <ListItemText sx={{ color: "#fb2576",textAlign:"right" }} primary="     גיר אוטומטי     " />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "white",border: pink[500] }}>
            <NoCrash color={"#EC058E"}sx={{ color:'#fb2576' }}></NoCrash>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
  
      <ListItem>
      <ListItemText sx={{ color:'#fb2576' ,textAlign:"right"  }} primary={year} />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "white",borderColor:'#fb2576'  }}>
            <CalendarMonthIcon sx={{ color:'#fb2576'  }}/>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem>
      <ListItemText sx={{ color:'#fb2576' ,textAlign:"right"  }} primary={" "+num + " מושבים "} />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "white",borderColor:'#fb25762'  }}>
            <PeopleAltIcon sx={{ color: '#fb2576'  }}></PeopleAltIcon>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem>
      <ListItemText sx={{ color:'#fb2576' ,textAlign:"right"  }} primary={city} />
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "white",borderColor:'#fb2576'  }}>
            <LocationOnIcon sx={{ color:'#fb2576'  }}></LocationOnIcon>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}
