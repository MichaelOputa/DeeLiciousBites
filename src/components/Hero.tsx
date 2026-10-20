import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0a]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZkYmE3NCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-[#f4c430] rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#c94b1c] rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Soft ambient warm glow behind the logo so it seamlessly integrates with the dark theme */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#f4c430]/20 via-[#c94b1c]/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>
            <img
              src="/DeeLicious_BITES-removebg-preview.png"
              alt="DeeLicious BITES logo"
              className="relative w-64 h-auto sm:w-80 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] animate-bounce-slow"
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="text-[#f4c430]">
            Taste the Love
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl font-bold text-[#fff8e8] mb-4">
          Nigerian flavor, made with heart
        </p>

        <p className="text-lg sm:text-xl text-[#d8d0c0] mb-12 max-w-3xl mx-auto leading-relaxed">
          Authentic Nigerian flavors and exceptional delights, crafted with passion and served with pride.
          From jollof rice to small chops, we bring you the taste of home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('order')}
            className="group bg-[#f4c430] text-[#0b0b0a] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#ffd95a] hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-3"
          >
            <span>Order Now</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('menu')}
            className="bg-transparent text-[#f4c430] px-8 py-4 rounded-full text-lg font-bold border-2 border-[#f4c430] hover:bg-[#f4c430] hover:text-[#0b0b0a] transform hover:scale-105 transition-all shadow-md"
          >
            View Menu
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#151513] border border-[#6e5410] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#f4c430] transition-all">
            <div className="text-4xl mb-3 text-[#f4c430]">🍛</div>
            <h3 className="font-bold text-xl text-[#fff8e8] mb-2">Local Dishes</h3>
            <p className="text-[#c5bdad]">Authentic Nigerian meals</p>
          </div>

          <div className="bg-[#151513] border border-[#6e5410] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#f4c430] transition-all">
            <div className="text-4xl mb-3 text-[#f4c430]">🍴</div>
            <h3 className="font-bold text-xl text-[#fff8e8] mb-2">Snacks & Appetizers</h3>
            <p className="text-[#c5bdad]">Exquisite Tastes</p>
          </div>

          <div className="bg-[#151513] border border-[#6e5410] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#f4c430] transition-all">
            <div className="text-4xl mb-3 text-[#f4c430]">🎉</div>
            <h3 className="font-bold text-xl text-[#fff8e8] mb-2">Event Catering</h3>
            <p className="text-[#c5bdad]">Perfect for any occasion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
