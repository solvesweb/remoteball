import { AddCircle } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AtributesCard from "../components/AttributesCard";
import { useForm } from "react-hook-form";
import { usePosition } from "../../hooks";

const technicalAttributes = [
  "Cabeceo",
  "Centros",
  "Control",
  "Entradas",
  "Pases",
  "Penalties",
  "Pierna no hábil",
  "Regate",
  "Remate",
  "Córners",
  "Tiros lejanos",
  "Tiros libres",
];

const tacticalAttributes = [
  "Anticipación",
  "Cierre de espacios",
  "Colocación",
  "Creación de juego",
  "Desmarques",
  "Polivalencia",
  "Presión tras pérdida",
  "Segunda jugada",
  "Fase Ofensiva",
  "Fase Defensiva",
  "Transición A-D",
  "Transición D-A",
];

const physicalAttributes = [
  "Aceleración",
  "Agilidad",
  "Alcance de salto",
  "Duelos aéreos",
  "Equilibrio",
  "Fuerza",
  "Resistencia",
  "Velocidad",
];

const mentalAttributes = [
  "Agresividad",
  "Concentración",
  "Juego en equipo",
  "Liderazgo",
  "Sacrificio",
  "Serenidad",
  "Toma de decisiones",
  "Visión de juego",
];

export const Prueba2 = () => {
  const [position, handleChange] = usePosition("Portero");

  const [position2, handleChange2] = usePosition("Defensa");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      spacing={2}
      sx={{ m: 1 }}
      maxWidth="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item>
          <Typography variant="h4">Nuevo Informe</Typography>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography variant="h6" sx={{ py: 2 }}>
              Datos del Informe
            </Typography>
          </Grid>
          <Grid container display="flex" spacing={2}>
            <Grid item>
              <TextField
                id="reportDate"
                label="Fecha del Informe"
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("reportDate")}
              />
            </Grid>
            <Grid item>
              <TextField
                id="matchNumber"
                label="Número de partidos"
                variant="outlined"
                type="number"
                {...register("matchNumber")}
              />
            </Grid>
            <Grid item>
              <TextField
                id="browsedFor"
                type="text"
                label="Ojeado para"
                variant="outlined"
                {...register("browsedFor")}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item>
            <Typography variant="h6" sx={{ py: 2 }}>
              Datos del Jugador
            </Typography>
          </Grid>
          <Grid container display="flex" spacing={2}>
            <Grid item>
              <TextField
                id="name"
                {...register("name")}
                type="text"
                label="Nombre"
                variant="outlined"
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                id="lastname"
                {...register("lastname")}
                type="text"
                label="Apellidos"
                variant="outlined"
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                id="shortName"
                label="Nombre corto"
                variant="outlined"
                {...register("shortName")}
                type="text"
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                id="locality"
                {...register("locality")}
                type="text"
                label="Localidad"
                variant="outlined"
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                id="birthdate"
                type="date"
                {...register("birthdate")}
                label="Fecha de nacimiento"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="country"
                label="País"
                variant="outlined"
                {...register("country")}
                autoComplete="off"
              />
            </Grid>
            <Grid item>
              <TextField
                id="height"
                {...register("height")}
                type="number"
                label="Altura"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="weight"
                label="Peso"
                variant="outlined"
                {...register("weight")}
              />
            </Grid>
            <Grid item>
              <TextField
                id="number"
                {...register("number")}
                type="number"
                label="Dorsal"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid item>
            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Contrato
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  id="club"
                  label="Club"
                  variant="outlined"
                  {...register("club")}
                  autoComplete="off"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="contractEndDate"
                  type="date"
                  label="Fin de contrato"
                  variant="outlined"
                  {...register("contractEndDate")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="valueMarket"
                  type="number"
                  label="Valor de mercado"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  id="agent"
                  {...register("agent")}
                  label="Representante"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Palmarés
              </Typography>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Añadir logro"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <IconButton aria-label="delete" size="large" color="primary">
                  <AddCircle />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item>
              <Grid item>
                <Typography variant="h6" sx={{ py: 2 }}>
                  Posición
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <InputLabel id="positionPrimaryLabel">
                    Posición natural
                  </InputLabel>
                  <Select
                    labelId="positionPrimaryLabel"
                    id="positionPrimary"
                    sx={{ minWidth: 160 }}
                    {...register("positionPrimary")}
                    label="Posición natural"
                    value={position}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Portero"}>Portero</MenuItem>
                    <MenuItem value={"Defensa"}>Defensa</MenuItem>
                    <MenuItem value={"Centrocampista"}>Centrocampista</MenuItem>
                    <MenuItem value={"Delantero"}>Delantero</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <InputLabel id="positionSecondaryLabel">
                    Posición secundaria
                  </InputLabel>
                  <Select
                    labelId="positionSecondaryLabel"
                    id="positionSecondary"
                    {...register("positionSecondary")}
                    label="Posición secundaria"
                    value={position2}
                    onChange={handleChange2}
                    sx={{ minWidth: 160 }}
                  >
                    <MenuItem value={"Portero"}>Portero</MenuItem>
                    <MenuItem value={"Defensa"}>Defensa</MenuItem>
                    <MenuItem value={"Centrocampista"}>Centrocampista</MenuItem>
                    <MenuItem value={"Delantero"}>Delantero</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <InputLabel id="demo-simple-select-standard-label">
                    Pierna dominante
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    sx={{ minWidth: 160 }}
                  >
                    <MenuItem>Izquierda</MenuItem>
                    <MenuItem>Derecha</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Descripción del jugador
              </Typography>
              <Grid>
                <TextField
                  id="filled-multiline-flexible"
                  label="Describe al jugador"
                  variant="filled"
                  multiline
                  maxRows={10}
                  sx={{ minWidth: 600 }}
                />
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Sistema
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Trayectoria
              </Typography>
            </Grid>

            <AtributesCard
              title="Atributos Técnicos"
              attributes={technicalAttributes}
              name={"half-rating"}
            />
            <AtributesCard
              title="Atributos Tácticos"
              attributes={tacticalAttributes}
              name={"half-rating"}
            />
            <AtributesCard
              title="Atributos Físicos"
              attributes={physicalAttributes}
              name={"half-rating"}
            />
            <AtributesCard
              title="Atributos Mentales"
              attributes={mentalAttributes}
              name={"half-rating"}
            />

            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Video Informe
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Url video"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="h6" sx={{ py: 2 }}>
                Conclusión
              </Typography>

              <Grid container alignItems="center" spacing={4}>
                <Grid item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Conclusión final"
                    variant="filled"
                    multiline
                    maxRows={4}
                    sx={{ minWidth: 300 }}
                  />
                </Grid>
                <Grid item>
                  <InputLabel id="demo-simple-select-standard-label">
                    Decisión
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    sx={{ minWidth: 160 }}
                  >
                    <MenuItem>Fichar</MenuItem>
                    <MenuItem>Seguir</MenuItem>
                    <MenuItem>Descartar</MenuItem>
                  </Select>
                </Grid>
                <Grid item display="flex" justifyContent="end">
                  <Button type="submit" variant="contained">
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
