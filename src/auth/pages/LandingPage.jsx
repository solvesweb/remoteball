import { Route, Routes } from "react-router-dom";
import { Login } from "../views/Login";
import {Landing} from "../views/Landing";


export const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
