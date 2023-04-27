import { Hero } from '@/components'
import Layout from '@/layout/layout'
import Head from 'next/head'
import React from 'react'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Main page</title>
      </Head>
      <Hero />
    </>
  )
}


