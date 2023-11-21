import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import img from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        borderBottom="1px"
        borderColor="#D9D9D9"
        alignItems={'center'}
        height={'77px'}
      >
        <Box as={Link} to={'/renovo-front'}>
          <img src={img} alt="logo da renovo" width={30} height={35} />
        </Box>
      </Flex>
    </>
  )
}

export default NavbarLogin
