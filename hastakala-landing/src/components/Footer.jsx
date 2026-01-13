import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2A2521] border-t border-[rgba(255,255,255,0.1)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Brand Information */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-2xl font-serif text-[#FFFFFF] mb-2">
              Hastakala
            </h3>
            <p className="text-sm text-[#D1C7BD]">
              Celebrating Handmade Crafts
            </p>
            <p className="text-xs text-[#A89685]">
              Official initiative by Team Hastakala Crafts
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="text-center md:text-right space-y-2">
            <div className="text-sm text-[#D1C7BD] mb-3">
              Follow Us
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://www.instagram.com/hastakalacrafts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D1C7BD] hover:text-[#FFFFFF] transition-colors duration-200"
                aria-label="Follow Hastakala on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/hastakala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D1C7BD] hover:text-[#FFFFFF] transition-colors duration-200"
                aria-label="Follow Hastakala on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.272-2.532-.75-2.532-1.548 0-1.393.586-2.305 1.416-2.305 1.393 0 2.305.586 2.305 1.416 0 1.49-.345 2.305-.75 2.305 1.416 0 1.49-.345 2.305-.75 2.305 1.416 0 1.49-.345 2.305-.75 2.305 1.416zm-1.761 5.82v5.171h3.554v-5.171c0-1.803.651-3.108 1.868-3.108 1.497 0 2.466-.65 3.108-1.868 3.108z"/>
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
