import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>GOLD AI - Advanced Chatbot Solution</title>
        <meta name="description" content="Elevate Your Customer Experience with Intelligent Conversations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}