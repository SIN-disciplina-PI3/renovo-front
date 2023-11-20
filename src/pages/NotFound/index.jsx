import NotFound from '../../components/NotFound/index'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Box, Flex } from '@chakra-ui/react'

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Flex
        justifyContent={'center'}
        margin={'20%'}
        maxW={'1440px'}
        direction={'column'}
      >
        <NotFound />
      </Flex>
      <Footer />
    </>
  )
}

export default PageNotFound
