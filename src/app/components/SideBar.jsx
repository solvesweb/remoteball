import { EditNote, Logout, Person } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const SideBar = ({ open, onClose }) => {
  return (
    <Box>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Toolbar
          sx={{ display: "flex", flexDirection: "column", width: 200, p: 2 }}
        >
          <Avatar sx={{ m: 2 }} alt="Monchi" src="../src/assets/monchi.jpg" />
          <Typography variant="h6">Monchi</Typography>
        </Toolbar>

        <List>
          <Divider />
          
          <ListItemButton components={<Link/>} to="/profile">
            
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            
          </ListItemButton>
          
          <Divider />
          <ListItemButton components={<Link/>} to="/app">
            <ListItemIcon>
              <EditNote />
            </ListItemIcon>
            <ListItemText primary="Informes" />
          </ListItemButton>
          <Divider />

          <ListItemButton components={<Link/>} to="/">
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </Box>
  );
};
