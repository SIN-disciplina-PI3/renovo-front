import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    MenuProvider,
    MenuCommand,
    Input,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import img from '../../assets/logo.png';
import img1 from '../../assets/config.svg';
import img2 from '../../assets/sair-vetor.svg';
import img3 from '../../assets/carrinho.svg';
import img4 from '../../assets/avatar.jpg';

const Links = ['roupas', 'casa', 'eletrônicos', 'outros', 'troque aqui']

const NavLink = (props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
                color: 'blue'
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('white')} px={4} borderBottom="1px solid gray" boxShadow="0 1px 3px rgba(0, 0, 0, 0.6)">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><img src={img} alt="logo da renovo" width={30} height={35} /></Box>
                        <Stack>
                            <InputGroup >
                            <Input placeholder='busque por produtos' size='sm' borderRadius='8px' width='230px' />
                            <InputRightElement width={30} height={33}>
                                    <SearchIcon color='gray.500' />
                            </InputRightElement>
                            </InputGroup>
                        </Stack>
                        <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            size={'sm'}
                            mr={1}
                            leftIcon={<img src={img3} alt="cart" width={30} height={30} />}>
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={img4}
                                />
                            </MenuButton>
                            <MenuList>
                                <Stack sx={{ paddingLeft: 5, paddingTop: 4, PaddingBotton: 4 }} align={'start'} direction={'column'}>
                                    <MenuProvider>Adriana Calcanhotto</MenuProvider>
                                    <MenuCommand fontSize={14}>Colaborador</MenuCommand>
                                </Stack>
                                <MenuDivider />
                                <MenuItem sx={{ paddingLeft: 5 }}>
                                    <img src={img1} alt="configuração" style={{ width: 22, height: 22, marginRight: 10 }} />
                                    Gerenciar Perfil</MenuItem>
                                <MenuItem sx={{ paddingLeft: 6 }}>
                                    <img src={img2} alt="sair" style={{ width: 20, height: 18, marginRight: 8 }} /> Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Box p={4}>Conteúdo</Box>
        </>
    )
}