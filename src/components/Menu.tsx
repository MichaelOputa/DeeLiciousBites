import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { menuData } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('local');
  const whatsappNumber = '+2348140192298';

  const categories = [
    { id: 'local', label: 'Local Dishes', icon: '🍛' },
    { id: 'pastries', label: 'Pastries', icon: '🍰' },
    {id: 'soup', label: 'Soup', icon: '🍲'},
    {id: 'protein', label: 'Protein', icon: '🍖'},
  ];

  return (
    <section className="py-20 bg-[#0b0b0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#fff8e8] mb-4">
            Our <span className="text-[#f4c430]">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4c430] to-[#c94b1c] mx-auto mb-6"></div>
          <p className="text-xl text-[#c5bdad] max-w-3xl mx-auto">
            Explore our delicious selection of authentic Nigerian and continental dishes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#f4c430] to-[#c94b1c] text-white shadow-lg'
                  : 'bg-[#171715] text-[#f8f2e5] border border-[#6e5410] hover:bg-[#241d11] shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => {
            // ensure item has the expected properties before rendering to satisfy TypeScript
            if (!('image' in item && 'description' in item && 'price' in item)) {
              return null;
            }

            return (
              <div
                key={index}
                className="bg-[#151513] border border-[#5f4910] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-[#f4c430] transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {"popular" in item && item.popular && (
                    <div className="absolute top-4 right-4 bg-[#c94b1c] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#fff8e8] mb-2">{item.name}</h3>
                  <p className="text-[#c5bdad] mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-bold text-[#f4c430]">{item.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I would like to order ${item.name} (${item.price}) from DeeLicious BITES.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#f4c430] px-4 py-2 text-sm font-bold text-[#0b0b0a] transition-all hover:scale-105 hover:bg-[#ffd95a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c430] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151513]"
                    >
                      <MessageCircle size={16} />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
