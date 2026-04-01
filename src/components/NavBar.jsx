import { ShoppingCart } from 'lucide-react';

const NavBar = ({ cartCount = 0 }) => {
   return (
      <div className="navbar max-w-[1300px] mx-auto">
         <div className="navbar-start">
            <div className="flex items-center gap-1 font-bold text-3xl
        bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
               DigiTools
            </div>
         </div>
         <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-10 px-1 ">
               <li>
                  <a>Product</a>
               </li>
               <li>
                  <a>feature</a>
               </li>
               <li>
                  <a>Pricing</a>
               </li>
               <li>
                  <a>Testimonial</a>
               </li>
               <li>
                  <a>FAQ</a>
               </li>
            </ul>
         </div>
         <div className="navbar-end gap-5">
            <div className="indicator">
               <span className="indicator-item badge badge-primary">{cartCount}</span>
               <button className="btn btn-ghost btn-circle">
                  <ShoppingCart size={24} />
               </button>
            </div>
            <a className="btn bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">Get Started</a>
         </div>
      </div>
   );
};

export default NavBar;