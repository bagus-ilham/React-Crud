import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers/Routers";
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <BrowserRouter>
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
    
    </BrowserRouter>
  )
}

export default App

