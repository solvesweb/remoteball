import { Grid, Typography } from "@mui/material"
import { InputSelect } from "./inputs/InputSelect"

export const Position = ({ name, control, label, options }) => {
  return (
    <Grid container gap={2} mt={4}>
      <Grid item>
        <Typography variant="h5">Posición</Typography>
      </Grid>

      <Grid container gap={2}>
        <Grid item>
          <InputSelect
            label="Posición principal"
            name={"position"}
            control={control}
            options={[
              { label: "Portero", value: "goalkeeper", control: {control} },
              { label: "Defensa", value: "defender", control: {control} },
              { label: "Medio", value: "midfielder", control: {control} },
              { label: "Delantero", value: "forward", control: {control} },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
