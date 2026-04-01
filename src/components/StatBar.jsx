import React from 'react';

const StatBar = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <div className="w-full bg-[#7C3AED] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around text-white">
         <div className="flex flex-col items-center text-center space-y-2 py-6 md:py-0">
            <span className="text-5xl md:text-6xl font-bold tracking-tight">50K+</span>
            <span className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wide">Active Users</span>
         </div>
         <div className="flex flex-col items-center text-center space-y-2 py-6 md:py-0">
            <span className="text-5xl md:text-6xl font-bold tracking-tight">200+</span>
            <span className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wide">Premium Tools</span>
         </div>
         <div className="flex flex-col items-center text-center space-y-2 py-6 md:py-0">
            <span className="text-5xl md:text-6xl font-bold tracking-tight">4.9</span>
            <span className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wide">Rating</span>
         </div>
      </div>
    </div>
  );
};

export default StatBar;