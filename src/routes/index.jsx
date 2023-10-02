import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PerfilUsuario from "../pages/PerfilUsuario";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/renovo-front/" element={<Home />} />

      <Route path="/renovo-front/perfil" element={<PerfilUsuario />} />

    </Routes>
  )
}

export default AppRoutes;