const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Cooper",
      role: "CEO, TechCorp",
      text: "Sirius Solutions transformed our business operations. Their innovative solutions helped us increase efficiency by 40%."
    },
    {
      name: "John Smith",
      role: "Founder, StartUp Inc",
      text: "Working with Sirius Solutions was a game-changer. Their expertise and dedication to our success were outstanding."
    },
    {
      name: "Sarah Johnson",
      role: "Director, Innovation Labs",
      text: "The team at Sirius Solutions delivered beyond our expectations. They're truly leaders in their field."
    }
  ];

  return (
    <section id="testimonials" className="py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;