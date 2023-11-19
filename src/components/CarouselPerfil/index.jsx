import React, { useState, useEffect, useContext } from 'react'
import { Box, Container, Spacer, Flex } from '@chakra-ui/react'
import SectionProduct from '../SectionProduct'
import {
  ProdutosContext,
  ProdutosContextProvider
} from '../../contexts/produtosContext'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid
} from '@chakra-ui/react'

function PefilCarousel() {
  const { produtos, setProdutos } = useContext(ProdutosContext)

  return (
    <>
        <Tabs marginTop={20}>
          <TabList>
            <Tab>Anúncios</Tab>
            <Tab>Doações</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={6}>
                {produtos.map((produto, index) => (
                  <Box key={index} marginTop={5} marginLeft={5}>
                    <SectionProduct produtoProp={produto} />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <p>a definir</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </>
  )
}

export default PefilCarousel
