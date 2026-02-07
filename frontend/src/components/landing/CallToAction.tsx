import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  // Get current time and day
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return {
      time: `${displayHours}:${minutes.toString().padStart(2, '0')}`,
      ampm,
      day: now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
    };
  };

  const { time, ampm, day } = getCurrentTime();

  return (
    <section className="py-16 bg-gradient-to-br from-[#faf5ef] via-[#f5ede3] to-[#f0e5d8] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-16 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute top-20 right-24 text-[#d4a574] opacity-30 text-2xl">✦</div>
      <div className="absolute bottom-16 left-32 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute bottom-12 right-16 text-[#d4a574] opacity-30 text-2xl">✦</div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Dashboard Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            
            {/* Clock Widget */}
            <div className="bg-gradient-to-br from-[#b8cfe0] to-[#a8c5db] rounded-3xl p-8 shadow-lg w-full lg:w-auto">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-white mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  {time}
                  <span className="text-3xl ml-2 align-top">{ampm}</span>
                </div>
                <div className="text-xl font-semibold text-white/90" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                  {day}
                </div>
              </div>
            </div>

            {/* Dashboard Title & Description */}
            <div className="flex-1 text-center lg:text-left">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4 text-[#5a4a3a]"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                DASHBOARD
              </h2>
              <p className="text-lg text-[#7a6a5a] mb-6">
                Gallery view
              </p>
              
              {/* CTA Content */}
              <div className="mt-8">
                <h3 
                  className="text-2xl font-semibold mb-3 text-[#5a4a3a]"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Ready to get started?
                </h3>
                <p className="text-[#7a6a5a] mb-6 max-w-xl mx-auto lg:mx-0">
                  Transform your productivity with our beautiful planner. Organize your habits, academics, and daily tasks all in one place.
                </p>
                
                <Link
                  href="/signup"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-[#a67c52] to-[#8b6f47] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Quick Stats or Info Cards (Optional) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#e8dcc8]">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold text-[#5a4a3a] mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Track Progress
              </h4>
              <p className="text-sm text-[#7a6a5a]">Monitor your daily habits and goals</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#e8dcc8]">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-[#5a4a3a] mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Stay Organized
              </h4>
              <p className="text-sm text-[#7a6a5a]">Plan your week with ease</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#e8dcc8]">
              <div className="text-3xl mb-2">✨</div>
              <h4 className="font-semibold text-[#5a4a3a] mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Achieve Goals
              </h4>
              <p className="text-sm text-[#7a6a5a]">Turn your dreams into reality</p>
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

export default CallToAction;