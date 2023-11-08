import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({action}) => {
  return (
    <Box>
      <AppBar position="fixed" >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            onClick={action}
            sx={{ mr: 2 }}
            
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ mr: 2 }}>
            RemoteBall
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

{
  /* <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems='center'>
          <Typography variant="h6" noWrap component='div' >RemoteBall</Typography>
          <IconButton>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar> */
}
