const Home = () => {
  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Discover Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find the perfect place to call home with our extensive listings.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Start Searching
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              View Featured Listings
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Property Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  Beautiful Family House
                </h3>
                <p className="text-gray-600">3 beds • 2 baths • 1,500 sqft</p>
                <span className="text-blue-600 font-bold">$450,000</span>
              </div>
            </div>
            {/* Repeat above div for more property cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Modern Apartment</h3>
                <p className="text-gray-600">2 beds • 1 bath • 900 sqft</p>
                <span className="text-blue-600 font-bold">$320,000</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Cozy Studio</h3>
                <p className="text-gray-600">1 bed • 1 bath • 500 sqft</p>
                <span className="text-blue-600 font-bold">$220,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded transition duration-300 hover:bg-gray-200">
            Browse Properties
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
