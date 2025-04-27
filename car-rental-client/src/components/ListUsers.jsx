import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getUsers } from '../data/api';


export default function ListUsers() {
    
    const [users,setUsers] = React.useState()

    React.useEffect(()=>{
              getUsers().then(x=>
              {
                const a=x.data
                setUsers(a)
                console.log(users)
              }
              ).catch(e=>
                console.log(e)
              )
    },[])
    console.log(users)

  return (
    <>
    { users &&
     users.map(user=>
        {
            <>
            {console.log(user)}
            <p color='red'>{user.name}</p>
              <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    {user.name}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
      
      <Divider variant="inset" component="li" />
      </>
        }
    )
}
        </>
  );
}
