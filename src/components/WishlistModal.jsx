import React, { useEffect } from 'react';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlist,
  onAddToCart,
  onRemoveFromWishlist,
  onMoveAllToCart,
  onSelectProduct
}) {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden overscroll-contain">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-black border-l border-transparent dark:border-[#333333] shadow-2xl flex flex-col justify-between">
          <div className="p-6 border-b border-[#EFEBE9] dark:border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="bi bi-heart-fill text-[#8D6E63] text-xl"></i>
              <h3 className="font-bold text-[#3E2723] dark:text-white text-base">My Wishlist</h3>
              <span className="bg-[#EFEBE9] dark:bg-[#121212] text-[#3E2723] dark:text-[#D7CCC8] text-xs px-2.5 py-0.5 rounded-full font-bold">
                {wishlist.length} saved
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-[#5D4037] hover:text-[#3E2723] dark:text-[#A1A1AA] dark:hover:text-white flex items-center justify-center text-xl transition-colors"
            >
              <i className="bi bi-x-lg text-base"></i>
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFEBE9] dark:bg-[#121212] text-[#8D6E63] mx-auto flex items-center justify-center text-2xl">
                  <i className="bi bi-heart"></i>
                </div>
                <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Your wishlist is empty</h4>
                
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#3E2723] text-white text-xs font-bold hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-2xl border border-[#EFEBE9] dark:border-[#2D2D30] bg-[#FDFBF9] dark:bg-[#121212] relative group"
                >
                  <div 
                    onClick={() => { onSelectProduct(item); onClose(); }}
                    className="w-20 h-20 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#EFEBE9] dark:border-[#2D2D30] p-2 flex items-center justify-center cursor-pointer flex-shrink-0"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 
                          onClick={() => { onSelectProduct(item); onClose(); }}
                          className="font-semibold text-xs text-[#3E2723] dark:text-white line-clamp-1 cursor-pointer hover:text-[#8D6E63]"
                        >
                          {item.name}
                        </h5>
                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          className="text-[#8D6E63] hover:text-red-500 transition-colors"
                          title="Remove from wishlist"
                        >
                          <i className="bi bi-trash3 text-xs"></i>
                        </button>
                      </div>
                      <p className="text-[10px] text-[#8D6E63] font-bold uppercase tracking-wider mt-0.5">
                        {item.brand} • {item.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EFEBE9] dark:border-[#2D2D30]">
                      <span className="font-bold text-sm text-[#3E2723] dark:text-white">
                        ₹{(item.discountPrice || item.price)?.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => {
                          onAddToCart(item);
                          onRemoveFromWishlist(item.id, false);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#1E1E1E] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white text-[11px] font-bold flex items-center gap-1 transition-colors"
                      >
                        <i className="bi bi-bag-plus"></i>
                        <span>Move to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {wishlist.length > 0 && (
            <div className="p-6 border-t border-[#EFEBE9] dark:border-[#333333] bg-[#FDFBF9] dark:bg-black">
              <button
                onClick={() => {
                  if (onMoveAllToCart) {
                    onMoveAllToCart();
                  } else {
                    wishlist.forEach((item) => onAddToCart(item));
                    onClose();
                  }
                }}
                className="w-full py-3 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#3E2723]/20 flex items-center justify-center gap-2"
              >
                <i className="bi bi-bag-check"></i>
                <span>Move All to Cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
