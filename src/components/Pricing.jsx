import { Check } from 'lucide-react';

const Pricing = () => {
   const plans = [
      {
         name: 'Starter',
         description: 'Perfect for getting started',
         price: '0',
         features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
         buttonText: 'Get Started Free',
         isPopular: false,
      },
      {
         name: 'Pro',
         description: 'Best for professionals',
         price: '29',
         features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
         buttonText: 'Start Pro Trial',
         isPopular: true,
      },
      {
         name: 'Enterprise',
         description: 'For teams and businesses',
         price: '99',
         features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
         buttonText: 'Contact Sales',
         isPopular: false,
      },
   ];

   return (
      <section className="py-20 px-6 bg-slate-50/50">
         <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
               Simple, Transparent Pricing
            </h2>
            <p className="text-slate-500 text-lg">
               Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
         </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
         {plans.map((plan) => (
            <div key={plan.name}
               className={`relative rounded-xl p-8 duration-300 flex flex-col ${
               plan.isPopular
                  ? 'bg-[#7C3AED] text-white shadow-2xl z-10'
                  : 'bg-white text-slate-900 border border-slate-100 shadow-sm'
               }`}>

               {plan.isPopular && (
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
               </div>
               )}

               <div className="mb-4">
               <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
               </h3>
               <p className={`text-sm ${plan.isPopular ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {plan.description}
               </p>
               </div>

               <div className="mb-8 flex items-baseline gap-1">
               <span className="text-5xl font-bold">${plan.price}</span>
               <span className={`text-lg ${plan.isPopular ? 'text-indigo-200' : 'text-slate-400'}`}>/Month</span>
               </div>

               <ul className="space-y-4 mb-3 text-left flex-grow">
               {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                     <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-indigo-300' : ''}`} />
                     <span className={`text-sm ${plan.isPopular ? 'text-indigo-50' : 'text-slate-600'}`}>
                     {feature}
                     </span>
                  </li>
               ))}
               </ul>

               <button
               className={`w-full py-4 rounded-full font-bold transition-colors mt-auto ${
                  plan.isPopular
                     ? 'bg-white text-[#7C3AED] hover:bg-slate-50'
                     : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
               }`}>
                  {plan.buttonText}
               </button>
            </div>
         ))}
         </div>
      </section>
   );
};

export default Pricing;