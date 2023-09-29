'use client'

import React, { useState, useEffect } from 'react'
import { Box, Container, Spacer, Flex } from '@chakra-ui/react'
import SectionProduct from '../SectionProduct'

function ProductCarousel() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const produto1 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }
    const produto2 = {
      preco: '1900',
      nome: 'Iphone 11',
      loja: 'por Recife Importados',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }
    const produto3 = {
      preco: '1940',
      nome: 'Iphone 11',
      loja: 'por Recife Imports',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }

    const produto4 = {
      preco: '1930',
      nome: 'Iphone 11',
      loja: 'por Jaboatão Importados',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }

    const produto5 = {
      preco: '1920',
      nome: 'Iphone 11',
      loja: 'por Sergipe Importados',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }

    const produto6 = {
      preco: '1990',
      nome: 'Iphone 11',
      loja: 'por Cabo Importados',
      url: 'https://microimport.com.br/storage/placa-mae-original-iphone-11-pro-max-de-256gb-green-verde.png'
    }

    setProdutos([
      produto1,
      produto2,
      produto3,
      produto4,
      produto5,
      produto6
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
