import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import OngCarousel from '../../components/CarouselOngs'
import Footer from '../../components/Footer'
import banner from '../../utils/images/banner.png'

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex justifyContent={'center'}>
        <Flex maxW={'1440px'} direction={'column'}>
          <Box display="flex" justifyContent="center" marginTop={'32px'}>
            <img src={banner} alt="banner com anuncio de frete gratis" />
          </Box>

          <Box marginTop={5}>
            <Text fontSize="2xl" color="#17214D">
              Novidades
            </Text>
            <Center marginTop={3}>
              <ProductCarousel />
            </Center>
          </Box>

          <Box marginTop={5} marginBottom={10}>
            <Text fontSize="2xl" color="#17214D">
              Ongs
            </Text>
            <Center marginTop={3}>
              <OngCarousel />
            </Center>
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </>
  )
}

export default Home
