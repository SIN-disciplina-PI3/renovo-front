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
import img from '../../assets/logo.png'
import img1 from '../../assets/config.svg'
import img2 from '../../assets/sair-vetor.svg'
import img3 from '../../assets/carrinho.svg'
import img4 from '../../assets/avatar.jpg'
import './style.css'

const Links = ['roupas', 'casa', 'eletrônicos', 'outros', 'troque aqui']

const NavLink = props => {
  const { children } = props
  const isTroqueAqui = children === 'troque aqui'

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.50'),
        color: 'blue'
      }}
      className={`nav-link ${isTroqueAqui ? 'troque-aqui-link' : ''}`}
      href={'#'}
    >
      {children}
    </Box>
  )
}

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justifyContent="center" borderBottom="1px" borderColor='#D9D9D9'>
        <Box maxW={'1440px'} bg={useColorModeValue('white')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Flex alignItems={'center'} marginLeft={50}>
              <HStack spacing={8} alignItems={'center'}>
                <Box>
                  <img src={img} alt="logo da renovo" width={30} height={35} />
                </Box>
                <Stack>
                  <InputGroup>
                    <Input
                      placeholder="busque por produtos"
                      size="sm"
                      borderRadius="8px"
                      width="260px"
                    />
                    <InputRightElement width={30} height={33}>
                      <SearchIcon color="gray.500" />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
              </HStack>
            </Flex>
            <Flex alignItems={'center'} marginRight={50}>
              <HStack
                as={'nav'}
                spacing={3}
                display={{ base: 'none', md: 'flex' }}
                marginRight={50}
                className="nav-container"
              >
                {Links.map(link => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
              <Box h="100%" w="1px" bg="gray.500" mx={4}></Box>
              <Button
                variant={'solid'}
                size={'sm'}
                mr={1}
                leftIcon={<img src={img3} alt="cart" width={30} height={30} />}
              ></Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={img4} />
                </MenuButton>
                <MenuList>
                  <Stack
                    sx={{ paddingLeft: 5, paddingTop: 4, PaddingBotton: 4 }}
                    align={'start'}
                    direction={'column'}
                  >
                    <MenuProvider>Adriana Calcanhotto</MenuProvider>
                    <MenuCommand fontSize={14}>Colaborador</MenuCommand>
                  </Stack>
                  <MenuDivider />
                  <MenuItem sx={{ paddingLeft: 5 }}>
                    <img
                      src={img1}
                      alt="configuração"
                      style={{ width: 22, height: 22, marginRight: 10 }}
                    />
                    Gerenciar Perfil
                  </MenuItem>
                  <MenuItem sx={{ paddingLeft: 6 }}>
                    <img
                      src={img2}
                      alt="sair"
                      style={{ width: 20, height: 18, marginRight: 8 }}
                    />{' '}
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map(link => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Flex>
    </>
  )
}
