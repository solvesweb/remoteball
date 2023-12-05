import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadReports = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = collection(FirebaseDB, `users/${uid}/reports`);
  const docs = await getDocs(collectionRef);

  

  const reports = [];
  docs.forEach((doc) => {
    reports.push({ id: doc.id, ...doc.data() });
  });

  console.log(reports);
  return reports;
};
