import React, { useState, useEffect } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess,
  showToast
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

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

  const subtotal = cart.reduce((total, item) => {
    const price = item.discountPrice || item.price;
    return total + price * item.quantity;
  }, 0);

  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 99;
  const totalAmount = subtotal + shippingFee;

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your shopping cart is empty.', 'error');
      return;
    }
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      onCheckoutSuccess();
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-black border-l border-transparent dark:border-[#333333] shadow-2xl flex flex-col justify-between">
          <div className="p-6 border-b border-[#EFEBE9] dark:border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="bi bi-bag-check-fill text-[#3E2723] dark:text-[#D7CCC8] text-xl"></i>
              <h3 className="font-bold text-[#3E2723] dark:text-white text-base">Your Cart</h3>
              <span className="bg-[#EFEBE9] dark:bg-[#121212] text-[#3E2723] dark:text-[#D7CCC8] text-xs px-2.5 py-0.5 rounded-full font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-[#5D4037] hover:text-[#3E2723] dark:text-[#A1A1AA] dark:hover:text-white flex items-center justify-center text-xl transition-colors"
            >
              <i className="bi bi-x-lg text-base"></i>
            </button>
          </div>

          <div className="px-6 py-3 bg-[#FDFBF9] dark:bg-black border-b border-[#EFEBE9] dark:border-[#333333]">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span className="text-[#5D4037] dark:text-[#A1A1AA]">
                {isFreeShipping
                  ? '🎉 Congratulations! You unlocked Free Shipping!'
                  : `Add ₹${(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for Free Shipping`}
              </span>
              <span className="font-bold text-[#3E2723] dark:text-[#D7CCC8]">{Math.round(shippingProgress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#EFEBE9] dark:bg-[#2D2D30] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#3E2723] to-[#8D6E63] rounded-full transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFEBE9] dark:bg-[#121212] text-[#8D6E63] mx-auto flex items-center justify-center text-2xl">
                  <i className="bi bi-cart-x"></i>
                </div>
                <h4 className="font-bold text-[#3E2723] dark:text-white text-base">Your cart is empty</h4>
                <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] max-w-xs mx-auto">
                  Looks like you haven't added any wireless audio or smart wearables yet.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#3E2723] text-white text-xs font-bold hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemPrice = item.discountPrice || item.price;
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-2xl border border-[#EFEBE9] dark:border-[#2D2D30] bg-[#FDFBF9] dark:bg-[#121212] relative group"
                  >
                    <div className="w-20 h-20 bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#EFEBE9] dark:border-[#2D2D30] p-2 flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h5 className="font-semibold text-xs text-[#3E2723] dark:text-white line-clamp-1 pr-6">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#8D6E63] hover:text-red-500 transition-colors"
                            title="Remove item"
                          >
                            <i className="bi bi-trash3 text-xs"></i>
                          </button>
                        </div>
                        <p className="text-[10px] text-[#8D6E63] font-bold uppercase tracking-wider mt-0.5">
                          {item.brand}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#EFEBE9] dark:border-[#2D2D30] rounded-lg bg-white dark:bg-[#1E1E1E]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9] dark:hover:bg-[#2D2D30] rounded-l-lg transition-colors"
                          >
                            <i className="bi bi-dash text-xs"></i>
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#3E2723] dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#5D4037] dark:text-[#A1A1AA] hover:bg-[#EFEBE9] dark:hover:bg-[#2D2D30] rounded-r-lg transition-colors"
                          >
                            <i className="bi bi-plus text-xs"></i>
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="font-bold text-sm text-[#3E2723] dark:text-white">
                            ₹{(itemPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                          {item.quantity > 1 && (
                            <p className="text-[10px] text-[#8D6E63] dark:text-[#A1A1AA]">
                              (₹{itemPrice.toLocaleString('en-IN')} each)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-[#EFEBE9] dark:border-[#333333] bg-[#FDFBF9] dark:bg-black space-y-4">
              <div className="space-y-1.5 text-xs text-[#5D4037] dark:text-[#A1A1AA] pt-2 border-t border-[#EFEBE9] dark:border-[#333333]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#3E2723] dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#3E2723] dark:text-white">
                    {shippingFee === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${shippingFee.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-[#3E2723] dark:text-white pt-2 border-t border-[#EFEBE9] dark:border-[#333333]">
                  <span>Total Amount</span>
                  <span className="text-[#3E2723] dark:text-white">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={onClearCart}
                  className="px-3 py-3 border border-[#EFEBE9] dark:border-[#333333] hover:bg-[#EFEBE9] dark:hover:bg-[#121212] text-[#5D4037] dark:text-[#A1A1AA] rounded-xl text-xs font-semibold transition-colors"
                  title="Clear all items"
                >
                  <i className="bi bi-trash3"></i>
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="flex-1 py-3.5 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#3E2723]/20 flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing Order...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-lock-fill"></i>
                      <span>Proceed to Checkout</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
