import { Heart, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-[#11110f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fff8e8] mb-4">
            Our <span className="text-[#f4c430]">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4c430] to-[#c94b1c] mx-auto mb-6"></div>
          <p className="text-xl text-[#c5bdad] max-w-3xl mx-auto">
            Where passion meets flavor in every dish we serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src="/ayo.jpg"
                alt="DeeLicious BITES Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c94b1c] rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#f4c430] to-[#c94b1c] rounded-full flex items-center justify-center shadow-xl">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-[#d8d0c0] leading-relaxed">
              <span className="font-bold text-[#f4c430]">DeeLicious BITES</span> was born from a deep passion for Nigerian cuisine and a love for bringing people together through food. 
              We started with a simple mission: to serve meals that taste like home, made with love and the finest ingredients.
            </p>

            <p className="text-lg text-[#d8d0c0] leading-relaxed">
              From our signature jollof rice that has won hearts across Nigeria, to our perfectly spiced soups and mouth-watering small chops, 
              every dish tells a story of tradition, quality, and excellence.
            </p>

            <p className="text-lg text-[#d8d0c0] leading-relaxed">
              Whether you're craving authentic Nigerian delicacies or exploring pastry flavors, we're here to deliver an unforgettable culinary experience right to your doorstep.
            </p>

            <div className="flex items-center space-x-3 bg-[#241d11] p-4 rounded-xl">
              <Heart className="text-[#f4c430]" size={32} />
              <p className="text-gray-800 font-medium italic">
                "Cooking is love made visible, and we pour our hearts into every plate."
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-[#19160f] to-[#211511] rounded-2xl hover:shadow-lg transition-shadow">
            <div className="inline-block p-4 bg-[#0b0b0a] rounded-full mb-4 shadow-md">
              <Award className="text-[#f4c430]" size={32} />
            </div>
            <h3 className="font-bold text-2xl text-[#fff8e8] mb-2">Premium Quality</h3>
            <p className="text-[#c5bdad]">Only the finest ingredients make it to your plate</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#19160f] to-[#211511] rounded-2xl hover:shadow-lg transition-shadow">
            <div className="inline-block p-4 bg-[#0b0b0a] rounded-full mb-4 shadow-md">
              <Users className="text-[#f4c430]" size={32} />
            </div>
            <h3 className="font-bold text-2xl text-[#fff8e8] mb-2">Expert Chef</h3>
            <p className="text-[#c5bdad]">Skilled professional with years of experience</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#19160f] to-[#211511] rounded-2xl hover:shadow-lg transition-shadow">
            <div className="inline-block p-4 bg-[#0b0b0a] rounded-full mb-4 shadow-md">
              <Clock className="text-[#f4c430]" size={32} />
            </div>
            <h3 className="font-bold text-2xl text-[#fff8e8] mb-2">Fast Delivery</h3>
            <p className="text-[#c5bdad]">Hot, fresh meals delivered right on time</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#19160f] to-[#211511] rounded-2xl hover:shadow-lg transition-shadow">
            <div className="inline-block p-4 bg-[#0b0b0a] rounded-full mb-4 shadow-md">
              <Heart className="text-[#f4c430]" size={32} />
            </div>
            <h3 className="font-bold text-2xl text-[#fff8e8] mb-2">Made with Love</h3>
            <p className="text-[#c5bdad]">Every dish is prepared with care and passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
