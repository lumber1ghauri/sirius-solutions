const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Transform Your Business with Innovative Solutions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          We help businesses grow and succeed through cutting-edge technology and strategic consulting
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;