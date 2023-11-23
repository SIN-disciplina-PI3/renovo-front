import FormCadastroPessoaFisica from '../../components/FormularioCadastroPF'
import { Text, Flex, Link, Box } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import NavbarCadastro from '../../components/NavBarCadastro/index'
import img from '../../assets/imagecadastro.png'

const Cadastro = () => {
  return (
    <>
      <NavbarCadastro />
      <Flex alignItems="center" height="160vh">
        <Box marginLeft={"8%"}>
          <FormCadastroPessoaFisica />
        </Box>
        <Box marginLeft={"10%"} marginTop={-40}>
          <img src={img} alt="Image cadastro" width="100%" height="auto" />
        </Box>
      </Flex>
    </>
  )
}

export default Cadastro