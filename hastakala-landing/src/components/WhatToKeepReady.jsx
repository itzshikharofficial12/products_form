import React from 'react';

const WhatToKeepReady = () => {
  const items = [
    {
      title: "Product Name & Description",
      description: "A clear name and a short description of your product."
    },
    {
      title: "Product Images",
      description: "2–5 clear images showing your product from different angles."
    },
    {
      title: "Price & Availability",
      description: "Product price and available quantity."
    },
    {
      title: "Contact Details",
      description: "Your phone number or email for communication."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F3E8D2]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            What to Keep Ready
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            This helps us review and present your craft accurately.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-[#FFFFFF] dark:bg-[#2B2B2B] p-8 rounded-2xl border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 ease-out"
            >
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">
                {item.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToKeepReady;
