import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
      >
        <source src="https://player.vimeo.com/external/459389137.hd.mp4?s=865f5c0b9a69fa6a9c4f5d3e4597657d4e020e4d&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Capturing Your Vision Through Our Lens
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Professional photography and videography services for your most important moments
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transition transform hover:scale-105">
          <Play className="h-5 w-5" />
          <span>Watch Our Reel</span>
        </button>
      </div>
    </div>
  );
}