import React, { useState, useEffect } from 'react'
import { Box, Container, Spacer, Flex } from '@chakra-ui/react'
import SectionProduct from '../SectionProduct'
import iphone12 from '../../assets/iphone12.png'
import iphone11pro from '../../assets/iphone11pro.png'
import iphone13 from '../../assets/iphone13.png'
import iphone14 from '../../assets/iphone14.png'

function ProductCarousel() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    console.log('caminho normal')
    const produto1 = {
      preco: '2100',
      nome: 'Iphone 12',
      loja: 'por Recife Importados',
      url: iphone12

    }
    const produto2 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: iphone11pro
    }
    const produto3 = {
      preco: '2940',
      nome: 'Iphone 13',
      loja: 'por Recife Imports',
      url: iphone13
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: iphone11pro
    }

    const produto5 = {
      preco: '3200',
      nome: 'Iphone 14',
      loja: 'por Sergipe Importados',
      url: iphone14
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

export default ProductCarousel
