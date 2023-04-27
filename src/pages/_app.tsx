import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/helpers/theme'
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@/helpers/create-emotion'
import Layout from "@/layout/layout"
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache,
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}