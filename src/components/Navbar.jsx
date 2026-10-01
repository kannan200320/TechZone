import React, { useState } from 'react';

export default function Navbar({
  currentPage,
  setCurrentPage,
  cartCount,
  wishlistCount,
  isDarkMode,
  setIsDarkMode,
  onOpenCart,
  onOpenWishlist,
  user,
  onLogout,
  onOpenLogin
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setCategoriesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header id="mainNavbar" className="sticky top-0 left-0 w-full z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-[#EFEBE9] dark:border-[#333333] shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <svg className="w-8 h-8 text-[#5d54a4] dark:text-[#a5b4fc] flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
            </svg>
            <div className="flex items-center text-2xl font-bold tracking-tight">
              <span className="logo-tech">Tech</span>
              <span className="logo-zone">Zone</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-200 hover:text-[#8D6E63] dark:hover:text-white relative py-1 ${
                  currentPage === link.id
                    ? 'text-[#3E2723] dark:text-white font-bold'
                    : 'text-[#5D4037] dark:text-[#A1A1AA]'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E2723] dark:bg-white rounded-full animate-fadeIn" />
                )}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setCategoriesDropdown(!categoriesDropdown)}
                className="nav-categories-toggle flex items-center gap-1.5 text-[#5D4037] dark:text-[#A1A1AA] hover:text-[#8D6E63] dark:hover:text-white transition-colors py-1"
              >
                <span>Brands</span>
                <i className={`bi bi-chevron-down text-xs transition-transform duration-200 ${categoriesDropdown ? 'rotate-180 text-[#8D6E63] dark:text-white' : ''}`}></i>
              </button>

              {categoriesDropdown && (
                <div 
                  className="brand-dropdown-menu absolute left-0 mt-3 w-44 bg-white dark:bg-black rounded-2xl shadow-xl border border-[#EFEBE9] dark:border-[#333333] py-2 px-1 z-50 animate-fadeIn"
                  onMouseLeave={() => setCategoriesDropdown(false)}
                >
                  {[
                    'boAt',
                    'Noise',
                    'Boult',
                    'Fire-Boltt'
                  ].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => {
                        setCategoriesDropdown(false);
                        handleNavClick('products');
                        window.dispatchEvent(new CustomEvent('filterBrand', { detail: brand }));
                      }}
                      className="brand-nav-btn w-full text-left px-4 py-2 text-xs font-semibold text-[#5D4037] dark:text-[#A1A1AA] hover:text-[#8D6E63] dark:hover:text-white bg-transparent hover:bg-transparent transition-colors block"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors text-lg"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <i className="bi bi-sun-fill text-amber-400"></i>
              ) : (
                <i className="bi bi-moon-stars-fill text-[#3E2723]"></i>
              )}
            </button>

            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors text-lg"
              title="My Wishlist"
            >
              <i className="bi bi-heart"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#8D6E63] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('cart')}
              aria-label="Shopping Cart"
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors text-lg"
              title="My Cart"
            >
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#3E2723] dark:bg-[#8D6E63] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#EFEBE9] dark:border-[#2D2D30]">
                <div className="w-8 h-8 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                  {user.name ? user.name[0] : 'U'}
                </div>
                <div className="text-left text-xs hidden md:block">
                  <p className="font-bold text-[#3E2723] dark:text-white leading-none truncate max-w-[100px]">{user.name}</p>
                  <button 
                    onClick={onLogout}
                    className="text-[10px] text-[#8D6E63] hover:underline font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <i className="bi bi-person-fill"></i>
                <span>Sign In</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[#3E2723] dark:text-white text-2xl hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors"
            >
              <i className="bi bi-list"></i>
            </button>

          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div id="mobileMenu" className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#FDFBF9] dark:bg-black border-l border-transparent dark:border-[#333333] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EFEBE9] dark:border-[#333333]">
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 text-[#5d54a4] dark:text-[#a5b4fc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                  <span className="text-xl font-bold tracking-tight">
                    <span className="logo-tech">Tech</span>
                    <span className="logo-zone">Zone</span>
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg text-[#5D4037] hover:text-[#3E2723] dark:text-[#A1A1AA] dark:hover:text-white flex items-center justify-center text-xl"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              {user && (
                <div className="p-3 my-4 rounded-xl bg-white dark:bg-[#121212] border border-[#EFEBE9] dark:border-[#2D2D30] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-sm">
                    {user.name ? user.name[0] : 'U'}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-bold text-[#3E2723] dark:text-white truncate">{user.name}</p>
                    <p className="text-[10px] text-[#8D6E63] dark:text-[#A1A1AA] truncate">{user.email}</p>
                  </div>
                </div>
              )}

              <ul className="space-y-2 mt-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        currentPage === link.id
                          ? 'bg-[#EFEBE9] dark:bg-[#121212] text-[#3E2723] dark:text-white font-bold'
                          : 'text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9]/60 dark:hover:bg-[#121212]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <i className="bi bi-chevron-right text-xs text-[#8D6E63]"></i>
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenWishlist(); }}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9]/60 dark:hover:bg-[#121212] flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <i className="bi bi-heart text-[#8D6E63]"></i>
                      <span>Wishlist</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#8D6E63] text-white text-xs font-bold">
                      {wishlistCount}
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleNavClick('cart'); }}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9]/60 dark:hover:bg-[#121212] flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <i className="bi bi-bag text-[#8D6E63]"></i>
                      <span>Cart</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#3E2723] dark:bg-[#8D6E63] text-white text-xs font-bold">
                      {cartCount}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#EFEBE9] dark:border-[#2D2D30] space-y-3">
              <div className="flex items-center justify-between px-2 py-2">
                <span className="text-xs font-medium text-[#5D4037] dark:text-[#A1A1AA]">Theme</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFEBE9] dark:border-[#2D2D30] text-xs font-bold flex items-center gap-2 text-[#3E2723] dark:text-white"
                >
                  {isDarkMode ? <i className="bi bi-sun-fill text-amber-400"></i> : <i className="bi bi-moon-stars-fill"></i>}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              {user ? (
                <button
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="w-full py-3 rounded-xl bg-[#EFEBE9] dark:bg-[#121212] text-[#8D6E63] dark:text-[#D7CCC8] font-bold text-xs hover:bg-[#EFEBE9]/80 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
                  className="w-full py-3 rounded-xl bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white font-bold text-xs transition-colors shadow-lg shadow-[#3E2723]/20"
                >
                  Sign In / Register
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
