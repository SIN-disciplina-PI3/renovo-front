import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PerfilUsuario from '../pages/PerfilUsuario'
import PageNotFound from '../pages/NotFound/index'
import Login from '../pages/Login/index'
import Cadastro from '../pages/Cadastro/index'
import Produto from '../pages/Produto/produto'
import ClothingPage from '../pages/ClothingPage'



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/renovo-front/" element={<Home />} />
        <Route path="/renovo-front/perfil" element={<PerfilUsuario />} />
        <Route path="/renovo-front/login" element={<Login />}/>
        <Route path="/renovo-front/cadastro" element={<Cadastro />}/>
        <Route path="/renovo-front/produto" element={<Produto />} />
        <Route path="/renovo-front/roupas" element={<ClothingPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
