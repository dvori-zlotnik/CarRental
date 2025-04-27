import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import { AddOther } from './AddOther';
import { AddCar } from './add/AddCar';
import { AddModel } from './add/AddModel';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { DeleteCar } from './Delete/DeleteCar';
import './style_manager.css'
import {ListUser} from './Users';
import AlignItemsList from '../ListUsers';
import DelList from '../ListToDelete';
import Delete from './Delete/Delete'
import { ListRentals } from './Rentals';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'users',
    title: 'מנויים',
    icon: <PeopleAltIcon />,
  },
  {
    segment: 'orders',
    title: 'השכרות',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'update',
    title: 'עדכונים',
  },
  {
    segment: 'add',
    title: 'הוספה',
    icon: <PlaylistAddIcon />,
    children: [
      {
        segment: 'car',
        title: 'רכב',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'model',
        title: 'מודל',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'other',
        title: 'עוד',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'delete',
    title: 'מחיקה',
    icon: <DeleteSweepIcon />,
    children: [
        {
          segment: 'car',
          title: 'רכב',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'model',
          title: 'מודל',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'other',
          title: 'עוד',
          icon: <DescriptionIcon />,
        },
      ],
  },
];


function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
  height,
  content: '"ghkjl "',
}));

const Body =({route})=>
{
  switch (route){
      case "/add/other" :
       return <AddOther></AddOther> 
      case  "/add/car" :return <AddCar></AddCar> 
      case "/delete/model" :return <Delete></Delete> 
      case "/delete/car":return <DelList></DelList>
      case "/add/model":return <AddModel></AddModel>
      case "/users" :return<ListUser></ListUser>
      case "/orders":return <ListRentals></ListRentals>

  }
}

export const Manager=
() =>{
  const router = useDemoRouter('/dashboard');
console.log(router);

  // Remove this const when copying and pasting into your project.
  return <>
  <div id='manager'>
    {/* <AppProvider
      navigation={NAVIGATION}
      router={router}>
          {/* <DashboardLayout> */}
          <Body route={router.pathname} ></Body>
       {/* </DashboardLayout> */}
    {/* </AppProvider> */}
    </div>
    </>
}
