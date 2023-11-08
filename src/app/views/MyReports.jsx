import { AddOutlined } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const MyReports = () => {
  return (
    <Grid container spacing={2} direction="column" maxWidth='lg'>
      <Grid item sx={{ m: 2 }}>
        <Typography variant="h4">Mis Informes</Typography>
      </Grid>
      <Grid item sx={{ m: 2 }}>
        <TextField
          id="outlined-basic"
          label="Jugador"
          variant="outlined"
          placeholder="Búsqueda de Jugador"
        />
      </Grid>
      <Grid item sx={{ m: 2 }}>      
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Jugador</TableCell>
                <TableCell align="right">Club</TableCell>
                <TableCell align="right">Edad</TableCell>
                <TableCell align="right">Nacionalidad</TableCell>
                <TableCell align="right">Fecha Informe</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Messi
                </TableCell>
                <TableCell align="right">Inter Miami</TableCell>
                <TableCell align="right">36</TableCell>
                <TableCell align="right">Argentina</TableCell>
                <TableCell align="right">12/9/2023</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Messi
                </TableCell>
                <TableCell align="right">Inter Miami</TableCell>
                <TableCell align="right">36</TableCell>
                <TableCell align="right">Argentina</TableCell>
                <TableCell align="right">12/9/2023</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Messi
                </TableCell>
                <TableCell align="right">Inter Miami</TableCell>
                <TableCell align="right">36</TableCell>
                <TableCell align="right">Argentina</TableCell>
                <TableCell align="right">12/9/2023</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Messi
                </TableCell>
                <TableCell align="right">Inter Miami</TableCell>
                <TableCell align="right">36</TableCell>
                <TableCell align="right">Argentina</TableCell>
                <TableCell align="right">12/9/2023</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell component="th">
                  Messi
                </TableCell>
                <TableCell align="right">Inter Miami</TableCell>
                <TableCell align="right">36</TableCell>
                <TableCell align="right">Argentina</TableCell>
                <TableCell align="right">12/9/2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      
      <Link to="/new-report">

        <IconButton
          size="large"
          sx={{
            color: "light.main",
            backgroundColor: "primary.main",
            ":hover": { backgroundColor: "primary.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </Link>
    </Grid>
  );
};
