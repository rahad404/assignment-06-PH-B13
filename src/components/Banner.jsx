import BannerImage from "../assets/banner.png";
import { Play } from 'lucide-react';

const Banner = () => {
   return (
      <section className="bg-white min-h-[540px] mx-auto flex items-center justify-center p-6 md:p-12">
         <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="space-y-6">
               {/* Badge */}
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2 animate-pulse" />
                  <span className="text-indigo-600 font-medium text-sm">
                     New: AI-Powered Tools Available
                  </span>
               </div>

               {/* Headline */}
               <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                  Supercharge Your <br />
                  Digital Workflow
               </h1>

               {/* Subtext */}
               <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                  Access premium AI tools, design assets, templates, and productivity
                  software—all in one place. Start creating faster today.
               </p>

               <p className="text-slate-400 font-medium">Explore Products</p>

               {/* Buttons  */}
               <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-indigo-200">
                     Explore Products
                  </button>

                  <button className="px-8 py-4 bg-white border-2 border-indigo-500 text-indigo-600 font-semibold rounded-full flex items-center gap-2 hover:bg-indigo-50 transition-all">
                     <Play size={20} fill="currentColor" />
                     Watch Demo
                  </button>
               </div>
            </div>

            {/* Banner image side */}
            <div className="relative flex justify-center items-center">
               <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                     src={BannerImage}
                     alt="Person interacting with digital interface"
                     className="object-cover w-full h-full"
                  />
               </div>
            </div>

         </div>
      </section>
   );
};

export default Banner;