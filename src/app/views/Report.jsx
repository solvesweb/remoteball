import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AttributesCard from "../components/AttributesCard";
import ToggleButtonDecision from "../components/ToggleButtonDecision";

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

export const Report = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ m: 1 }}
      maxWidth='lg'
    >
      {/* Title of Report */}
      <Grid item>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item>
            <Typography variant="h5">Jugador</Typography>
            <Typography variant="h6">Nacionalidad</Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ width: 120, height: 120 }}
              src="../src/assets/messi.png"
            >
              J
            </Avatar>
          </Grid>

          <Grid item>
            <Avatar
              sx={{ width: 60, height: 60 }}
              src="../src/assets/Inter_Miami.png"
            ></Avatar>
          </Grid>

          <Grid item>
            <Typography variant="h5">Equipo</Typography>
            <Typography variant="h6">Liga</Typography>
          </Grid>

          <Grid item>
            <Typography variant="p">#Dorsal</Typography>
          </Grid>

          <Grid item>
            <Instagram />
            <Facebook />
            <Twitter />
          </Grid>
        </Grid>
        <Grid item textAlign="center" sx={{ p: 2 }}>
          <Typography variant="p">
            Informe realizado por ___ para ___ en fecha.
          </Typography>
        </Grid>

        {/* Player dates */}

        <Grid container id="playerDates" sx={{ my: 4 }}>
          <Grid item>
            <Typography variant="h5">Datos del Jugador</Typography>
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item>
              <Typography variant="p">Edad</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">
                Nacido el 24 junio 1987 en Rosario (Santa Fe)
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">72 kg </Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">170 cms</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Fin de contrato: 31/12/2025</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Valor de mercado: 12.36 M.€</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Agente: Miembro de su familia</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">
                Claúsula de rescisión: 700 M.€
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Honors */}

        <Grid container id="honors" sx={{ my: 2 }}>
          <Grid item>
            <Typography variant="h5">Palmarés</Typography>
          </Grid>

          <Grid container sx={{ my: 2 }} spacing={2}>
            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Logro</TableCell>
                      <TableCell>Equipo</TableCell>
                      <TableCell>Temporada/Año</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th">Balón de Oro</TableCell>
                      <TableCell>Inter Miami</TableCell>
                      <TableCell>2023</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>

        {/* Position */}

        <Grid container id="position" sx={{ my: 2 }}>
          <Grid item>
            <Typography variant="h5">Posición</Typography>
          </Grid>

          <Grid
            container
            display="flex"
            flexDirection="column"
            spacing={2}
            sx={{ my: 2 }}
          >
            <Grid item>
              <Typography variant="p">Fin de contrato: 31/12/2025</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Valor de mercado: 12.36 M.€</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">Agente: Miembro de su familia</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Description */}

        <Grid container id="description" sx={{ my: 2 }}>
          <Grid item>
            <Typography variant="h5">Descripción</Typography>
          </Grid>
          <Grid item sx={{ my: 4 }}>
            <Typography variant="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              veritatis odio officia accusamus labore assumenda ipsum nihil
              quasi fugiat, deleniti possimus mollitia dignissimos fugit
              recusandae voluptates praesentium beatae dolore nesciunt.
            </Typography>
          </Grid>
        </Grid>

        {/* Trayectoria */}
        <Grid item sx={{ my: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Temporada</TableCell>
                  <TableCell align="center">Club</TableCell>
                  <TableCell align="center">PJ</TableCell>
                  <TableCell align="center">Minutos</TableCell>
                  <TableCell align="center">Goles</TableCell>
                  <TableCell align="center">Asistencias</TableCell>
                  <TableCell align="center">Amarillas</TableCell>
                  <TableCell align="center">Rojas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" component="th">
                    2022/23
                  </TableCell>
                  <TableCell align="center">Inter Miami</TableCell>
                  <TableCell align="center">36</TableCell>
                  <TableCell align="center">4000</TableCell>
                  <TableCell align="center">24</TableCell>
                  <TableCell align="center">23</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Attributes */}

        <Grid container id="description" sx={{ my: 4 }}>
          <Grid item>
            <Typography variant="h5">Atributos</Typography>
          </Grid>
          <Grid item sx={{ my: 2 }}>
            <AttributesCard
              title="Atributos Técnicos"
              attributes={technicalAttributes}
              readOnly={true}
            />
          </Grid>
          <Grid item sx={{ my: 2 }}>
            <AttributesCard
              title="Atributos Tácticos"
              attributes={tacticalAttributes}
              readOnly={true}
            />
          </Grid>
          <Grid item sx={{ my: 4 }}>
            <AttributesCard
              title="Atributos Mentales"
              attributes={mentalAttributes}
              readOnly={true}
            />
          </Grid>
          <Grid item sx={{ my: 4 }}>
            <AttributesCard
              title="Atributos Físicos"
              attributes={physicalAttributes}
              readOnly={true}
            />
          </Grid>
        </Grid>

        {/* Video */}
        <Grid
          container
          display="flex"
          flexDirection="column"
          id="video"
          spacing={2}
          sx={{ my: 4 }}
        >
          <Grid item>
            <Typography variant="h5">Video Informe</Typography>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <iframe
                  width="100%"
                  height="315"
                  src="https://youtube.com/embed/"
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Conclusión */}

        <Grid container id="finalDecision" sx={{ my: 4 }}>
          <Grid item>
            <Typography variant="h5">Conclusión</Typography>
          </Grid>
          <Grid
            container
            display="flex"
            flexDirection="column"
            spacing={4}
            sx={{ py: 2 }}
          >
            <Grid item>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis, amet, error doloremque molestias, dicta ea atque minus
                reiciendis ad quia officiis! Fuga voluptates pariatur vitae
                possimus neque illum quod vero?
              </Typography>
            </Grid>

            <Grid item>
              <ToggleButtonDecision />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
