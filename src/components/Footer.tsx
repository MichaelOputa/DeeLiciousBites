import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#171313] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/DeeLicious_BITES-removebg-preview.png"
                alt="DeeLicious BITES"
                className="h-16 w-auto object-contain drop-shadow-md"
              />
            </div>
            <p className="text-[#b8b0a0] text-sm leading-relaxed mb-4">
              Bringing you the authentic taste of Nigerian cuisine with a modern twist.
              Every meal is prepared with love and passion.
            </p>
            <a
              href="https://wa.me/2348140192298"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#57d163] transition-colors font-medium"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#fff8e8]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Home</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Menu</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#fff8e8]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Event Catering</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Home Delivery</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Party Packages</a></li>
              <li><a href="#" className="text-[#b8b0a0] hover:text-[#f4c430] transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#fff8e8]">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-[#b8b0a0]">
                <Phone size={16} className="mr-2 text-[#f4c430] shrink-0" />
                <a href="tel:+2348140192298" className="hover:text-[#f4c430] transition-colors">
                  +234 814 019 2298
                </a>
              </li>
              <li className="flex items-center text-[#b8b0a0]">
                <Mail size={16} className="mr-2 text-[#f4c430] shrink-0" />
                <a href="mailto:joseph.o.adeola@gmail.com" className="hover:text-[#f4c430] transition-colors break-all">
                  joseph.o.adeola@gmail.com
                </a>
              </li>
              <li className="flex items-start text-[#b8b0a0]">
                <MapPin size={16} className="mr-2 text-[#f4c430] mt-1 shrink-0" />
                <div className="space-y-1.5">
                  <p>
                    <span className="text-[#f4c430] font-medium block">Lagos:</span>
                    4, Prince Adeleke Close, Ikosi Ketu, Lagos
                  </p>
                  <p>
                    <span className="text-[#f4c430] font-medium block">Ile-Ife:</span>
                    Solar close, Mayfair Roundabout, Mayfair, Ile Ife, Osun State
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3b3528] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#b8b0a0] text-sm flex items-center">
              Made with <Heart size={16} className="mx-2 text-[#c94b1c]" /> by DeeLicious BITES
            </p>
            <p className="text-[#b8b0a0] text-sm">
              © {new Date().getFullYear()} DeeLicious BITES. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
