import { Grid, Typography } from "@mui/material";
import { InputNumberField } from "./inputs/InputNumberField";
import { InputTextField } from "./inputs/InputTextField";
import { InputDateField } from "./inputs/InputDateField";

export const PlayerData = ({ name, control, label }) => {
  return (
    <Grid container gap={2} mt={4}>
      <Grid item >
        <Typography variant="h5">Datos del Jugador </Typography>
      </Grid>

      <Grid container gap={2}>
        <Grid item>
          <InputTextField label="Nombre" name={"name"} control={control} />
        </Grid>

        <Grid item>
          <InputTextField
            label="Apellido"
            name={"lastname"}
            control={control}
          />
        </Grid>

        <Grid item>
          <InputTextField label="Apodo" name={"nickname"} control={control} />
        </Grid>

        <Grid item>
          <InputTextField label="Localidad" name={"city"} control={control} />
        </Grid>

        <Grid item>
          <InputDateField
            label="Fecha de Nacimiento"
            name={"birthdate"}
            control={control}
          />
        </Grid>

        <Grid item>
          <InputTextField
            label="Nacionalidad"
            name={"nationality"}
            control={control}
          />
        </Grid>

        <Grid item>
          <InputNumberField label="Altura en cms" name={"height"} control={control} />
        </Grid>

        <Grid item>
          <InputNumberField label="Peso en kg" name={"weight"} control={control} />
        </Grid>

        <Grid item>
          <InputNumberField name={"number"} label="Dorsal" control={control} />
        </Grid>
      </Grid>
    </Grid>
  );
};
