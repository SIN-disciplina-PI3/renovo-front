import FormLogin from '../../components/FormularioLogin'
import { Text, Flex, Link, Box } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import NavbarLogin from '../../components/NavBarLogin/index'
import img from '../../assets/imagelogin.png'

const Login = () => {
  return (
    <>
      <NavbarLogin />
      <Flex alignItems="center" height="100vh">
        <Box marginLeft={"8%"}>
          <Text fontSize="4xl" color={'#17214D'} marginBottom={8}>
            Acesse sua conta
          </Text>
          <FormLogin />

          <Flex marginTop={8}>
            <Text fontSize="2xl" color={'#17214D'}>
              Não tem uma conta?
            </Text>
            <Link
              as={LinkRouter}
              to={'/renovo-front/cadastro'}
              fontSize="2xl"
              color={'#D26493'}
              marginLeft={3}
            >
              {' '}
              Cadastre-se aqui!
            </Link>
          </Flex>
        </Box>
        <Box marginLeft={"9%"}>
          <img src={img} alt="Image login" width="100%" height="auto" />
        </Box>
      </Flex>
    </>
  )
}

export default Login
