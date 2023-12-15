import { Grid, Typography } from "@mui/material"
import { InputSelect } from "./inputs/InputSelect"

export const Position = ({ name, control, options }) => {
  const positions = [
    { label: "Portero", value: "goalkeeper" },
    { label: "Defensa", value: "defender" },
    { label: "Medio", value: "midfielder" },
    { label: "Delantero", value: "forward" },
  ]
  return (
    <Grid container gap={2} mt={4}>
      <Grid item>
        <Typography variant="h5">Posición</Typography>
      </Grid>

      {/* Falta el sistema favorito */}

      <Grid container gap={2}>
        <Grid item>
          <InputSelect
            label="Posición principal"
            name={"position"}
            control={control}
            options={positions}
          />
        </Grid>

        <Grid item>
          <InputSelect
            label="Posición Secundaria"
            name={"positionSecondary"}
            control={control}
            options={positions}
          />
        </Grid>

        {/* Falta el rol en el campo */}

      </Grid>
    </Grid>
  )
}
