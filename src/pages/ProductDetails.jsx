import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductDetails({
  product,
  allProducts = [],
  onNavigate,
  onSelectProduct,
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <p className="text-base font-bold text-[#3E2723] dark:text-white">Product not found.</p>
        <button
          onClick={() => onNavigate('products')}
          className="px-6 py-2.5 bg-[#3E2723] hover:bg-[#5D4037] text-white rounded-xl text-xs font-bold transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  const currentImage = galleryImages[activeImageIndex] || product.image;
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 3);

  const unitPrice = product.discountPrice || product.price;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="py-8 md:py-12 bg-[#FDFBF9] dark:bg-black transition-colors min-h-[80vh] text-left">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between text-xs">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-[#5D4037] dark:text-[#A1A1AA] hover:text-[#3E2723] dark:hover:text-white font-semibold transition-colors"
          >
            <i className="bi bi-arrow-left"></i>
            <span>Back to Products</span>
          </button>
          <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-bold tracking-wider uppercase text-[11px]">
            {product.brand}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start pb-14 border-b border-[#EFEBE9] dark:border-[#333333]">
          <div className="space-y-4">
            <div className="bg-white dark:bg-[#121212] rounded-3xl border border-[#EFEBE9] dark:border-[#333333] p-8 aspect-square flex items-center justify-center relative shadow-sm overflow-hidden">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain max-h-[380px] transition-transform duration-300 hover:scale-105"
              />
              {product.discountPrice && (
                <span className="absolute top-4 left-4 bg-[#3E2723] dark:bg-white text-white dark:text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Sale
                </span>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 justify-center overflow-x-auto py-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl border p-1 bg-white dark:bg-[#121212] transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#3E2723] dark:border-white shadow-sm scale-105'
                        : 'border-[#EFEBE9] dark:border-[#333333] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#8D6E63] dark:text-[#D7CCC8] mb-1">
                {product.brand}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#3E2723] dark:text-white leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <i className="bi bi-star-fill text-xs"></i>
                  <span>{product.rating}</span>
                </div>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <span className="text-[#5D4037] dark:text-[#A1A1AA]">{product.reviews} reviews</span>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <i className="bi bi-check-circle-fill text-[11px]"></i> In Stock
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3 pb-4 border-b border-[#EFEBE9] dark:border-[#333333]">
              {product.discountPrice ? (
                <>
                  <span className="text-3xl font-extrabold text-[#3E2723] dark:text-white">
                    ₹{product.discountPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-base text-[#8D6E63] dark:text-[#A1A1AA] line-through">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                    Save ₹{(product.price - product.discountPrice).toLocaleString('en-IN')}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-extrabold text-[#3E2723] dark:text-white">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed">
              {product.description}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold text-[#3E2723] dark:text-white uppercase tracking-wider">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-[#5D4037] dark:text-[#A1A1AA]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <i className="bi bi-check2 text-[#8D6E63] dark:text-[#D7CCC8] font-bold"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
                <div className="flex items-center border border-[#EFEBE9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#121212] h-11 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 h-full flex items-center justify-center text-[#3E2723] dark:text-white hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors"
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span className="w-8 sm:w-10 text-center font-bold text-xs text-[#3E2723] dark:text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stock || 99, q + 1))}
                    className="px-3 h-full flex items-center justify-center text-[#3E2723] dark:text-white hover:bg-[#EFEBE9] dark:hover:bg-[#1E1E1E] transition-colors"
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(product, quantity)}
                  className="flex-1 min-w-[150px] bg-[#3E2723] hover:bg-[#5D4037] dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-white h-11 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm px-3"
                >
                  <i className="bi bi-bag-plus"></i>
                  <span>Add to Cart • ₹{totalPrice.toLocaleString('en-IN')}</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isWishlisted
                      ? 'border-[#8D6E63] text-[#8D6E63] dark:border-white dark:text-white'
                      : 'border-[#EFEBE9] dark:border-[#333333] text-[#5D4037] dark:text-[#A1A1AA] hover:border-[#8D6E63]'
                  }`}
                  title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                >
                  <i className={`bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'} text-sm`}></i>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-[11px] text-[#5D4037]/80 dark:text-[#A1A1AA]">
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-truck"></i> Free Shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-shield-check"></i> 1-Year Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="bi bi-arrow-repeat"></i> 7-Day Returns
                </span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="pt-12">
            <h3 className="text-xl font-bold text-[#3E2723] dark:text-white mb-6">
              More from {product.brand}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onSelect={onSelectProduct}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlist.some((item) => item.id === p.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
