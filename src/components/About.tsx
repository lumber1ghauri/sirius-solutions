const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Sirius Solutions, we're dedicated to helping businesses reach their full potential. 
              With years of experience and a team of experts, we deliver innovative solutions that drive growth and success.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our approach combines cutting-edge technology with strategic thinking to create 
              customized solutions that meet your unique business needs.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Placeholder for company image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;