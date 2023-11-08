import { Grid, Paper, Rating, Typography } from "@mui/material";

const AttributesCard = ({title, readOnly, attributes = []}) => {
  return (
    <Grid item>
      <Typography variant="h6" sx={{ py: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {attributes.map((item) => (
          <Grid item key={item}>
            <Paper elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
                width: 200
              }}
            >
              <Typography variant="p" sx={{ fontSize: 18 }}>
                {item}
              </Typography>
              <Rating readOnly={readOnly} defaultValue={0.5} precision={0.5} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default AttributesCard;
