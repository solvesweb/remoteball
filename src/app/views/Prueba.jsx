import { useForm } from "react-hook-form";
import { ReportData } from "../components/ReportData";
import { Button, Grid } from "@mui/material";
import { PlayerData } from "../components/PlayerData";
import { Contract } from "../components/Contract";
import { Honours } from "../components/Honours";
import { Position } from "../components/Position";
import { PlayerDetails } from "../components/PlayerDescription";
import { VideoReport } from "../components/VideoReport";
import { FirebaseDB } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

export const Prueba = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      reportDate: "",
      reportedFor: "",
      club: "",
      name: "",
      lastname: "",
      nickname: "",
      marketValue: 0,
      matches: 1,
      city: "",
      date: "",
      weight: 1,
      height: 1,
      number: 0,
      nationality: "",
      birthdate: "",
      contractEnd: "",
      agent: "",
      honours: [],
      position: "",
      positionSecondary: "",
      description: "",
      video: "",
      technicalAttributes: [],
    },
  });

  const onSubmit = async (data) => {

    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    console.log(uid);

    const finalData = {
      ...data,
    };

    const reportsRef = collection(FirebaseDB, `users/${uid}/reports`);

    addDoc(reportsRef, finalData);
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

          {/* <Typography variant="h5" sx={{ mt: 4 }}>Atributos del Jugador</Typography>

          <AttributesData title={"Atributos Técnicos"} control={control} attributes={technicalAttributes} />
          <AttributesData title={"Atributos Tácticos"} control={control} attributes={tacticalAttributes} />
         
          <AttributesData title={"Atributos Físicos"} control={control} />
          <AttributesData title={"Atributos Tácticos"} control={control} />
          <AttributesData title={"Atributos Mentales"} control={control} /> */}

          <VideoReport control={control} />

          <Button type="submit" variant="contained" sx={{ mt: 4 }}>
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
