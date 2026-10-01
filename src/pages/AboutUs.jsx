import React from 'react';

export default function AboutUs({ onNavigate }) {
  return (
    <div className="bg-[#FDFBF9] dark:bg-black text-[#3E2723] dark:text-white transition-colors">
      <section className="relative py-20 bg-white dark:bg-black border-b border-[#EFEBE9] dark:border-[#333333]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-[#3E2723] dark:text-white tracking-tight">
            Who We <span className="text-[#8D6E63] dark:text-[#D7CCC8]">Are</span>
          </h1>
          <p className="text-[#5D4037] dark:text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
            TechZone is a trusted destination for premium audio equipment and smart wearables. We bring quality products from leading brands like boAt, Noise, Boult, and Fire-Boltt. Explore certified, high-performance electronics designed for modern and active lifestyles.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#EFEBE9] dark:border-[#333333] aspect-[4/3]">
              <img
                src="https://i.pinimg.com/736x/c4/e8/54/c4e85491ac85d159b8db4bf86f424ffc.jpg"
                alt="TechZone Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-widest text-xs">
              Our Purpose
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-[#3E2723] dark:text-white leading-tight">
              Our Mission
            </h3>
            <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm leading-relaxed">
              Our mission is to democratize high-fidelity sound and intelligent wearable technology for everyone. We believe premium acoustics, Active Noise Cancellation, and health monitoring should be accessible to all hustlers, students, athletes, and audiophiles without inflated price tags.
            </p>
        
            <div className="pt-2 flex gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white rounded-xl font-bold text-xs transition-colors shadow-md"
              >
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 border-2 border-[#3E2723] dark:border-[#2D2D30] hover:bg-[#3E2723] hover:text-white dark:hover:bg-[#1E1E1E] text-[#3E2723] dark:text-white rounded-xl font-bold text-xs transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-black border-t border-[#EFEBE9] dark:border-[#333333] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-widest text-xs mb-2 block">
              Why Choose Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#3E2723] dark:text-white">
              What Sets TechZone Apart
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-[#FDFBF9] dark:bg-black p-6 rounded-3xl border border-[#EFEBE9] dark:border-[#333333] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl font-black">
                <i className="bi bi-disc-fill"></i>
              </div>
              <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Acoustic Supremacy</h4>
              <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed">
                Titanium-coated dynamic diaphragms deliver crisp treble, rich warm mids, and deep resonant sub-bass.
              </p>
            </div>

            <div className="bg-[#FDFBF9] dark:bg-black p-6 rounded-3xl border border-[#EFEBE9] dark:border-[#333333] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl font-black">
                <i className="bi bi-shield-shaded"></i>
              </div>
              <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Extreme Durability</h4>
              <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed">
                Tested against 10,000 drop cycles, high humidity, and monsoon rains with IPX7 certification.
              </p>
            </div>

            <div className="bg-[#FDFBF9] dark:bg-black p-6 rounded-3xl border border-[#EFEBE9] dark:border-[#333333] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl font-black">
                <i className="bi bi-currency-rupee"></i>
              </div>
              <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Direct Value</h4>
              <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed">
                No middleman markups. We engineer our components directly, passing 50% cost savings to you.
              </p>
            </div>

            <div className="bg-[#FDFBF9] dark:bg-black p-6 rounded-3xl border border-[#EFEBE9] dark:border-[#333333] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl font-black">
                <i className="bi bi-truck-front-fill"></i>
              </div>
              <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Doorstep Warranty</h4>
              <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed">
                No waiting at service centers. Our courier collects your unit and delivers a replacement in 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
