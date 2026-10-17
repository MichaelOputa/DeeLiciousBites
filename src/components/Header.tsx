import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Header({ onNavigate, currentSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'order', label: 'Order Now' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#171313]/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            type="button"
            className="flex items-center cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171313]"
            onClick={() => handleClick('home')}
            aria-label="Go to DeeLicious BITES home"
          >
            <img
              src="/DeeLicious_BITES-removebg-preview.png"
              alt="DeeLicious BITES"
              className="h-16 w-32 object-contain object-left sm:h-20 sm:w-40"
            />
          </button>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-orange-400'
                    : 'text-white/85 hover:text-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-5">
            <a
              href="tel:+234"
              className="flex items-center space-x-2 text-white/85 hover:text-orange-300 transition-colors"
            >
              <Phone size={20} />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <button
              onClick={() => handleClick('order')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center space-x-2"
            >
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#211a18] border-t border-white/10">
          <nav className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left py-2 font-medium ${
                  currentSection === item.id
                    ? 'text-orange-400'
                    : 'text-white/85'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('order')}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold mt-4"
            >
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
