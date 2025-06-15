import * as React from 'react';
import { Box, Drawer, List, ListItemButton, ListItemText, Collapse, Toolbar, AppBar, Typography, CssBaseline } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CategoryIcon from '@mui/icons-material/Category';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

export default function AdminLayout() {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  return (
    <Box sx={{ display: 'flex', direction: 'rtl', fontFamily: 'Assistant, Arial, sans-serif' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#fff', color: '#222', boxShadow: 0 }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, color: '#222' }}>
            ממשק מנהל - Bibilease
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#f7f7f7' },
        }}
      >
        <Toolbar />
        <List>
          {/* הוספה */}
          <ListItemButton onClick={() => setOpenAdd(!openAdd)}>
            <AddCircleIcon color="primary" sx={{ ml: 1 }} />
            <ListItemText primary="הוספה" primaryTypographyProps={{ fontWeight: 600 }} />
            {openAdd ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAdd} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component={Link} to="/manager/add/car" sx={{ pr: 4 }}>
                <DirectionsCarIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="רכב" />
              </ListItemButton>
              <ListItemButton component={Link} to="/manager/add/model" sx={{ pr: 4 }}>
                <CategoryIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="מודל" />
              </ListItemButton>
              <ListItemButton component={Link} to="/manager/add/other" sx={{ pr: 4 }}>
                <MoreHorizIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="אחרים" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* מחיקה */}
          <ListItemButton onClick={() => setOpenDelete(!openDelete)}>
            <DeleteIcon color="error" sx={{ ml: 1 }} />
            <ListItemText primary="מחיקה" primaryTypographyProps={{ fontWeight: 600 }} />
            {openDelete ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openDelete} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component={Link} to="/manager/delete/car" sx={{ pr: 4 }}>
                <DirectionsCarIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="רכב" />
              </ListItemButton>
              <ListItemButton component={Link} to="/manager/delete/model" sx={{ pr: 4 }}>
                <CategoryIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="מודל" />
              </ListItemButton>
              <ListItemButton component={Link} to="/manager/delete/other" sx={{ pr: 4 }}>
                <MoreHorizIcon color="action" sx={{ ml: 1 }} />
                <ListItemText primary="אחרים" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* רשימות */}
          <ListItemButton component={Link} to="/manager/users">
            <PeopleIcon color="secondary" sx={{ ml: 1 }} />
            <ListItemText primary="משתמשים" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
          <ListItemButton component={Link} to="/manager/orders">
            <AssignmentIcon color="action" sx={{ ml: 1 }} />
            <ListItemText primary="הזמנות" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#fafafa', minHeight: '100vh' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}