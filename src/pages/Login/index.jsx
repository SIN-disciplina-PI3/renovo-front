import FormLogin from '../../components/FormularioLogin'
import { Text, Flex, Link, Box } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import NavbarLogin from '../../components/NavBarLogin/index'

const Login = () => {
  return (
    <>
      <NavbarLogin />
      <Flex alignItems="center" height="100vh">
        <Box marginBottom={"8%"} marginLeft={"8%"}>
          <Text fontSize="4xl" color={'#17214D'} marginBottom={8}>
            acesse sua conta
          </Text>
          <FormLogin />

          <Flex marginTop={8}>
            <Text fontSize="2xl" color={'#17214D'}>
              não tem uma conta?
            </Text>
            <Link
              as={LinkRouter}
              to={'/renovo-front/cadastro'}
              fontSize="2xl"
              color={'#D26493'}
              marginLeft={3}
            >
              {' '}
              cadastre-se
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Login
