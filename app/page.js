import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Script from 'next/script';

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
        {/* <Testimonial /> */}
        <CTA />
      </main>
      <Footer />
      <Script id="voiceflow-widget" strategy="afterInteractive">
        {`
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '66f97d87b182bf980ceb6232' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
              v.type = "text/javascript"; 
              s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}
      </Script>
    </div>
  )
}