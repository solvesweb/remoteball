import { Grid, Typography } from "@mui/material";
import { InputTextField } from "./inputs/InputTextField";
import { InputDateField } from "./inputs/InputDateField";
import { InputNumberField } from "./inputs/InputNumberField";

export const Contract = ({ name, control, label }) => {
  return (
    <Grid container gap={2} mt={4}>
      <Grid item>
        <Typography variant="h5">Contrato</Typography>
      </Grid>

      <Grid container gap={2}>
        <Grid item>
          <InputTextField label={"Club"} name={"club"} control={control} />
        </Grid>
        <Grid item>
          <InputDateField
            label={"Finalización de Contrato"}
            name={"contractEnd"}
            control={control}
          />
        </Grid>

        <Grid item>
          <InputNumberField
            label={"Valor de Mercado en €"}
            name={"marketValue"}
            control={control}
          />
        </Grid>

        <Grid item>
          <InputTextField
            label={"Representante"}
            name={"agent"}
            control={control}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
