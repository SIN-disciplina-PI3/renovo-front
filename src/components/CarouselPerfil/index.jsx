import React, { useState, useEffect } from 'react'
import { Box, Container, Spacer, Flex } from '@chakra-ui/react'
import SectionProduct from '../SectionProduct'

function PefilCarousel() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    console.log('caminho normal')
    const produto1 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: '/src/assets/iphone12.png'

    }
    const produto2 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: '/src/assets/iphone11pro.png'
    }
    const produto3 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: '/src/assets/iphone13.png'
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: '/src/assets/iphone11pro.png'
    }

    const produto5 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: '/src/assets/iphone14.png'
    }

    setProdutos([
      produto1,
      produto2,
      produto3,
      produto4,
      produto5,
  
    ])
  }, [])

  return (
      <Flex flexWrap="nowrap" justifyContent="space-between">
        {produtos.map((produto, index) => (
          <Box key={index} margin={3}>
            <SectionProduct produtoProp={produto} />
          </Box>
        ))}
      </Flex>
  )
}

export default PefilCarousel
