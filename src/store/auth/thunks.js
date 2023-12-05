import { checkingCredentials, login, logout } from "./";
import { logoutFirebase, singInWithGoogle } from "../../firebase/providers";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch( logout() )
  };
};
