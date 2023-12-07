import { useContext } from "react";
import { useParams } from "react-router-dom";
import ImagesProduct from "../../components/ImagesProduct/imagesProduct";
import { ProdutosContext } from '../../contexts/produtosContext';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Etiqueta from "../../components/EtiquetaProduto/etiqueta";
import {
    Flex,
    Text,
    Stack,
    Button,
    Container
} from "@chakra-ui/react";

const Produto = () => {

    const {id} = useParams();
    const { produtos } = useContext(ProdutosContext)

    return (
        <>
            <Navbar />
            <Container maxW={"1440px"}>
            <Flex maxW={"1440px"} justifyContent={"space-around"} marginTop={10} marginBottom={10}>
                    <ImagesProduct id={id} />
                    <Flex maxH={481} maxW={416} flexDirection={"column"} justifyContent={"space-between"}>
                        <Stack spacing={1}>
                            <Text fontSize={"4xl"} color={"#17214D"}>{produtos[id - 1]?.nome}</Text>
                            <Text fontSize={"1xl"} color={"#767676"} >{produtos[id - 1]?.loja}</Text>
                            <Text fontSize={"3xl"} color={"#17214D"} >R$ {produtos[id - 1]?.preco},00</Text>
                        </Stack>

                        <Stack spacing={1}>
                            <Text fontSize={"1xl"} color={"#17214D"}> descrição</Text>
                            <Text fontSize={"2xl"} color={"#767676"}>{produtos[id - 1]?.descricao}</Text>
                        </Stack>

                        <Etiqueta infoEtiqueta={{tamanho: produtos[id - 1]?.tamanho, estoque: produtos[id - 1]?.estoque, estado: produtos[id - 1]?.estado}} />

                        <Button colorScheme="blue" size={"lg"} maxW={416}> Tenho interesse</Button>
                    </Flex>
                </Flex>
            </Container>
            <Footer />
        </>
    )
}

export default Produto;