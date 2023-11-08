import { Google } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      height='85vh'
    >
      <Grid item>
        <Typography variant="h2" textAlign="center">
          Bienvenido
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5" textAlign="center">
          Inicia sesión para continuar
        </Typography>
      </Grid>

      <Grid item>
        <Link to='/app'>
          <Button variant="contained" startIcon={<Google />}>
            Iniciar sesión con Google
          </Button>
        </Link>
        
      </Grid>

      <Grid item>
        <Typography variant="p" textAlign="center">
          Al iniciar sesión aceptas nuestros términos y condiciones.
        </Typography>
      </Grid>
    </Grid>
  );
};
