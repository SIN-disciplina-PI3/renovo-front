import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import OngCarousel from '../../components/CarouselOngs'
import Footer from '../../components/Footer'
import banner from '../../utils/images/banner.png'
import Perfil from '../../components/Perfil'
import PerfilCarousel from '../../components/CarouselPerfil'



const PerfilUsuario = () => {
  return (
    <>
      <Navbar />

      <Perfil />

      <PerfilCarousel/>

      <Footer />

    </>
  )
}

export default PerfilUsuario;