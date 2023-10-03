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

      <Box display="flex" justifyContent="center" marginTop={"32px"}>
        <img src={banner} alt="banner com anuncio de frete gratis" />
      </Box>
      <Box marginTop="32px" marginLeft="8%" w="80%">
        <Text fontSize="2xl" color="#17214D">
          Novidades
        </Text>
        <ProductCarousel />
      </Box>
     
      <Box marginTop="32px" marginLeft="8%" w="80%">
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
