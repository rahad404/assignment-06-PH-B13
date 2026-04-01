import React, { useState } from 'react';
import { Rocket, Shield, Database, Code, Globe, BarChart3, ShoppingCart, Trash2, CheckCircle2 } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductData = ({ cart, addToCart, removeFromCart, clearCart }) => {
   const [activeTab, setActiveTab] = useState('products'); // 'products' or 'cart'

   // JsonProduct Data
   const products = [
      {
         id: 1,
         name: "Startup Launch Kit",
         description: "Everything you need to launch your startup idea quickly and efficiently.",
         price: 59,
         period: "One-Time",
         tag: "Hot",
         tagType: "bestseller",
         features: ["Business plan templates", "Pitch deck builder", "Market research tools"],
         icon: <Rocket className="text-red-500" />
      },
      {
         id: 2,
         name: "Cyber Security Suite",
         description: "Protect your digital assets with advanced security and monitoring tools.",
         price: 25,
         period: "Mo",
         tag: "Recommended",
         tagType: "popular",
         features: ["Real-time threat detection", "Firewall protection", "Encrypted backups"],
         icon: <Shield className="text-green-500" />
      },
      {
         id: 3,
         name: "Cloud Database Manager",
         description: "Manage and scale your databases effortlessly with cloud integration.",
         price: 35,
         period: "Mo",
         tag: "New",
         tagType: "new",
         features: ["Multi-cloud support", "Auto scaling", "Real-time analytics"],
         icon: <Database className="text-blue-500" />
      },
      {
         id: 4,
         name: "Developer Toolkit Pro",
         description: "Boost your coding productivity with powerful dev tools and extensions.",
         price: 45,
         period: "One-Time",
         tag: "Trending",
         tagType: "popular",
         features: ["Code snippets library", "Debugging tools", "VSCode extensions"],
         icon: <Code className="text-indigo-500" />
      },
      {
         id: 5,
         name: "Global SEO Optimizer",
         description: "Improve your website ranking with advanced SEO insights and tools.",
         price: 20,
         period: "Mo",
         tag: "New",
         tagType: "new",
         features: ["Keyword tracking", "Backlink analysis", "Site audit reports"],
         icon: <Globe className="text-cyan-500" />
      },
      {
         id: 6,
         name: "Analytics Dashboard Pro",
         description: "Visualize and analyze your business data with interactive dashboards.",
         price: 70,
         period: "One-Time",
         tag: "Best Value",
         tagType: "bestseller",
         features: ["Custom charts", "Data export", "Real-time tracking"],
         icon: <BarChart3 className="text-orange-500" />
      }
   ];

   // 3. Actions (wrapper functions to add toast notifications)
   const handleAddToCart = (product) => {
      addToCart(product);
      toast.success(`${product.name} added to cart!`);
   };

   const handleRemoveFromCart = (productId) => {
      const product = cart.find(item => item.id === productId);
      removeFromCart(productId);
      toast.success(`${product.name} removed from cart!`);
   };

   const handleCheckout = () => {
      clearCart();
      toast.success("Checkout successful!");
   };

   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

   // 4. Tag Styling Logic
   const getTagStyles = (type) => {
      switch (type) {
         case 'bestseller': return 'bg-orange-100 text-orange-700';
         case 'popular': return 'bg-indigo-100 text-indigo-700';
         case 'new': return 'bg-emerald-100 text-emerald-700';
         default: return 'bg-gray-100 text-gray-700';
      }
   };

   return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
         <div className="max-w-6xl mx-auto">

            {/* Header Section */}
            <div className="text-center mb-10">
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Premium Digital Tools</h1>
               <p className="text-slate-500 mb-8">Choose from our curated collection to boost productivity.</p>

               {/* Toggle Buttons */}
               <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-slate-200">
                  <button
                     onClick={() => setActiveTab('products')}
                     className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'products' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                     Products
                  </button>
                  <button
                     onClick={() => setActiveTab('cart')}
                     className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                     Cart ({cart.length})
                  </button>
               </div>
            </div>

            {/* Content Section */}
            {activeTab === 'products' ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {products.map((product) => (
                     <div key={product.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative flex flex-col hover:shadow-md transition-shadow">
                        {/* Tag */}
                        <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getTagStyles(product.tagType)}`}>
                           {product.tag}
                        </span>

                        {/* Icon & Title */}
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-3 text-2xl">
                           {product.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                        <p className="text-slate-500 text-sm mb-4 leading-relaxed flex-grow">{product.description}</p>

                        {/* Price */}
                        <div className="mb-4 flex items-baseline gap-1">
                           <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                           <span className="text-slate-400 text-sm">/{product.period}</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-4">
                           {product.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                 <CheckCircle2 size={16} className="text-emerald-500" />
                                 {feat}
                              </li>
                           ))}
                        </ul>

                        {/* Button */}
                        <button onClick={() => handleAddToCart(product)}
                           className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-colors shadow-lg shadow-indigo-100"
                        >
                           Buy Now
                        </button>
                     </div>
                  ))}
               </div>
            ) : (
               /* Cart Section */
               <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold mb-8">Your Cart</h2>

                  {cart.length === 0 ? (
                     <div className="text-center py-20">
                        <ShoppingCart size={64} className="mx-auto text-slate-200 mb-4" />
                        <p className="text-slate-500 text-lg">Your cart is empty.</p>
                        <button
                           onClick={() => setActiveTab('products')}
                           className="mt-4 text-[#7C3AED] font-bold hover:underline"
                        >
                           Go shopping →
                        </button>
                     </div>
                  ) : (
                     <div className="space-y-4">
                        {cart.map((item) => (
                           <div key={item.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                                    {item.icon}
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                                    <p className="text-slate-500 text-sm">${item.price}</p>
                                 </div>
                              </div>
                              <button onClick={() => handleRemoveFromCart(item.id)}
                                 className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-1 text-sm font-bold">
                                 Remove
                              </button>
                           </div>
                        ))}

                        {/* Checkout Summary */}
                        <div className="mt-12 pt-8 border-t border-slate-100">
                           <div className="flex justify-between items-center mb-8">
                              <span className="text-slate-500 font-medium">Total:</span>
                              <span className="text-3xl font-bold text-slate-900">${totalPrice}</span>
                           </div>
                           <button
                              onClick={handleCheckout}
                              className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-full transition-all shadow-xl shadow-indigo-100"
                           >
                              Proceed To Checkout
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
         <ToastContainer />
      </div>
   );
};

export default ProductData;