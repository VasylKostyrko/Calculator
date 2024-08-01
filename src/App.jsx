import './App.css'
import Calculator from './components/Calculator'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import React from 'react'

const theme = extendTheme({
  colors: {
    capri: '#00C0F9',
    tomato: '#FF6347',
  },
})
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
function App() {
  return (
    <Calculator />
  )
}
export default App