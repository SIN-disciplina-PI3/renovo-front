import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PerfilUsuario from '../pages/PerfilUsuario'
import PageNotFound from '../pages/NotFound/index'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/renovo-front/" element={<Home />} />
        <Route path="/renovo-front/perfil" element={<PerfilUsuario />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
