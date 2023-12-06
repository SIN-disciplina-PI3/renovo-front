import {
    Box,
    Flex,
    Stack,
    Text
} from "@chakra-ui/react";

const Etiqueta = ({infoEtiqueta}) => {
    console.log(infoEtiqueta)
    return (
        <>
        <Box maxH={81} maxW={416} borderRadius={15} padding={2} border={"1px solid #AAAAAA"}> 
        <Flex maxW={400} justifyContent={"space-around"}>
                <Stack spacing={1}>
                    <Text fontSize={"1xl"} color={"#17214D"}>tamanho</Text>
                    <Text fontSize={"2xl"} color={"#17214D"}>{infoEtiqueta?.tamanho}</Text>
                </Stack>

                <Stack spacing={1}>
                    <Text fontSize={"1xl"} color={"#17214D"}>peças restantes</Text>
                    <Text fontSize={"2xl"} color={"#D26493"}>{infoEtiqueta?.estoque}</Text>
                </Stack>

                <Stack spacing={1}>
                    <Text fontSize={"1xl"} color={"#17214D"}>condição</Text>
                    <Text fontSize={"2xl"} color={"#17214D"}>{infoEtiqueta?.estado}</Text>
                </Stack>
            </Flex>
        </Box>
            
        </>
    )

}

export default Etiqueta;