import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { testimonials } from '../data/products.jsx';

export default function Home({
  products,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  showToast
}) {
  const trendingProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-0">
      <section className="relative min-h-[85vh] flex items-center pt-8 pb-20 bg-[#FDFBF9] dark:bg-black overflow-hidden transition-colors">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8D6E63]/10 dark:bg-[#8D6E63]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#3E2723]/10 dark:bg-[#1E1E1E]/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3E2723] dark:text-white leading-[1.1] tracking-tight">
                Unleash Your <br />
                <span className="text-[#8D6E63] dark:text-[#D7CCC8]">True Potential</span> <br />
                Today.
              </h1>

              <p className="text-[#5D4037] dark:text-[#A1A1AA] text-base sm:text-lg max-w-lg leading-relaxed font-normal">
                Gear up with certified studio-grade audio and high-performance smart wearables, featuring the latest ANC earbuds, sports watches, and portable soundbars.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-3.5 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white rounded-xl font-bold text-center shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Shop the Collection</span>
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-3.5 border-2 border-[#3E2723] dark:border-[#333333] text-[#3E2723] dark:text-white rounded-xl font-bold text-center hover:bg-[#3E2723] hover:text-white dark:hover:bg-[#1E1E1E] transition-all"
              >
                Explore Brands
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-8 border-t border-[#EFEBE9] dark:border-[#2D2D30]">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#3E2723] dark:text-white">5M+</p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#8D6E63] dark:text-[#A1A1AA] uppercase tracking-wider">Happy Users</p>
              </div>
              <div className="w-px h-8 bg-[#EFEBE9] dark:bg-[#2D2D30]"></div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#3E2723] dark:text-white">40ms</p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#8D6E63] dark:text-[#A1A1AA] uppercase tracking-wider">Beast Latency</p>
              </div>
              <div className="w-px h-8 bg-[#EFEBE9] dark:bg-[#2D2D30]"></div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#3E2723] dark:text-white">4.8★</p>
                <p className="text-[10px] sm:text-[11px] font-semibold text-[#8D6E63] dark:text-[#A1A1AA] uppercase tracking-wider">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(62,39,35,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 sm:border-8 border-white dark:border-[#1E1E1E] aspect-[4/3] sm:aspect-square bg-slate-950 flex items-center justify-center relative group">
              <img
                src="https://i.pinimg.com/1200x/84/b9/87/84b9876ac1be1371b3cc4fb5d4561be4.jpg"
                alt="TechZone Premium Audio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF9] dark:bg-[#121212] transition-colors" id="who-we-serve">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#3E2723] dark:text-white">
              Who is TechZone Built For?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#EFEBE9] dark:border-[#2D2D30] shadow-sm hover:shadow-xl hover:border-[#8D6E63] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF9] dark:bg-[#121212] rounded-2xl flex items-center justify-center mb-6 text-[#8D6E63] dark:text-[#D7CCC8]">
                  <i className="bi bi-heart-pulse-fill text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-[#3E2723] dark:text-white mb-3">Athletes & Runners</h4>
                <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  Secure fin-tips and smart health tracking keep your earbuds comfortable and your performance on track during every workout.
                </p>
              </div>
              <div className="border-t border-[#EFEBE9] dark:border-[#2D2D30] pt-4 mt-auto">
                <span className="text-[11px] text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-wider">
                  Benefit: Zero-slip grip & sweat resistance
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#EFEBE9] dark:border-[#2D2D30] shadow-sm hover:shadow-xl hover:border-[#8D6E63] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF9] dark:bg-[#121212] rounded-2xl flex items-center justify-center mb-6 text-[#8D6E63] dark:text-[#D7CCC8]">
                  <i className="bi bi-headset text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-[#3E2723] dark:text-white mb-3">Gamers & Streamers</h4>
                <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  Dolby Atmos 7.1 delivers immersive spatial sound, while noise-cancelling microphones keep team communication clear and crisp.
                </p>
              </div>
              <div className="border-t border-[#EFEBE9] dark:border-[#2D2D30] pt-4 mt-auto">
                <span className="text-[11px] text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-wider">
                  Benefit: Sub-40ms spatial audio cues
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl border border-[#EFEBE9] dark:border-[#2D2D30] shadow-sm hover:shadow-xl hover:border-[#8D6E63] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#FDFBF9] dark:bg-[#121212] rounded-2xl flex items-center justify-center mb-6 text-[#8D6E63] dark:text-[#D7CCC8]">
                  <i className="bi bi-briefcase-fill text-xl"></i>
                </div>
                <h4 className="text-xl font-bold text-[#3E2723] dark:text-white mb-3">Commuters & Executives</h4>
                <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  Active Noise Cancellation reduces unwanted background noise, while dual-pairing lets you switch seamlessly between your phone and laptop.
                </p>
              </div>
              <div className="border-t border-[#EFEBE9] dark:border-[#2D2D30] pt-4 mt-auto">
                <span className="text-[11px] text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-wider">
                  Benefit: Hybrid ANC & Dual Device Pairing
                </span>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg"
            >
              <span>Explore All Products</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-[#3E2723] dark:text-white">Explore Top Brands</h2>
              <p className="text-xs text-[#8D6E63] dark:text-[#A1A1AA] mt-1">Select a brand to view authentic certified gadgets</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-[#3E2723] dark:text-white font-bold border-b-2 border-[#3E2723] dark:border-[#D7CCC8] pb-1 hover:text-[#8D6E63] dark:hover:text-[#D7CCC8] transition-all text-sm whitespace-nowrap"
            >
              View Full Catalog →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              onClick={() => {
                onNavigate('products');
                window.dispatchEvent(new CustomEvent('filterBrand', { detail: 'boAt' }));
              }}
              className="relative overflow-hidden rounded-3xl aspect-[4/5] group cursor-pointer shadow-md"
            >
              <img
                src="https://i.pinimg.com/736x/1c/f4/b6/1cf4b67e2ff966581300361713b93850.jpg"
                alt="boAt"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">boAt</p>
                <p className="text-[#D7CCC8] text-xs font-semibold">TWS Earbuds, Over-Ear Bass & Speakers →</p>
              </div>
            </div>

            <div 
              onClick={() => {
                onNavigate('products');
                window.dispatchEvent(new CustomEvent('filterBrand', { detail: 'Noise' }));
              }}
              className="relative overflow-hidden rounded-3xl aspect-[4/5] group cursor-pointer shadow-md"
            >
              <img
                src="https://i.pinimg.com/736x/78/54/81/78548197910168c084d731c7182aabca.jpg"
                alt="Noise"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">Noise</p>
                <p className="text-[#D7CCC8] text-xs font-semibold">Smartwatches, AMOLED Displays & BT Audio →</p>
              </div>
            </div>

            <div 
              onClick={() => {
                onNavigate('products');
                window.dispatchEvent(new CustomEvent('filterBrand', { detail: 'Boult' }));
              }}
              className="relative overflow-hidden rounded-3xl aspect-[4/5] group cursor-pointer shadow-md"
            >
              <img
                src="https://i.pinimg.com/1200x/ac/bc/4a/acbc4a3d2bdbdb4ea5571b1d745ee80a.jpg"
                alt="Boult"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">Boult</p>
                <p className="text-[#D7CCC8] text-xs font-semibold">Studio Over-Ear & BoomX Bass →</p>
              </div>
            </div>

            <div 
              onClick={() => {
                onNavigate('products');
                window.dispatchEvent(new CustomEvent('filterBrand', { detail: 'Fire-Boltt' }));
              }}
              className="relative overflow-hidden rounded-3xl aspect-[4/5] group cursor-pointer shadow-md"
            >
              <img
                src="https://i.pinimg.com/736x/de/14/07/de1407112440e63ae690fcd203d9d164.jpg"
                alt="Fire-Boltt"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">Fire-Boltt</p>
                <p className="text-[#D7CCC8] text-xs font-semibold">Luxury Watches & Health Suite →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FDFBF9] dark:bg-black transition-colors border-t border-[#EFEBE9] dark:border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[#8D6E63] dark:text-[#D7CCC8] font-semibold tracking-wider text-xs uppercase mb-2">
              Reviews
            </h2>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#3E2723] dark:text-white">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#121212] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#EFEBE9] dark:border-[#333333] shadow-sm flex flex-col justify-between text-left hover:border-[#8D6E63] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-xs sm:text-sm"></i>
                    ))}
                  </div>

                  <p className="text-sm text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed mb-6">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFEBE9] dark:border-[#333333]">
                  <h5 className="font-bold text-sm text-[#3E2723] dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-[11px] text-[#8D6E63] dark:text-[#D7CCC8] mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#3E2723] dark:text-white">
             Trending Gear
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                isWishlisted={wishlist.some((item) => item.id === prod.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-3.5 border-2 border-[#3E2723] dark:border-[#333333] text-[#3E2723] dark:text-white rounded-xl font-bold text-sm hover:bg-[#3E2723] hover:text-white dark:hover:bg-[#1E1E1E] transition-all shadow-sm"
            >
              Explore All Products →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
