import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  Tag
} from '@chakra-ui/react'

const SectionOng = ({ ongProp }) => {
  return (
    <>
      <Card maxW={263} maxh="45vh" borderRadius="7%">
        <CardBody>
          <Stack mt="3" spacing="4">
            <Heading size="lg" color="#17214D">
              {ongProp.nome}
            </Heading>
            <Text fontSize="2xl" color="#17214D">
              {ongProp.descricao}
            </Text>
            {ongProp.tags.map((tag, index) => (
              <Tag key={index} variant={(tag.variant === 'true' ? 'solid' : 'subtle')} colorScheme="pink">
                {tag.nome}
              </Tag>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionOng
