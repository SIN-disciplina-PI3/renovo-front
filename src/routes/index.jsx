import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/renovo-front/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes;