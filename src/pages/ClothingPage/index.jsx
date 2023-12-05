import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import banner from '../../assets/BannerPageRoupas.png'
import ClothingCategory from '../../components/ClothingCategory/index'

const ClothingPage = () => {
    return (
        <>
            <Navbar />

            <Flex justifyContent={'center'}>
                <Flex maxW={'1440px'} direction={'column'}>
                    <Box marginTop={5} marginLeft={10}>
                        <ClothingCategory />
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={'32px'}>
                        <img src={banner} alt="banner roupas" style={{ borderRadius: '15px' }} />
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Vestidos
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel />
                        </Center>
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Camisetas
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel />
                        </Center>
                    </Box>

                    <Box marginTop={5} marginBottom={10} fontWeight='bold'>
                        <Text fontSize="2xl" color="#17214D">
                            Calças
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel />
                        </Center>
                    </Box>


                </Flex>
            </Flex>

            <Footer />
        </>
    )
}

export default ClothingPage;
