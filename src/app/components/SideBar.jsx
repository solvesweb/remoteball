import { EditNote, Logout, Person } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../store/auth";

export const SideBar = ({ open, onClose }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <Box>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Toolbar
          sx={{ display: "flex", flexDirection: "column", width: 200, p: 2 }}
        >
          <Avatar sx={{ m: 2 }} alt="Avatar" src={photoURL} />
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {displayName}
          </Typography>
        </Toolbar>

        <List>
          <Divider />

          <ListItemButton components={<Link />} to="/profile">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>

          <Divider />
          <ListItemButton components={<Link />} to="/app">
            <ListItemIcon>
              <EditNote />
            </ListItemIcon>
            <ListItemText primary="Informes" />
          </ListItemButton>
          <Divider />

          <ListItemButton components={<Link />} to="/" onClick={onLogout}>
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
