import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <ChakraProvider resetCSS={true}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ChakraProvider>
  )
}

export default MyApp
