import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import banner from '../../assets/BannerPageOthers.png'
import OthersCategory from '../../components/OthersCategory/index'

const OthersPage = () => {
    return (
        <>
            <Navbar />

            <Flex justifyContent={'center'}>
                <Flex maxW={'1440px'} direction={'column'}>
                    <Box marginTop={5} marginLeft={10}>
                        <OthersCategory />
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={'32px'}>
                        <img src={banner} alt="banner roupas" style={{ borderRadius: '15px' }} />
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Ferramentas e Construção
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'eletronicos'}/>
                        </Center>
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Livros
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'eletronicos'}/>
                        </Center>
                    </Box>

                    <Box marginTop={5} marginBottom={10} fontWeight='bold'>
                        <Text fontSize="2xl" color="#17214D">
                            Bolsas, Malas e Mochilas
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'eletronicos'}/>
                        </Center>
                    </Box>


                </Flex>
            </Flex>

            <Footer />
        </>
    )
}

export default OthersPage;
