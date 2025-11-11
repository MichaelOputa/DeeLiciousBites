import { Menu, X, Phone, ShoppingBag, ChefHat, Heart } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => handleClick('home')}>
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-red-600 to-red-700 rounded-lg rotate-45 flex items-center justify-center">
                <Heart className="text-white -rotate-45" size={24} strokeWidth={2.5} fill="currentColor" />
              </div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                <ChefHat className="text-white" size={20} strokeWidth={2} />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="text-gray-900">DeeLicious</span>
                <span className="block text-sm font-bold tracking-widest text-gray-800">BITES</span>
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`font-medium transition-colors ${
                  currentSection === item.id
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+234"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
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
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left py-2 font-medium ${
                  currentSection === item.id
                    ? 'text-orange-600'
                    : 'text-gray-700'
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
