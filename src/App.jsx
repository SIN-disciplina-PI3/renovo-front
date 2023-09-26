import { BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes'
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
