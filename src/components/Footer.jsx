import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#3E2723] dark:bg-black text-[#D7CCC8] dark:text-[#A1A1AA] pt-16 pb-8 border-t border-[#5D4037]/30 dark:border-[#333333] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#5D4037]/40 dark:border-[#333333]">
          <div className="lg:col-span-2 space-y-5 text-left">
            <div className="flex items-center gap-2.5">
              <svg 
                className="w-8 h-8 text-[#a5b4fc] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
              </svg>
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Tech</span>
                <span className="text-[#D7CCC8]">Zone</span>
              </span>
            </div>

            <p className="text-sm text-[#D7CCC8]/80 dark:text-[#A1A1AA] leading-relaxed max-w-md">
              TechZone is a growing consumer lifestyle tech brand offering premium audio, smart wearables, and high-performance gaming products. We create innovative technology designed for the next generation of active users.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: 'bi-instagram', href: 'https://www.instagram.com/' },
                { icon: 'bi-youtube', href: 'https://www.youtube.com/' },
                { icon: 'bi-twitter-x', href: 'https://www.twitter.com/' },
                { icon: 'bi-facebook', href: 'https://www.facebook.com/' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="w-9 h-9 rounded-xl bg-[#5D4037] hover:bg-white hover:text-[#3E2723] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Shop Brands</h4>
            <ul className="space-y-3 text-sm p-0 m-0 list-none pl-0 ml-0">
              {[
                'boAt',
                'Noise',
                'Boult',
                'Fire-Boltt'
              ].map((item, idx) => (
                <li key={idx} className="p-0 m-0 list-none pl-0 ml-0">
                  <button
                    onClick={() => {
                      onNavigate('products');
                      window.dispatchEvent(new CustomEvent('filterBrand', { detail: item }));
                    }}
                    className="hover:text-white transition-colors text-left p-0 m-0 bg-transparent border-0 block focus:outline-none"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm p-0 m-0 list-none pl-0 ml-0">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' },
                { label: 'Browse Products', page: 'products' },
                { label: 'Shopping Cart', page: 'cart' },
                { label: 'Warranty & Support', page: 'contact' }
              ].map((item, idx) => (
                <li key={idx} className="p-0 m-0 list-none pl-0 ml-0">
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="hover:text-white transition-colors text-left p-0 m-0 bg-transparent border-0 block focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7CCC8]/70 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} TechZone Electronics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
