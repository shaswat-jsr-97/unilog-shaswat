import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import MainLayout from '../layouts/MainLayout'
import '../styles/globals.css'

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
