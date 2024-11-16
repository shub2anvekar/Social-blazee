import { Camera, Video, Image, Users } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services for events, portraits, and commercial projects.'
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'High-quality video production for weddings, corporate events, and promotional content.'
  },
  {
    icon: Image,
    title: 'Aerial Shots',
    description: 'Stunning drone photography and videography for unique perspectives.'
  },
  {
    icon: Users,
    title: 'Event Coverage',
    description: 'Comprehensive coverage of corporate events, weddings, and special occasions.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional media services to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}