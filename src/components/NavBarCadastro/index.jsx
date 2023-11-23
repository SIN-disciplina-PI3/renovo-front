import { Box, Flex, Button, Spacer } from '@chakra-ui/react'
import img from '../../assets/logo.png'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const NavbarCadastro = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        borderBottom="1px"
        borderColor="#D9D9D9"
        alignItems={'center'}
        height={'77px'}
        paddingX="4"
      >
        <Button as={Link} to="/renovo-front/login" variant="ghost" display="flex" alignItems="center" ml='auto'>
          <ChevronLeftIcon boxSize={8} /> voltar para o login
        </Button>

        <Spacer />

        <Box as={Link} to={'/renovo-front'} flex='1.54' marginLeft={14}>
          <img src={img} alt="logo da renovo" width={30} height={35} />
        </Box>
      </Flex>
    </>
  )
}

export default NavbarCadastro