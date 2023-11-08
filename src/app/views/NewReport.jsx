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

export const NewReport = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      spacing={2}
      sx={{ m: 1 }}
      maxWidth='lg'
    >
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
              id="outlined-basic"
              label="Fecha del Informe"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Número de partidos"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Ojeador para"
              variant="outlined"
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
            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Apellidos"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Nombre corto"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Fecha de nacimiento"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Localidad"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="País" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Altura" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Peso" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Dorsal" variant="outlined" />
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
                id="outlined-basic"
                label="Club actual"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Fin de contrato"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Valor de mercado"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Agente"
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
                <InputLabel id="demo-simple-select-standard-label">
                  Posición natural
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ minWidth: 160 }}
                >
                  <MenuItem>Portero</MenuItem>
                  <MenuItem>Defensa</MenuItem>
                  <MenuItem>Centrocampista</MenuItem>
                  <MenuItem>Delantero</MenuItem>
                </Select>
              </Grid>
              <Grid item>
                <InputLabel id="demo-simple-select-standard-label">
                  Posición secundaria
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{ minWidth: 160 }}
                >
                  <MenuItem>Portero</MenuItem>
                  <MenuItem>Defensa</MenuItem>
                  <MenuItem>Centrocampista</MenuItem>
                  <MenuItem>Delantero</MenuItem>
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
                id="outlined-multiline-flexible"
                label="Describe al jugador"
                variant="filled"
                multiline
                maxRows={4}
                sx={{ minWidth: 300 }}
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
            name={'half-rating'}
          />
          <AtributesCard
            title="Atributos Tácticos"
            attributes={tacticalAttributes}
            name={'half-rating'}
          />
          <AtributesCard
            title="Atributos Físicos"
            attributes={physicalAttributes}
            name={'half-rating'}
          />
          <AtributesCard
            title="Atributos Mentales"
            attributes={mentalAttributes}
            name={'half-rating'}
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
                <Button variant="contained">Guardar</Button>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
