import { Button,  Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Grid
      container
      spacing={6}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{py: '8%',px: '10%', minHeight: '100vh'}}
    >
      <Grid item >
        <Typography
          variant="h3"
          sx={{ textTransform: "uppercase", textAlign: "center" }}
        >
          La Plataforma definitiva que conecta Ojeadores y Clubes
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", textAlign: "center" }}
        >
          Crea, edita y comparte tus informes
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", textAlign: "center" }}
        >
          Y si eres un Club, encuentra el jugador ideal para tu equipo
        </Typography>
      </Grid>
      <Grid item>
        <Link to="/login">
          <Button variant="contained" size="large">
            ENTRA YA
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
