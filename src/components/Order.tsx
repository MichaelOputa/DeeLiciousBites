import { MessageCircle, CreditCard, Bike } from 'lucide-react';

export default function Order() {
  const whatsappNumber = '+2348140192298';
  const whatsappMessage = encodeURIComponent('Hi! I would like to place an order from DeeLicious BITES.');

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Order <span className="text-orange-600">Now</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your favorite meals delivered hot and fresh to your doorstep
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Order via WhatsApp</h3>
              <p className="text-gray-600">
                Click the button below to chat with us directly on WhatsApp and place your order
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-orange-100 rounded-full">
                  <CreditCard className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Payment Options</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Bank Transfer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Cash on Delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  USSD Payment
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Secure payments guaranteed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <Bike size={48} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Fast & Reliable Delivery
            </h3>
            <p className="text-center text-lg mb-6 opacity-90">
              Average delivery time: 20-35 minutes
            </p>
            <p className="text-center mb-8 opacity-90">
              Days of Operation: Monday & Thursday, Evening.
            </p>
            <p className="text-center mb-8 opacity-90">
              Tuesdays, 11:00 AM.
            </p>
           <p className="text-center mb-8 opacity-90">
              Friday to Sunday, 11:00 AM - 10:00 PM.
           </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">30 min</div>
                <p className="text-sm opacity-90">Average Delivery</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm opacity-90">Fresh & Hot</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 Hours</div>
                <p className="text-sm opacity-90">Customer Support</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">🎉 Event Catering Available!</h4>
            <p className="text-gray-700">
              Planning a party, wedding, or corporate event? We offer professional catering services
              for all occasions. Contact us on WhatsApp for custom packages and bulk orders.
            </p>
          </div>
        </div>
    </section>
  );
}
