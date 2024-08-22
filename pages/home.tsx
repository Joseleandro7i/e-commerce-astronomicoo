import React from 'react'
import Header from '../app/components/header'
import { Main } from '../app/components/main/main'
import Footer from '../app/components/footer'
import Head from 'next/head'

export default function Home (): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Home - Stellar</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
