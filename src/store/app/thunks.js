import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyReport, setActiveReport, setReports } from "./appSlice";
import { loadReports } from "../../helpers";

export const startNewReport = () => {
  return async (dispatch, getState) => {
    
    const { uid } = getState().auth;

    const newReport = {
      name: "Castolo",
      club: "Valencia",
      age: "19",
      nationality: "Spain",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `users/${uid}/reports`));
    await setDoc(newDoc, newReport);

    newReport.id = newDoc.id

    dispatch(addNewEmptyReport(newReport))
    dispatch( setActiveReport(newReport))
  };
};

export const startLoadingReports = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe')

        const reports = await loadReports(uid);
        dispatch( setReports(reports));

        
        //dispatch( setReports())
    }
}
