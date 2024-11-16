const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&q=80",
    category: "Photography",
    title: "Corporate Events"
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
    category: "Videography",
    title: "Wedding Stories"
  },
  {
    image: "https://images.unsplash.com/photo-1576824503883-5f0a44c2c3c5?auto=format&fit=crop&q=80",
    category: "Aerial",
    title: "Architectural Photography"
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    category: "Events",
    title: "Special Moments"
  },
  {
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80",
    category: "Photography",
    title: "Product Shots"
  },
  {
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80",
    category: "Aerial",
    title: "Landscape Photography"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest work and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-blue-400 text-sm font-medium">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}