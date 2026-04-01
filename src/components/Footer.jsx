import Instagram from '../assets/instagram.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/x.svg';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
  };

  const socialLinks = [
    { icon: Instagram, alt: 'Instagram', href: '#' },
    { icon: Facebook, alt: 'Facebook', href: '#' },
    { icon: Twitter, alt: 'X/Twitter', href: '#' },
  ];

  return (
    <footer className="bg-[#0B0E1B] text-slate-400 py-16 px-6 border-t-[6px] border-[#7C3AED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Logo and Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">DigiTools</h2>
            <p className="max-w-xs leading-relaxed text-sm lg:text-base">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Social Links</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors overflow-hidden">
                  <img
                    src={social.icon}
                    alt={social.alt || 'Social link'}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;