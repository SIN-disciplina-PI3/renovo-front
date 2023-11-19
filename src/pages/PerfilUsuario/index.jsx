import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
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
      <Flex justifyContent={'center'} marginTop={35}>
        <Box maxW={'1440px'}>
          <Perfil />
          <PerfilCarousel />
        </Box>
      </Flex>
      <Footer />
    </>
  )
}

export default PerfilUsuario
