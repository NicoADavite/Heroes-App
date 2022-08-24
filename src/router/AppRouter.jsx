import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage } from "../heroes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="dc" element={<DcPage />} />
      <Route path="marvel" element={<MarvelPage />} />

      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<Navigate to="/marvel" />} />
    </Routes>
  );
};
