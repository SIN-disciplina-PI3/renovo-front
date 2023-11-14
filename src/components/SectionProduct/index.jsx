import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Box
} from '@chakra-ui/react'

const SectionProduct = ({produtoProp}) => {
  return (
    <>
      <Card w={200} h="36vh" borderRadius="7%">
        <Image
          objectFit="cover"
          maxW="95%"
          maxH="50%"
          src={produtoProp.url}
        />
        <CardBody>
          <Stack mt="" spacing="1">
            <Heading size="1lg" color="#17214D">
              R$ {produtoProp.preco}
            </Heading>
            <Text fontSize="2xl" color="#17214D">
              {produtoProp.nome}
            </Text>
            <Text fontSize="0.5xl" color="gray.600">
              {produtoProp.loja}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionProduct
