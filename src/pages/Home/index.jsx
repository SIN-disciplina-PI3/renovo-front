import SectionProduct from "../../components/SectionProduct";
import Navbar from "../../components/Navbar"
import React from 'react'
import { Box} from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'

const Home = () => {
  return (
    <>
    <Navbar />
    <Box marginLeft="20%" w="60%">
      <ProductCarousel />
    </Box>
    </>
  )
}

export default Home
