
const Transform = () => {
   return (
    <section className="flex flex-col items-center justify-center text-center p-8 min-h-[400px] bg-gradient-to-br from-purple-600 to-indigo-800 text-white font-sans">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-sm md:text-base opacity-90 max-w-xl mb-8 leading-relaxed">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />
        Start your free trial today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Explore Products
        </button>
        <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all">
          View Pricing
        </button>
      </div>

      <p className="text-xs opacity-70">
        14-day free trial • No credit card required • Cancel anytime
      </p>
      
    </section>
  );
}

export default Transform;