import { Route, Routes } from "react-router-dom";
import { Profile } from "../app/views/Profile";
import { MyReports } from "../app/views/MyReports";
import { NewReport } from "../app/views/NewReport";
import { Report } from "../app/views/Report";
import { Landing } from "../auth/views/Landing";
import { LandingLayout } from "../auth/layout/LandingLayout";
import { ReportLayout } from "../app/layout/ReportLayout";
import { Login } from "../auth/views/Login";

import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks";
import { Prueba } from "../app/views/Prueba";
import { Prueba2 } from "../app/views/Prueba2";

export const AppRouter = () => {
  const status = useCheckAuth()

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>

           
      
      <Route
        path="/*"
        element={
          <LandingLayout>
            <Landing />
          </LandingLayout>
        }
      />
      <Route
        path="/login"
        element={
          <LandingLayout>
            <Login />
          </LandingLayout>
        }
      />

      
      <Route
        path="/app"
        element={
          <ReportLayout>
            <MyReports />
          </ReportLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <ReportLayout>
            <Profile />
          </ReportLayout>
        }
      />
      <Route
        path="/new-report"
        element={
          <ReportLayout>
            {/* <NewReport /> */}
            
            <Prueba />
          </ReportLayout>
        }
      />
      <Route
        path="/report"
        element={
          <ReportLayout>
            <Report />
          </ReportLayout>
        }
      />
    </Routes>
  );
};
