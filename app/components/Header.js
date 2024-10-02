import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-customOrange to-customPink">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-3xl font-bold text-white">GOLD AI</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#features" className="text-white hover:text-gray-200">Features</Link>
            <Link href="#testimonial" className="text-white hover:text-gray-200">Testimonial</Link>

          </div>
        </div>
      </nav>
    </header>
  )
} 