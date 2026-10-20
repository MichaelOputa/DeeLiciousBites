import { CreditCard, CalendarDays } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Order() {
  const whatsappNumber = '+2348140192298';
  const whatsappMessage = encodeURIComponent('Hi! I would like to place an order from DeeLicious BITES.');

  return (
    <section className="py-20 bg-[#11110f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fff8e8] mb-4">
            Order <span className="text-[#f4c430]">Now</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4c430] to-[#c94b1c] mx-auto mb-6"></div>
          <p className="text-xl text-[#c5bdad] max-w-3xl mx-auto">
            Get your favorite meals delivered hot and fresh to your doorstep
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-[#171715] border border-[#5f4910] rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-[#fff8e8] mb-4">Quick Order via WhatsApp</h3>
            <p className="text-[#c5bdad] max-w-xl mx-auto mb-8">
              Click the button below to chat with us directly on WhatsApp and place your order
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white px-8 py-5 rounded-full text-lg font-bold shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.55)] transform hover:scale-105 transition-all w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          <div className="bg-[#171715] border border-[#5f4910] rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-[#382b0b] rounded-full">
                <CreditCard className="text-[#f4c430]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#fff8e8]">Payment Options</h3>
            </div>
            <ul className="space-y-3 text-[#d8d0c0]">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f4c430] rounded-full mr-3"></span>
                Bank Transfer
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f4c430] rounded-full mr-3"></span>
                Cash on Delivery
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f4c430] rounded-full mr-3"></span>
                USSD Payment
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#10251b] rounded-xl border border-green-900/50">
              <p className="text-sm text-green-400 font-medium">
                ✓ Secure payments guaranteed
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f4c430] to-[#c94b1c] rounded-3xl shadow-2xl p-8 md:p-12 text-[#0b0b0a]">
            <div className="flex items-center justify-center mb-6">
              <CalendarDays size={48} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#0b0b0a]">
              Order & Delivery Schedule
            </h3>
            <p className="text-center text-lg mb-3 font-semibold text-[#0b0b0a]">
              Orders are taken from Monday to Thursday.
            </p>
            <p className="text-center text-lg font-semibold text-[#0b0b0a]">
              Delivery is Friday, Saturday and Sunday.
            </p>
          </div>

          <div className="bg-[#241d11] border-2 border-[#f4c430] rounded-2xl p-6">
            <h4 className="font-bold text-[#fff8e8] mb-3 text-lg">🎉 Event Catering Available!</h4>
            <p className="text-[#d8d0c0]">
              Planning a party, wedding, or corporate event? We offer professional catering services
              for all occasions. Contact us on WhatsApp for custom packages and bulk orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
