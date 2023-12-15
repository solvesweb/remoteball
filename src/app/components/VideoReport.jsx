import { Grid, Typography } from "@mui/material";
import { InputTextField } from "./inputs/InputTextField";

export const VideoReport = ({ name, control, label }) => {
  return (
    <Grid container gap={2} mt={4}>
      <Grid item>
        <Typography variant="h5">Reporte en Video</Typography>
      </Grid>

      <Grid container gap={2}>
        <Grid item>
          <InputTextField
            label="URL del video"
            name={"video"}
            control={control}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
