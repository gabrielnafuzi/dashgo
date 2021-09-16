import { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { SidebarDrawerProvider } from '@/contexts/SidebarDrawerContext'
import { makeServer } from '@/services/mirage'
import { queryClient } from '@/services/query-client'
import { theme } from '@/styles/theme'

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  makeServer()
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Dashgo</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>

        {isDev && <ReactQueryDevtools />}
      </QueryClientProvider>
    </>
  )
}

export default MyApp
