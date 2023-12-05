import { AddOutlined, Delete, Edit} from "@mui/icons-material";
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
import { startNewReport } from "../../store/app";
import { useDispatch, useSelector } from "react-redux";

export const MyReports = () => {
  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.app);

  const onClikNewReport = () => {
    dispatch(startNewReport());
  };
  return (
    <Grid container spacing={2} direction="column" maxWidth="lg">
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
                <TableCell align="center">Jugador</TableCell>
                <TableCell align="center">Club</TableCell>
                <TableCell align="center">Edad</TableCell>
                <TableCell align="center">Nacionalidad</TableCell>
                <TableCell align="center">Fecha Informe</TableCell>
                <TableCell align="center">Editar/Borrar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell align="center" component="th" scope="row">
                    <Link href="#"  sx={{color:'dark.main'}}>{report.name}</Link>
                  </TableCell>
                  <TableCell align="center">{report.club}</TableCell>
                  <TableCell align="center">{report.age}</TableCell>
                  <TableCell align="center">{report.nationality}</TableCell>
                  <TableCell align="center">{report.date}</TableCell>

                  <TableCell align="center">
                    <IconButton aria-label="delete" size="small" >
                      <Edit fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" color="error">
                      <Delete fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Link to="/new-report">
        <IconButton
          onClick={onClikNewReport}
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
