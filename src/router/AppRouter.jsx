import { Route, Routes } from "react-router-dom";
import { Profile } from "../app/views/Profile";
import { MyReports } from "../app/views/MyReports";
import { NewReport } from "../app/views/NewReport";
import { Report } from "../app/views/Report";
import { Landing } from "../auth/views/Landing";
import { LandingLayout } from "../auth/layout/LandingLayout";
import { ReportLayout } from "../app/layout/ReportLayout";
import { Login } from "../auth/views/Login";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Landing */}
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

      {/* App */}
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
            <NewReport />
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
