import React from 'react';
const Hero = () => {
  const handleCTAClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSemTDRNmmeQKsf0S3IRFRQvZ-QmWqr_O-hjWx7tJPtk-z9JFw/viewform?usp=dialog', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-[#F3E8D4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://hastakalacrafts.com/cdn/shop/files/WhatsApp_Image_2025-12-25_at_00.21.56.jpg?v=1766638509&width=1200"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              List Your Handcrafted Products on Hastakala
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-[#6B6B6B] mb-8 leading-relaxed">
              Share your product details with us, and our team will help showcase your craft to the right audience.
            </p>

            {/* Primary CTA Button */}
            <button
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8B5E3C] hover:bg-[#734A2F] text-[#FFFFFF] font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
            >
              Submit Your Product Details
            </button>

            {/* Secondary Reassurance Text */}
            <p className="text-sm text-[#6B5B4F]">
              Reviewed manually by Hastakala team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
