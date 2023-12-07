
import React, { useState } from 'react'
import imgPerfil from '../../assets/avatar.jpg'

import { IoSettingsOutline } from 'react-icons/io5'
import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Perfil = () => {
  const [pessoa, setPessoa] = useState({
    nome: 'Adriana Calcanhotto',
    cidade: 'Recife',
    estado: 'PE',
    periodo: '1',
    url: imgPerfil,
    profissao: 'Auxíliar Admsnistrativo',
    idade: '39'
  })

  return (
    <Flex>
      <Image objectFit="cover" maxH={'85px'} maxW={'85px'} src={pessoa.url} />
      <Flex marginLeft={4} justifyContent={'space-between'} width={'1120px'}>
        <Box>
          <Text fontSize="3xl" color={'#17214D'}>
            {pessoa.nome}
          </Text>
          <Text fontSize={'2x1'} color={'#767676'}>
            {pessoa.cidade}, {pessoa.estado} | na plataforma há {pessoa.periodo}{' '}
            mês
          </Text>
          <Text fontSize={'2x1'} color={'#767676'} marginTop={2}>
            {pessoa.profissao}, {pessoa.idade} anos.
          </Text>
          <Text fontSize={'2x1'} color={'#4E81EF'} marginTop={2}>
            * link aqui *
          </Text>
        </Box>
        <Button
          leftIcon={<IoSettingsOutline />}
          colorScheme="pink"
          variant="solid"
          marginTop={7}
          as={Link}
          to={'/renovo-front/anuncie-aqui'}
        >
          Criar anúncio
        </Button>
      </Flex>
    </Flex>
  )
}

export default Perfil
