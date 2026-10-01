import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import { brands } from '../data/products.jsx';

export default function Products({
  products,
  onSelectProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  selectedBrandFromNav
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(8000);
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedBrandFromNav && selectedBrandFromNav !== 'All') {
      const target = selectedBrandFromNav === 'Fire-Bolt' ? 'Fire-Boltt' : selectedBrandFromNav;
      setSelectedBrands([target]);
    }
  }, [selectedBrandFromNav]);

  useEffect(() => {
    const handleBrandEvent = (e) => {
      if (e.detail) {
        const target = e.detail === 'Fire-Bolt' ? 'Fire-Boltt' : e.detail;
        setSelectedBrands([target]);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 250);
      }
    };
    window.addEventListener('filterBrand', handleBrandEvent);
    return () => window.removeEventListener('filterBrand', handleBrandEvent);
  }, []);

  const toggleBrand = (brand) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 200);
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setMaxPrice(8000);
    setSortBy('featured');
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const query = searchTerm.toLowerCase().trim();
      const matchSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);

      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(p.brand);

      const actualPrice = p.discountPrice || p.price;
      const matchPrice = actualPrice <= maxPrice;

      return matchSearch && matchBrand && matchPrice;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [products, searchTerm, selectedBrands, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-[#FDFBF9] dark:bg-black transition-colors">
      <section className="relative flex items-center bg-white dark:bg-[#121212] overflow-hidden py-14 border-b border-[#EFEBE9] dark:border-[#2D2D30]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 text-left">
              <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-widest text-xs">
                Official Catalog
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#3E2723] dark:text-white tracking-tight">
                Shop the <span className="text-[#8D6E63] dark:text-[#D7CCC8]">Aesthetic</span> You Love.
              </h1>
              <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm max-w-lg leading-relaxed">
                Every audio device and smartwatch is hand-selected to meet our high performance standards. Sourced from certified pro manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <aside className="space-y-6 lg:sticky lg:top-24 text-left">
              {(searchTerm || selectedBrands.length > 0 || maxPrice < 150) && (
                <button
                  onClick={resetFilters}
                  className="w-full py-2.5 px-4 rounded-2xl bg-[#EFEBE9] dark:bg-[#1E1E1E] border border-[#8D6E63]/30 dark:border-[#2D2D30] text-[#3E2723] dark:text-[#D7CCC8] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#8D6E63] hover:text-white transition-colors"
                >
                  <i className="bi bi-arrow-counterclockwise"></i>
                  <span>Clear All Active Filters</span>
                </button>
              )}

              <div className="bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] p-6 rounded-3xl shadow-sm">
                <h5 className="text-[#3E2723] dark:text-white font-bold text-xs uppercase tracking-wider mb-3">
                  Search Gadgets
                </h5>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search earbuds, watches..."
                    className="w-full border border-[#EFEBE9] dark:border-[#2D2D30] bg-[#FDFBF9] dark:bg-[#121212] text-[#3E2723] dark:text-white rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-[#8D6E63] focus:outline-none transition-all placeholder:text-[#5D4037]/50 dark:placeholder:text-zinc-500"
                  />
                  {searchTerm ? (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-[#8D6E63]"
                    >
                      <i className="bi bi-x-circle-fill text-xs"></i>
                    </button>
                  ) : (
                    <i className="bi bi-search absolute right-3.5 top-3 text-[#8D6E63] text-xs"></i>
                  )}
                </div>
              </div>

              <div className="bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] p-6 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-[#3E2723] dark:text-white font-bold text-xs uppercase tracking-wider">
                    Brands
                  </h5>
                  {selectedBrands.length > 0 && (
                    <button
                      onClick={() => setSelectedBrands([])}
                      className="text-[10px] text-[#8D6E63] dark:text-[#D7CCC8] hover:underline font-semibold"
                    >
                      Reset
                    </button>
                  )}
                </div>
                <div className="space-y-2.5">
                  {brands.filter((b) => b !== 'All').map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    const count = products.filter((p) => p.brand === brand).length;
                    return (
                      <label
                        key={brand}
                        className="flex items-center justify-between text-xs text-[#5D4037] dark:text-[#A1A1AA] font-medium cursor-pointer hover:text-[#3E2723] dark:hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleBrand(brand)}
                            className="w-4 h-4 rounded text-[#3E2723] focus:ring-[#8D6E63] border-slate-300 dark:border-slate-700 cursor-pointer accent-[#3E2723] dark:accent-[#8D6E63]"
                          />
                          <span>{brand}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold">({count})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] p-6 rounded-3xl shadow-sm">
                <h5 className="text-[#3E2723] dark:text-white font-bold text-xs uppercase tracking-wider mb-4">
                  Price Range
                </h5>
                <input
                  type="range"
                  min="1000"
                  max="8000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 150);
                  }}
                  className="w-full accent-[#3E2723] dark:accent-[#8D6E63] cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-xs font-semibold text-[#5D4037] dark:text-[#A1A1AA]">
                  <span>₹1,000</span>
                  <span className="text-[#3E2723] dark:text-white font-bold bg-[#EFEBE9] dark:bg-[#121212] border border-transparent dark:border-[#333333] px-2 py-0.5 rounded-md">
                    Max: ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                  <span>₹8,000+</span>
                </div>
              </div>
            </aside>

            <main className="lg:col-span-3 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] p-4 rounded-2xl gap-4 shadow-sm">
                <div className="text-xs text-[#5D4037] dark:text-[#A1A1AA] font-bold uppercase tracking-wider">
                  <span className="text-[#3E2723] dark:text-white text-sm font-black mr-1">
                    {filteredProducts.length}
                  </span>
                  products found
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#8D6E63] dark:text-[#A1A1AA] uppercase tracking-wider">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-[#EFEBE9] dark:border-[#2D2D30] bg-[#FDFBF9] dark:bg-[#121212] text-[#3E2723] dark:text-white rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8D6E63]"
                  >
                    <option value="featured">Featured / Trending</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="reviews">Most Reviewed</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-[#1E1E1E] border border-[#EFEBE9] dark:border-[#2D2D30] rounded-3xl p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FDFBF9] dark:bg-[#121212] text-[#8D6E63] dark:text-[#D7CCC8] mx-auto flex items-center justify-center text-3xl">
                    <i className="bi bi-search"></i>
                  </div>
                  <h4 className="text-lg font-bold text-[#3E2723] dark:text-white">
                    No matching electronics found
                  </h4>
                  <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] max-w-sm mx-auto">
                    Try adjusting your filters, clearing your search keywords, or expanding the price range slider.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2.5 bg-[#3E2723] hover:bg-[#5D4037] text-white rounded-xl text-xs font-bold transition-colors shadow-md"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredProducts.map((prod) => (
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
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
