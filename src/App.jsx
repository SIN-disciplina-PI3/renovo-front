import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import { ProdutosContextProvider } from './contexts/produtosContext'
import { OngsContextProvider } from './contexts/ongsContext'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <OngsContextProvider>
          <ProdutosContextProvider>
            <AppRoutes />
          </ProdutosContextProvider>
        </OngsContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
