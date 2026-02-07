import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f5e6d3] via-[#faf5ef] to-[#f0e5d8] overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-[#d4a574] opacity-40 text-3xl">✦</div>
      <div className="absolute top-16 right-20 text-[#d4a574] opacity-40 text-2xl">✦</div>
      <div className="absolute bottom-12 right-32 text-[#d4a574] opacity-40 text-3xl">✦</div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-[#e8dcc8]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left side - Bear mascot with cookies */}
              <div className="flex items-center gap-4">
                {/* Cookie decoration (left) */}
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-full bg-[#d4a574] relative">
                    <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
                    {/* Cookie chips */}
                    <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-7 left-6 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-8 left-3 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                  </div>
                </div>

                {/* Bear Character */}
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28">
                    {/* Bear face */}
                    <div className="absolute inset-0 bg-[#a67c52] rounded-full"></div>
                    
                    {/* Left ear */}
                    <div className="absolute -top-2 left-2 w-8 h-8 bg-[#a67c52] rounded-full">
                      <div className="absolute inset-1.5 bg-[#8b6f47] rounded-full"></div>
                    </div>
                    
                    {/* Right ear */}
                    <div className="absolute -top-2 right-2 w-8 h-8 bg-[#a67c52] rounded-full">
                      <div className="absolute inset-1.5 bg-[#8b6f47] rounded-full"></div>
                    </div>
                    
                    {/* Belly/chest */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-16 bg-[#e8d4b8] rounded-t-full"></div>
                    
                    {/* Face details */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2">
                      {/* Eyes */}
                      <div className="flex gap-3 justify-center mb-2">
                        <div className="w-2 h-2 bg-[#4a3829] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#4a3829] rounded-full"></div>
                      </div>
                      {/* Snout */}
                      <div className="w-6 h-4 bg-[#e8d4b8] rounded-full mx-auto"></div>
                      {/* Nose */}
                      <div className="w-3 h-2 bg-[#4a3829] rounded-full mx-auto -mt-1"></div>
                      {/* Smile */}
                      <div className="w-4 h-2 border-b-2 border-[#4a3829] rounded-full mx-auto mt-1"></div>
                    </div>

                    {/* Hat/Beret */}
                    <div className="absolute -top-1 right-4 w-10 h-4 bg-[#8b6f47] rounded-full transform rotate-12"></div>
                  </div>
                  
                  {/* Cookie near bear */}
                  <div className="absolute -bottom-2 -left-4 w-10 h-10 rounded-full bg-[#d4a574]">
                    <div className="absolute inset-1.5 rounded-full bg-[#c9985f]"></div>
                    <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-5 left-4 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-5 left-2 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                  </div>
                </div>
              </div>

              {/* Center - Title and Description */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#5a4a3a]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  My Planner
                </h1>
                <p className="text-lg md:text-xl text-[#7a6a5a] mb-4">
                  Welcome! Organize your life with ease.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#8a7a6a]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">contact@myplanner.com</span>
                </div>
              </div>

              {/* Right side - Decorative elements */}
              <div className="flex items-center gap-4">
                {/* Cookie decoration (right) */}
                <div className="hidden lg:block">
                  <div className="w-14 h-14 rounded-full bg-[#d4a574] relative transform -rotate-12">
                    <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
                    <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-6 left-5 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-7 left-2 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#d4a574] relative mt-2 ml-4">
                    <div className="absolute inset-1.5 rounded-full bg-[#c9985f]"></div>
                    <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-5 left-4 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                    <div className="absolute top-6 left-2 w-1.5 h-1.5 rounded-full bg-[#8b6f47]"></div>
                  </div>
                </div>

                {/* Book decoration */}
                <div className="hidden md:block">
                  <div className="relative w-16 h-14">
                    {/* Book pages */}
                    <div className="absolute inset-0 bg-white border-2 border-[#8b6f47] rounded-r-lg">
                      <div className="absolute inset-1 flex flex-col gap-1 p-1">
                        <div className="h-0.5 bg-[#d4a574] rounded w-3/4"></div>
                        <div className="h-0.5 bg-[#d4a574] rounded w-full"></div>
                        <div className="h-0.5 bg-[#d4a574] rounded w-2/3"></div>
                      </div>
                    </div>
                    {/* Book spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8b6f47] rounded-l-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-[#a67c52] to-[#8b6f47] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Get Started
              </Link>
              <Link
                href="/signin"
                className="px-8 py-4 bg-white border-2 border-[#a67c52] text-[#8b6f47] font-semibold rounded-xl hover:bg-[#a67c52] hover:text-white hover:shadow-lg transition-all duration-200"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default HeroSection;