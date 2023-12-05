import ImagesProduct from "../../components/ImagesProduct/imagesProduct";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    Flex,
    Text,
    Box,
    Stack
} from "@chakra-ui/react";

const Produto = () => {
    return (
        <>
            <Navbar />
            <Flex maxW={"1440px"} justifyContent={"center"} marginTop={10} marginBottom={10}>
                    <ImagesProduct />
                    <Stack>
                        <Text fontSize={"4xl"} color={"#17214D"}>Calça mom Riachuelo</Text>
                        <Text fontSize={"1xl"} color={"#767676"} marginTop={-2}>por Casa Rosa</Text>
                        <Text fontSize={"3xl"} color={"#17214D"} marginTop={-2}>R$ 20,00</Text>
                    </Stack>
            </Flex>
            <Footer />

        </>
    )
}

export default Produto;