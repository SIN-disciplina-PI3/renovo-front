import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Box
} from '@chakra-ui/react'

const SectionProduct = () => {
  return (
    <>
      <Card maxW={263} maxH="sm" borderRadius="7%">
      <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '100%' }}
              maxH={{ base: '100%', sm: '100%' }}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3"
              alt="Green double couch with wooden legs"
            />
        <CardBody>
            
          <Stack mt="6" spacing="3">
            <Heading size="lg" color="#17214D">
              R$ 20
            </Heading>
            <Text fontSize="2xl" color="#17214D">
              Calça suede verde G
            </Text>
            <Text color="gray.600">por AbrigoPet</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionProduct
