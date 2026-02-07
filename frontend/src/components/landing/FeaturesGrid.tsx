import React from 'react';

// Updated features to match the planner theme
const PLANNER_FEATURES = [
  {
    id: 1,
    title: 'Habit Tracker',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: 'bg-[#f5e6e0]',
    iconColor: 'text-[#a67c52]',
    hoverColor: 'hover:bg-[#f0ddd5]'
  },
  {
    id: 2,
    title: 'Academics',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    bgColor: 'bg-[#c5d9e8]',
    iconColor: 'text-[#6b8ba3]',
    hoverColor: 'hover:bg-[#b8cfe0]'
  },
  {
    id: 3,
    title: 'Weekly Planner',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: 'bg-[#d4e8e0]',
    iconColor: 'text-[#6b9883]',
    hoverColor: 'hover:bg-[#c7dfd5]'
  },
  {
    id: 4,
    title: 'My Diary',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bgColor: 'bg-[#f0d9d5]',
    iconColor: 'text-[#a67c6b]',
    hoverColor: 'hover:bg-[#e8cec8]'
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#faf5ef] via-[#f5ede3] to-[#f0e5d8]">
      <div className="container mx-auto px-4">
        {/* Optional: You can add a title or remove it to match the reference */}
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-[#5a4a3a]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Organize Your Life
        </h2> */}

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANNER_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.bgColor} ${feature.hoverColor} p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
            >
              {/* Icon Container */}
              <div className={`${feature.iconColor} mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 
                className="text-xl font-semibold text-center text-[#5a4a3a] group-hover:text-[#4a3a2a] transition-colors"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Decorative stars */}
        <div className="absolute right-10 top-1/4 text-[#d4a574] opacity-30 text-2xl hidden lg:block">✦</div>
        <div className="absolute left-10 bottom-1/4 text-[#d4a574] opacity-30 text-2xl hidden lg:block">✦</div>
      </div>

      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default FeaturesGrid;