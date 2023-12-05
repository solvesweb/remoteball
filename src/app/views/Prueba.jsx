import { useForm } from "react-hook-form";
import { ReportData } from "../components/ReportData";
import { Button, Grid} from "@mui/material";
import { PlayerData } from "../components/PlayerData";
import { Contract } from "../components/Contract";
import { Honours } from "../components/Honours";
import { Position } from "../components/Position";
import { PlayerDetails } from "../components/PlayerDescription";

export const Prueba = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      reportDate: "",
      reportedFor: "",
      club: "",
      name: "",
      lastname: "",
      nickname: "",
      matches: 1,
      city: "",
      date: "",
      weight: 0,
      height: 0,
      number: 0,
      nationality: "",
      birthdate: "",
      contractEnd: "",
      value: 0,
      agent: "",
      honours: [],
      position: ""
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      maxWidth="lg"
      alignItems={"center"}
      sx={{ p: 4, borderRadius: 4, boxShadow: 2 }}
    >
      <Grid container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReportData control={control} />

          <PlayerData control={control} />

          <Contract control={control} />

          <Honours control={control} />

          <Position control={control} />

          <PlayerDetails control={control} />


          <Button type="submit" variant="contained" sx={{ mt: 4 }}>
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
