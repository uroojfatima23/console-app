import React from 'react';

const HowItWorks: React.FC = () => {
  // Get current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}`;
  const period = hours >= 12 ? 'PM' : 'AM';
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const currentDay = days[now.getDay()];

  const menuItems = [
    { title: 'Task to accomplish', icon: '●', hasArrow: false },
    { title: 'Habit Tracker', icon: '●', hasArrow: true },
    { title: 'To Do List', icon: '●', hasArrow: true },
    { title: 'Goals', icon: '●', hasArrow: true },
    { title: 'Today', icon: '●', hasArrow: true },
    { title: 'May goals', icon: '●', hasArrow: true },
    { title: 'Tomorrow', icon: '●', hasArrow: true },
    { title: 'This week', icon: '●', hasArrow: true },
    { title: 'Self care', icon: '●', hasArrow: true }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#f5ede3] via-[#faf5ef] to-[#f0e5d8]">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="text-center mb-8">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#5a4a3a] mb-2"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            DASHBOARD
          </h2>
          <p className="text-lg text-[#8a7a6a]">Gallery view</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Clock Widget */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#a8c5d8] to-[#8fb0c8] p-8 rounded-3xl shadow-lg">
                {/* Time Display */}
                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span 
                      className="text-6xl md:text-7xl font-bold text-white"
                      style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                      {timeString}
                    </span>
                    <span 
                      className="text-3xl font-semibold text-white/90"
                      style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                      {period}
                    </span>
                  </div>
                  <div 
                    className="text-xl font-semibold text-white/90 mt-2 tracking-wider"
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {currentDay}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Menu Items */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-[#e8dcc8]">
                <h3 
                  className="text-2xl font-semibold text-[#5a4a3a] mb-6"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Areas of life to focus on
                </h3>
                
                <div className="space-y-3">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/80 hover:bg-white rounded-2xl transition-all duration-200 hover:shadow-md cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#a67c52] text-xs">{item.icon}</span>
                        <span 
                          className="text-[#5a4a3a] font-medium group-hover:text-[#8b6f47] transition-colors"
                          style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                          {item.title}
                        </span>
                      </div>
                      {item.hasArrow && (
                        <svg 
                          className="w-5 h-5 text-[#a67c52] group-hover:translate-x-1 transition-transform"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                {/* Optional Bottom Section */}
                <div className="mt-8 p-4 bg-[#f5e6e0] rounded-2xl">
                  <p 
                    className="text-center text-[#8a7a6a] text-sm"
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    <span className="font-semibold">Tip:</span> Click on any area to view and manage your tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative stars */}
        <div className="absolute right-16 top-20 text-[#d4a574] opacity-30 text-3xl hidden xl:block">✦</div>
        <div className="absolute left-16 bottom-20 text-[#d4a574] opacity-30 text-2xl hidden xl:block">✦</div>
      </div>

      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default HowItWorks;