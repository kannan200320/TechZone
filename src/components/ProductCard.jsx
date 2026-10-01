import React from 'react';

export default function ProductCard({
  product,
  onSelect,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  const priceDisplay = product.discountPrice ? (
    <div className="flex items-center gap-1.5">
      <span className="text-[#3E2723] dark:text-white font-bold text-sm">
        ₹{product.discountPrice.toLocaleString('en-IN')}
      </span>
      <span className="text-slate-400 line-through text-xs">
        ₹{product.price.toLocaleString('en-IN')}
      </span>
    </div>
  ) : (
    <span className="text-[#3E2723] dark:text-white font-bold text-sm">
      ₹{product.price.toLocaleString('en-IN')}
    </span>
  );

  return (
    <div className="group card flex flex-col h-full bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] rounded-3xl p-4 transition-all duration-500 hover:border-[#8D6E63] hover:shadow-xl relative overflow-hidden">
      <div className="aspect-square bg-[#FDFBF9] dark:bg-[#121212] rounded-2xl mb-4 border border-[#EFEBE9] dark:border-[#333333] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.discountPrice && (
            <span className="bg-[#3E2723] dark:bg-[#2D2D30] text-white text-[10px] px-2.5 py-0.5 rounded-full font-extrabold shadow-sm border border-transparent dark:border-[#333333]">
              {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label="Toggle Wishlist"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-[#1E1E1E]/90 shadow-md flex items-center justify-center text-slate-400 hover:text-[#8D6E63] dark:hover:text-[#D7CCC8] z-10 transition-transform active:scale-90"
        >
          {isWishlisted ? (
            <i className="bi bi-heart-fill text-[#8D6E63] dark:text-[#D7CCC8] text-sm"></i>
          ) : (
            <i className="bi bi-heart text-sm"></i>
          )}
        </button>

        <div 
          onClick={() => onSelect(product)}
          className="w-full h-full flex items-center justify-center cursor-pointer p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      <div className="px-1 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-[#8D6E63] dark:text-[#D7CCC8]">
          <span>{product.brand}</span>
        </div>

        <h4 className="font-semibold text-[#3E2723] dark:text-white text-sm mb-1 mt-1 truncate">
          <button
            onClick={() => onSelect(product)}
            className="hover:text-[#8D6E63] dark:hover:text-[#D7CCC8] transition-colors text-left truncate w-full"
          >
            {product.name}
          </button>
        </h4>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EFEBE9] dark:border-[#2D2D30] mb-4">
          <div className="flex items-center gap-1 text-amber-500 text-xs">
            <i className="bi bi-star-fill"></i>
            <span className="text-[#3E2723] dark:text-[#A1A1AA] font-semibold">{product.rating}</span>
            <span className="text-slate-400 text-[10px]">({product.reviews})</span>
          </div>
          <div>{priceDisplay}</div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 mt-auto shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
        >
          <i className="bi bi-bag-plus"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
