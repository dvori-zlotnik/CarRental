import * as React from 'react';
import {
  Box, Drawer, List, ListItemButton, ListItemText, Collapse, Toolbar,
  AppBar, Typography, CssBaseline, Divider, Avatar
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CategoryIcon from '@mui/icons-material/Category';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, Outlet, useLocation } from 'react-router-dom';

const drawerWidth = 250;

const menu = [
  {
    label: 'הוספה',
    icon: <AddCircleIcon sx={{ color: '#00dede' }} />,
    children: [
      { label: 'רכב', icon: <DirectionsCarIcon />, path: '/manager/add/car' },
      { label: 'מודל', icon: <CategoryIcon />, path: '/manager/add/model' },
      { label: 'אחרים', icon: <MoreHorizIcon />, path: '/manager/add/other' },
    ],
  },
  {
    label: 'מחיקה',
    icon: <DeleteIcon sx={{ color: '#fb2576' }} />,
    children: [
      { label: 'רכב', icon: <DirectionsCarIcon />, path: '/manager/delete/car' },
      { label: 'מודל', icon: <CategoryIcon />, path: '/manager/delete/model' },
      { label: 'אחרים', icon: <MoreHorizIcon />, path: '/manager/delete/other' },
    ],
  },
  {
    label: 'משתמשים',
    icon: <PeopleIcon sx={{ color: '#00bcd4' }} />,
    path: '/manager/users',
  },
  {
    label: 'הזמנות',
    icon: <AssignmentIcon sx={{ color: '#fb2576' }} />,
    path: '/manager/orders',
  },
];

export default function AdminLayout() {
  const [openAdd, setOpenAdd] = React.useState(true);
  const [openDelete, setOpenDelete] = React.useState(false);
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', direction: 'rtl', fontFamily: 'Assistant, Arial, sans-serif', bgcolor: '#f5f7fa' }}>
      <CssBaseline />
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#fff',
          color: '#222',
          boxShadow: '0 2px 8px #eee',
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          minHeight: 70,
        }}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Avatar
            src={process.env.PUBLIC_URL + '/images/צילום מסך 2024-12-19 175800.png'}
            sx={{ width: 48, height: 48, ml: 2 }}
            alt="logo"
          />
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, color: '#222', fontFamily: 'Assistant' }}>
            ממשק מנהל - Bibilease
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#fff',
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            boxShadow: '2px 0 12px #eee',
            border: 'none',
            pt: 2,
          },
        }}
      >
        <Toolbar sx={{ minHeight: 70 }} />
        <Box sx={{ px: 2 }}>
          <List>
            {/* הוספה */}
            <ListItemButton
              onClick={() => setOpenAdd(!openAdd)}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: openAdd ? '#e0f7fa' : 'transparent',
                transition: '0.2s',
              }}
            >
              {menu[0].icon}
              <ListItemText primary={menu[0].label} primaryTypographyProps={{ fontWeight: 700, fontFamily: 'Assistant' }} />
              {openAdd ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAdd} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu[0].children.map((item) => (
                  <ListItemButton
                    key={item.label}
                    component={Link}
                    to={item.path}
                    selected={location.pathname === item.path}
                    sx={{
                      pr: 4,
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: location.pathname === item.path ? '#00dede22' : 'transparent',
                      '&.Mui-selected': {
                        bgcolor: '#00dede33',
                        color: '#00bcd4',
                        fontWeight: 700,
                      },
                    }}
                  >
                    {item.icon}
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            {/* מחיקה */}
            <ListItemButton
              onClick={() => setOpenDelete(!openDelete)}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: openDelete ? '#ffe3ef' : 'transparent',
                transition: '0.2s',
              }}
            >
              {menu[1].icon}
              <ListItemText primary={menu[1].label} primaryTypographyProps={{ fontWeight: 700, fontFamily: 'Assistant' }} />
              {openDelete ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDelete} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu[1].children.map((item) => (
                  <ListItemButton
                    key={item.label}
                    component={Link}
                    to={item.path}
                    selected={location.pathname === item.path}
                    sx={{
                      pr: 4,
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: location.pathname === item.path ? '#fb257622' : 'transparent',
                      '&.Mui-selected': {
                        bgcolor: '#fb257633',
                        color: '#fb2576',
                        fontWeight: 700,
                      },
                    }}
                  >
                    {item.icon}
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <Divider sx={{ my: 2 }} />
            {/* רשימות */}
            <ListItemButton
              component={Link}
              to={menu[2].path}
              selected={location.pathname === menu[2].path}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: location.pathname === menu[2].path ? '#e0f7fa' : 'transparent',
                '&.Mui-selected': {
                  bgcolor: '#00dede33',
                  color: '#00bcd4',
                  fontWeight: 700,
                },
              }}
            >
              {menu[2].icon}
              <ListItemText primary={menu[2].label} primaryTypographyProps={{ fontWeight: 700, fontFamily: 'Assistant' }} />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to={menu[3].path}
              selected={location.pathname === menu[3].path}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: location.pathname === menu[3].path ? '#ffe3ef' : 'transparent',
                '&.Mui-selected': {
                  bgcolor: '#fb257633',
                  color: '#fb2576',
                  fontWeight: 700,
                },
              }}
            >
              {menu[3].icon}
              <ListItemText primary={menu[3].label} primaryTypographyProps={{ fontWeight: 700, fontFamily: 'Assistant' }} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      {/* תוכן ראשי */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          bgcolor: '#f5f7fa',
          minHeight: '100vh',
          borderRadius: 4,
          mt: 8,
          boxShadow: '0 2px 8px #eee',
          transition: '0.2s',
        }}
      >
        <Toolbar sx={{ minHeight: 70 }} />
        <Outlet />
      </Box>
    </Box>
  );
}