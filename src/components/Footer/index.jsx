import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Flex,
    Image,
    IconButton,
    Button,
} from '@chakra-ui/react'
import img from '../../assets/logo.png';

const Logo = (props) => {
    return (
        <Flex alignItems="center">
            <Image src={img} alt="logo da renovo" width={30} height={35} />
            <Text ml={2} fontWeight="bold" fontSize="30px">
                Re-novo
            </Text>
        </Flex>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'700'} fontSize={'md'} mb={2}>
            {children}
        </Text>
    )
}

export default function LargeWithLogoLeft() {
    return (
        <Box
            bg={useColorModeValue('white')}
            color={useColorModeValue('gray.700', 'gray.200')}
            borderTop="1px solid gray"
            marginTop="150px"
            boxShadow="0 1px 3px rgba(0, 0, 0, 0.6)">
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                        <Text fontSize={'sm'}>© 2023 Re-novo. Todos os direitos reservados.</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Categorias</ListHeader>
                        <Box as="a" href={'#'}>
                            Roupas
                        </Box>
                        <Box as="a" href={'#'}>
                            Casa
                        </Box>
                        <Box as="a" href={'#'}>
                            Eletrônicos
                        </Box>
                        <Box as="a" href={'#'}>
                            Outros
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>ONG's</ListHeader>
                        <Box as="a" href={'#'}>
                            Lista de ONG's
                        </Box>
                        <Box as="a" href={'#'}>
                            Parceiros
                        </Box>
                        <Box as="a" href={'#'}>
                            Contato
                        </Box>
                        <Box as="a" href={'#'}>
                            Sobre
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Suporte</ListHeader>
                        <Box as="a" href={'#'}>
                            Ajuda
                        </Box>
                        <Box as="a" href={'#'}>
                            Como trocar
                        </Box>
                        <Box as="a" href={'#'}>
                            Como doar
                        </Box>
                        <Box as="a" href={'#'}>
                            Impacto da troca
                        </Box>
                        <Box as="a" href={'#'}>
                            Termos de uso
                        </Box>
                        <Box as="a" href={'#'}>
                            Política de privacidade
                        </Box>
                        <Box as="a" href={'#'}>
                            Fala conosco
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Stack direction={'row'}>
                            <Button bg={useColorModeValue('#4E81EF')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'blue.300',
                                }}
                                aria-label="Subscribe">
                                Faça parte</Button>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}