import { ClockIcon, LightningBoltIcon, UserIcon, LinkIcon, GlobeIcon, AcademicCapIcon } from '@heroicons/react/outline';

const features = [
  { name: '24/7 Availability', description: 'Always ready to assist your customers, anytime, anywhere', icon: ClockIcon },
  { name: 'Instant Responses', description: 'Provide immediate answers to customer queries', icon: LightningBoltIcon },
  { name: 'Personalized Interactions', description: 'Tailor conversations to individual customer needs', icon: UserIcon },
  { name: 'Seamless Integration', description: 'Easily integrate with your existing systems and workflows', icon: LinkIcon },
  { name: 'Multilingual Support', description: 'Communicate with customers in their preferred language', icon: GlobeIcon },
  { name: 'Continuous Learning', description: 'Improve over time through machine learning capabilities', icon: AcademicCapIcon }, // Replace BrainIcon here
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose GOLD AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <feature.icon className="h-12 w-12 text-customPink mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
