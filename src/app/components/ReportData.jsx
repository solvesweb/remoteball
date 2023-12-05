import { Grid, Typography } from "@mui/material";
import { InputTextField } from "./inputs/InputTextField";
import { InputDateField } from "./inputs/InputDateField";
import { InputNumberField } from "./inputs/InputNumberField";

export const ReportData = ({name, control, label}) => {
  
  
  return (
    <Grid container gap={2}>
      <Grid item>
        <Typography variant="h5">Datos del Informe</Typography>
      </Grid>

      <Grid container gap={2}>
        <Grid item>
          <InputDateField label="Fecha del Informe" name={"reportDate"} control={control}/>
        </Grid>

        <Grid item>
          <InputNumberField label="Partidos visualizados" name={"matches"} control={control}/>
        </Grid>

        <Grid item>
          <InputTextField label="Ojeado para:" name={"reportedFor"} control={control}/>
        </Grid>
      </Grid>
    </Grid>
  );
};
