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
      <Card maxW={263} maxH="40vh" borderRadius="7%">
        <Image
          objectFit="cover"
          maxW="95%"
          maxH="50%"
          src={produtoProp.url}
        />
        <CardBody>
          <Stack mt="-7" spacing="1">
            <Heading size="lg" color="#17214D">
              R$ {produtoProp.preco}
            </Heading>
            <Text fontSize="2xl" color="#17214D">
              {produtoProp.nome}
            </Text>
            <Text color="gray.600">
              {produtoProp.loja}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionProduct
