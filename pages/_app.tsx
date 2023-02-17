import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import MainLayout from '../layouts/MainLayout'
import '../styles/globals.css'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const handleRouteStart = () => NProgress.start()
        const handleRouteDone = () => NProgress.done()

        router.events.on('routeChangeStart', handleRouteStart)
        router.events.on('routeChangeComplete', handleRouteDone)
        router.events.on('routeChangeError', handleRouteDone)

        return () => {
            // Make sure to remove the event handler on unmount!
            router.events.off('routeChangeStart', handleRouteStart)
            router.events.off('routeChangeComplete', handleRouteDone)
            router.events.off('routeChangeError', handleRouteDone)
        }
    }, [])

    return (
        <ChakraProvider resetCSS={true}>
            <Toaster
                toastOptions={{
                    className: 'default-toast',
                }}
            />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ChakraProvider>
    )
}

export default MyApp
