import { Button, Grid, TextField, Typography } from "@mui/material";

export const Profile = () => {
  return (
    <Grid container spacing={2} maxWidth='lg' alignItems="center">
      <Grid item sx={{ m: 2 }} xs={12}>
        <Typography variant="h4">Editar mi perfil</Typography>
      </Grid>

      <Grid item sx={{ m: 2 }}>
        <TextField
          id="outlined-basic"
          label="Nombre de perfil"
          variant="outlined"
        />
      </Grid>
      <Grid item sx={{ m: 2 }}>
        <TextField
          id="outlined-basic"
          label="Localización"
          variant="outlined"
        />
      </Grid>
      <Grid item sx={{ m: 2 }}>
        <TextField id="outlined-basic" label="Sobre mi" variant="outlined" />
      </Grid>
      <Grid item sx={{ m: 2 }}>
        <TextField id="outlined-basic" label="Twitter" variant="outlined" />
      </Grid>
      <Grid item sx={{ m: 2 }}>
        <Button variant="outlined">Guardar Cambios</Button>
      </Grid>
    </Grid>
  );
};
