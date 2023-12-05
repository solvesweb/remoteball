import { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleSignIn } from "../../store/auth/thunks";

export const Login = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <Grid container display='flex' justifyContent='center' alignItems='center' sx={{minHeight: '100vh'}}>
      <Grid item justifyContent='center' alignItems='center'>
        <Card elevation={6} sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', p: 4, bgcolor: '#EDF2F7'}}>
          <CardContent>
            <Typography variant="h2" textAlign="center">
              Bienvenido
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="h5" textAlign="center">
              Inicia sesión para continuar
            </Typography>
          </CardContent>

          <CardContent>
            <Link to="/app">
              <Button
                disabled={isAuthenticating}
                variant="contained"
                onClick={onGoogleSignIn}
                startIcon={<Google />}
                
              >
                Iniciar sesión con Google
              </Button>
            </Link>
          </CardContent>

          <CardContent>
            <Typography variant="p">
              Al iniciar sesión aceptas nuestros términos y condiciones.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
