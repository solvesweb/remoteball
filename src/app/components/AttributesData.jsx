import { Grid, Paper, Rating, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

export const AttributesData = ({
  name,
  label,
  control,
  title,
  attributes = [],
}) => {
 

  return (
    <Grid item>
      <Typography variant="h6" sx={{ py: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {attributes.map((attribute) => (
          <Grid item key={attribute.name}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                width: 240,
              }}
            >
              <Controller
                name={attribute.name}
                control={control}
                defaultValue={3}
                render={({ field }) => (
                  <Grid container direction="column" spacing={1}>
                    <Typography variant="p" sx={{ fontSize: 18 }}>
                      {attribute.label}
                    </Typography>

                    <Rating
                      name={name}
                      label={label}
                      precision={0.5}
                      onChange={(_, value) => field.onChange(value)}
                    />
                  </Grid>
                )}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
