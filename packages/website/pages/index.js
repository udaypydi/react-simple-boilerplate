import Head from 'next/head'
import { Container } from 'react-bootstrap'

import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Highlights from '../components/home/hightlights'
import Usage from '../components/home/usage'
import UsageReverse from '../components/home/usage-reverse'
import FooterLinks from '../components/home/footer-links'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>React Simple Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Highlights />
      <Usage />
      <UsageReverse />
      <div className='bg-dark text-light'>
        <Container className='py-4'>
          <FooterLinks />
          <footer className='text-center'>
            <img />
            Copyright &copy; 2020 React Simple Boilerplate
          </footer>
        </Container>
      </div>
    </Layout>
  )
}
