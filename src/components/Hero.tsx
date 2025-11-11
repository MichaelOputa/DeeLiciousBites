import { ArrowRight, ChefHat } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZkYmE3NCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
              <ChefHat size={64} className="text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
            DeeLicious BITES
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Taste the Love in Every Bite
        </p>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Authentic Nigerian flavors and exceptional delights, crafted with passion and served with pride.
          From jollof rice to small chops, we bring you the taste of home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('order')}
            className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-3"
          >
            <span>Order Now</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('menu')}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold border-2 border-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all shadow-md"
          >
            View Menu
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🍛</div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Local Dishes</h3>
            <p className="text-gray-600">Authentic Nigerian meals</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🍴</div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Snacks & Appetizers</h3>
            <p className="text-gray-600">Exquisite Tastes</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Event Catering</h3>
            <p className="text-gray-600">Perfect for any occasion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
