import Image from 'next/image'

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <blockquote className="text-xl text-gray-100 mb-4">
              &quot;GOLD AI has transformed our customer service. We&apos;ve seen a 40% increase in customer satisfaction and a 30% reduction in support costs.&quot;
            </blockquote>
            <cite className="text-gray-200 font-semibold">- Sarah Johnson, CEO of TechInnovate</cite>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Happy Client"
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