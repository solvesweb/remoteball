import { Grid, Typography } from "@mui/material";
import { InputAreaTextField } from "./inputs/InputAreaTextField";

export const PlayerDetails = ({ name, control, label }) => {
  return (
    <Grid container gap={2} mt={4}> 
      <Grid item>
        <Typography variant="h5">Detalles del jugador</Typography>
      </Grid>

      <Grid container>
        <InputAreaTextField
          label="Descripción del jugador"
          name={"description"}
          control={control}        
          
        />
      </Grid>
    </Grid>
  );
};
