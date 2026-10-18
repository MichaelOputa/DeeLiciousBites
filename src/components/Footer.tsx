import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171313] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="inline-flex items-center mb-4 rounded-2xl bg-[#171313] px-4 py-2">
              <img
                src="/DeeLicious_BITES-removebg-preview.png"
                alt="DeeLicious BITES"
                className="h-20 w-40 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing you the authentic taste of Nigerian cuisine with a modern twist.
              Every meal is prepared with love and passion.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Event Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Home Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Party Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-orange-500" />
                +234 814 019 2298
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-orange-500" />
                joseph.o.adeola@gmail.com
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 text-orange-500 mt-1" />
                <span>MayFair Roundabout</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-500" /> by DeeLicious BITES
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DeeLicious BITES. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
