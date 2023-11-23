import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PerfilUsuario from '../pages/PerfilUsuario'
import PageNotFound from '../pages/NotFound/index'
import Login from '../pages/Login/index'
import Cadastro from '../pages/Cadastro/index'



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/renovo-front/" element={<Home />} />
        <Route path="/renovo-front/perfil" element={<PerfilUsuario />} />
        <Route path="/renovo-front/login" element={<Login />}/>
        <Route path="/renovo-front/cadastro" element={<Cadastro />}/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
