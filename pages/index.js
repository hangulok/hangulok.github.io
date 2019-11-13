import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='row m-2'>
      <h1 className="m-1">공부하자!</h1>
      <p>오픈소스를 만들어 배포하자!!!</p>     
    </div>
   
  </div>
)

export default Home
