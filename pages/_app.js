import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {

  return (
  <ChakraProvider resetCss={true}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ChakraProvider>
  )
}

export default MyApp
