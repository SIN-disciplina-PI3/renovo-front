import { Text, Center, Box } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <>
      <Box textAlign={'center'}>
        <Text fontSize={120}>404</Text>
        <Text fontSize={80}>Página não encontrada</Text>
      </Box>
    </>
  )
}

export default NotFound;