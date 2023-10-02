import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import OngCarousel from '../../components/CarouselOngs'
import Footer from '../../components/Footer'
import banner from '../../utils/images/banner.png'

const Home = () => {
  return (
    <>
      <Navbar />

      <Box display="flex" justifyContent="center">
        <img src={banner} alt="banner com anuncio de frete gratis" />
      </Box>
      <Box marginLeft="20%" w="60%">
        <Text fontSize="2xl" color="#17214D">
          Novidades
        </Text>
        <ProductCarousel />
      </Box>

      <Box marginLeft="20%" w="60%">
        <Text fontSize="2xl" color="#17214D">
          ONGs
        </Text>
        <OngCarousel />
      </Box>
      <Footer />
    </>
  )
}

export default Home
