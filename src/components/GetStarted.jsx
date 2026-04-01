import { User, Box, Rocket } from 'lucide-react';

// JSON data
const GetStarted = () => {
   const stepsData = [
      {
         id: '01',
         Icon: User,
         title: 'Create Account',
         description: 'Sign up for free in seconds. No credit card required to get started.',
      },
      {
         id: '02',
         Icon: Box,
         title: 'Choose Products',
         description: 'Browse our catalog and select the tools that fit your needs.',
      },
      {
         id: '03',
         Icon: Rocket,
         title: 'Start Creating',
         description: 'Download and start using your premium tools immediately.',
      },
   ];

   return (
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            {/* Title and Subtitle */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 tracking-tight">Get Started In 3 Steps</h2>
            <p className="text-lg text-slate-600 mb-16 max-w-xl mx-auto">Start using premium digital tools in minutes, not hours.</p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {stepsData.map((step) => {
                  const { id, Icon, title, description } = step;
                  return (
                     <div
                        key={id}
                        className="relative bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center hover:border-slate-200 transition-all duration-300 group">
                        {/* card number */}
                        <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                           {id}
                        </div>

                        {/* icon */}
                        <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-10">
                           <Icon className="w-12 h-12 text-indigo-600" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-2xl font-semibold text-slate-900 mb-4 ">
                           {title}
                        </h3>
                        <p className="text-slate-600 text-base max-w-[280px]">
                           {description}
                        </p>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default GetStarted;