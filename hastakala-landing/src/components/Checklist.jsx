import React from 'react';

const Checklist = () => {
  const items = [
    "High-quality photos of your crafts",
    "Detailed product descriptions",
    "Pricing information for each item",
    "Your artisan story and background",
    "Contact information for customers",
    "Social media handles (if available)"
  ];

  return (
    <section className="py-16 px-4 bg-[#F3E9DC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-earth-brown dark:text-earth-cream text-center mb-12">
          What to Keep Ready
        </h2>
        <div className="bg-[#F3E9DC] p-8 rounded-lg border border-[#F3E9DC]">
          <p className="text-earth-green dark:text-earth-sage font-medium text-lg text-center mb-8">
            Having these details ready will help us create the perfect showcase for your crafts:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#F3E9DC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
