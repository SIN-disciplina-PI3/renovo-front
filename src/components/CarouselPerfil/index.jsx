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
  SimpleGrid,
  Grid,
  GridItem
} from '@chakra-ui/react'

function PefilCarousel() {
  const { produtos, setProdutos } = useContext(ProdutosContext)

  return (
    <>
      <Tabs isLazy marginTop={20}>
        <TabList>
          <Tab>Anúncios</Tab>
          <Tab>Doações</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
              {produtos.map((produto, index) => (
                <GridItem key={index}>
                  <SectionProduct  produtoProp={produto} />
                </GridItem>
              ))}
            </Grid>
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
