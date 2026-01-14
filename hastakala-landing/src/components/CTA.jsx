import React from 'react';

const CTA = () => {
  const handleFormSubmit = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSemTDRNmmeQKsf0S3IRFRQvZ-QmWqr_O-hjWx7tJPtk-z9JFw/viewform?usp=dialog', '_blank');
  };

  return (
    <section className="py-24 px-4 bg-[#F3E9DC]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-[#FFFFFF] mb-6">
          Ready to Submit Your Products?
        </h2>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-[#6B6B6B] dark:text-[#D1C7BD] mb-12 leading-relaxed max-w-3xl mx-auto">
          Share your details with us and take the first step towards showcasing your craft on Hastakala.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={handleFormSubmit}
          className="inline-flex items-center justify-center px-10 py-4 bg-[#8B5E3C] hover:bg-[#734A2F] dark:bg-[#8B5E3C] hover:bg-[#734A2F] text-[#FFFFFF] dark:text-[#FFFFFF] font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-8 focus:outline-none focus:ring-4 focus:ring-[#8B5E3C] focus:ring-opacity-50"
        >
          Submit Your Product Details
        </button>

        {/* Trust / Reassurance Text */}
        <div className="space-y-2 text-sm text-[#6B6B6B] dark:text-[#D1C7BD]">
          <p>Reviewed manually by Hastakala team</p>
          <p>We may contact you if additional details are required</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
