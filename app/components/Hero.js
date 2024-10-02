import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-customOrange to-customPink py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Transform Your Business with AI-Powered Chat
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              GOLD AI delivers cutting-edge conversational AI solutions that revolutionize customer interactions and streamline business operations.
            </p>
            <a href="#cta" className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="AI Visualization"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}