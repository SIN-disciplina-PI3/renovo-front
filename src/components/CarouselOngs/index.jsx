'use client'

import React, { useState, useEffect } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import SectionOng from '../SectionOngs'

function OngCarousel() {
  const [ongs, setOngs] = useState([])

  useEffect(() => {
    const ong1 = {
      nome: 'CasaRosa',
      descricao: 'Abrigamos mulheres vítimas do câncer de mama.',
      tags: [{nome: 'mulheres', variant: 'false'}, {nome: 'câncer de Mama', variant: 'true'}]
    }
    const ong2 = {
      nome: 'Abrigo Pet',
      descricao: 'Abrigamos bichinhos de rua para adoção.',
      tags: [{nome: 'animais', variant: 'false'}, {nome: 'abrigo', variant: 'true'}]
    }
    const ong3 = {
      nome: 'Hospitalhaços',
      descricao: 'Levamos alegria a crianças de Hospitais Público.',
      tags: [{nome: 'crianças', variant: 'false'}, {nome: 'hospital', variant: 'true'}]
    }
    const ong4 = {
      nome: 'ÁguaSim',
      descricao: 'Lutamos pelo direito de acesso à água para todos.',
      tags: [{nome: 'acesso à água', variant: 'true'}]
    }
    const ong5 = {
      nome: 'Arca',
      descricao: 'Reinserção social de crianças e adolescentes',
      tags: [{nome: 'crianças', variant: 'true'}, {nome: 'adolescentes', variant: 'true'}]
    }

    setOngs([
      ong1,
      ong2,
      ong3,
      ong4,
      ong5
    ])
  }, [])

  return (
      <HStack spacing={'24px'}>
        {ongs.map((ong, index) => (
            <SectionOng key={index} ongProp={ong} />
        ))}
      </HStack>
  )
}

export default OngCarousel
