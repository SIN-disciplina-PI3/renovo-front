import Navbar from '../../components/Navbar'
import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'
import ProductCarousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import banner from '../../assets/BannerPageHouse.png'
import HouseCategory from '../../components/HouseCategory/index'

const HousePage = () => {
    return (
        <>
            <Navbar />

            <Flex justifyContent={'center'}>
                <Flex maxW={'1440px'} direction={'column'}>
                    <Box marginTop={5} marginLeft={10}>
                        <HouseCategory />
                    </Box>
                    <Box display="flex" justifyContent="center" marginTop={'32px'}>
                        <img src={banner} alt="banner casa" style={{ borderRadius: '15px', height: '540px' }} />
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Cozinha
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'cozinha'}/>
                        </Center>
                    </Box>

                    <Box marginTop={5}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Cama, Mesa e Banho
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'cama'}/>
                        </Center>
                    </Box>

                    <Box marginTop={5} marginBottom={10}>
                        <Text fontSize="2xl" color="#17214D" fontWeight='bold'>
                            Móveis
                        </Text>
                        <Center marginTop={3}>
                            <ProductCarousel categoria={'móvel'}/>
                        </Center>
                    </Box>


                </Flex>
            </Flex>

            <Footer />
        </>
    )
}

export default HousePage;
