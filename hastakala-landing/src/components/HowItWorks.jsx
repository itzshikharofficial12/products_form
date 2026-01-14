import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Product Details",
      description: "Fill out the form with product information and images."
    },
    {
      title: "Review by Our Team", 
      description: "Our team carefully reviews the submitted details."
    },
    {
      title: "We Get in Touch",
      description: "If required, we contact you for confirmation or next steps."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F3E9DC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            A simple process designed for artisans
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#2B2B2B] p-8 rounded-2xl border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 ease-out"
            >
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                {step.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
