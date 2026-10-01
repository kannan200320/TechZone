import React, { useState } from 'react';

export default function Cart({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate,
  onSelectProduct,
  onCheckoutSuccess,
  showToast
}) {
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((total, item) => {
    const price = item.discountPrice || item.price;
    return total + price * item.quantity;
  }, 0);

  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onCheckoutSuccess();
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#FDFBF9] dark:bg-black mt-4 min-h-[75vh] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3E2723] dark:text-white mb-3">Your Cart</h1>
          <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm">Review your selected premium electronics.</p>
        </div>

        {cart.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16 px-6 bg-white dark:bg-[#1E1E1E] rounded-[2.5rem] border border-[#EFEBE9] dark:border-[#2D2D30] shadow-sm space-y-4">
            <i className="bi bi-cart-x text-6xl text-[#8D6E63] dark:text-[#D7CCC8] mb-2 block"></i>
            <h2 className="text-2xl font-bold text-[#3E2723] dark:text-white">Your cart is empty</h2>
            <p className="text-[#5D4037] dark:text-[#A1A1AA] text-sm">Looks like you haven't added any gear yet.</p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('products')}
                className="inline-block bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg text-sm"
              >
                Explore Products
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 text-left">
              {cart.map((item) => {
                const itemPrice = item.discountPrice || item.price;
                const totalItemPrice = itemPrice * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] p-4 sm:p-6 rounded-2xl relative shadow-sm"
                  >
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors p-1"
                      title="Remove item"
                    >
                      <i className="bi bi-x-lg text-lg"></i>
                    </button>

                    <div
                      onClick={() => onSelectProduct(item)}
                      className="w-28 h-28 sm:w-32 sm:h-32 bg-[#FDFBF9] dark:bg-[#121212] rounded-xl border border-[#EFEBE9] dark:border-[#2D2D30] p-3 flex-shrink-0 cursor-pointer flex items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 w-full flex flex-col justify-between py-1">
                      <div>
                        <p className="text-[10px] font-bold text-[#8D6E63] dark:text-[#D7CCC8] uppercase tracking-widest">
                          {item.brand} • {item.category}
                        </p>
                        <h4 className="text-lg font-semibold text-[#3E2723] dark:text-white mt-1 pr-8">
                          <button
                            onClick={() => onSelectProduct(item)}
                            className="hover:text-[#8D6E63] dark:hover:text-[#D7CCC8] transition-colors text-left"
                          >
                            {item.name}
                          </button>
                        </h4>
                        <p className="text-[#3E2723] dark:text-white font-bold mt-2 text-sm">
                          ₹{itemPrice.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-2">
                        <div className="flex items-center border border-[#EFEBE9] dark:border-[#2D2D30] rounded-lg bg-[#FDFBF9] dark:bg-[#121212] overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-3.5 py-1.5 text-[#3E2723] dark:text-white hover:bg-[#EFEBE9] dark:hover:bg-[#2D2D30] font-bold transition-colors"
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span className="w-10 text-center font-bold text-[#3E2723] dark:text-white text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-3.5 py-1.5 text-[#3E2723] dark:text-white hover:bg-[#EFEBE9] dark:hover:bg-[#2D2D30] font-bold transition-colors"
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>

                        <div className="text-[#3E2723] dark:text-white font-bold text-lg">
                          ₹{totalItemPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-bold text-[#8D6E63] dark:text-[#D7CCC8] hover:underline flex items-center gap-1"
                >
                  <i className="bi bi-arrow-left"></i>
                  <span>Continue Shopping</span>
                </button>
                <button
                  onClick={onClearCart}
                  className="text-xs font-semibold text-slate-500 hover:text-red-500 transition-colors"
                >
                  Clear All Cart Items
                </button>
              </div>
            </div>

            <div className="lg:col-span-1 text-left">
              <div className="bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] rounded-2xl p-6 sticky top-24 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#3E2723] dark:text-white uppercase tracking-wider text-sm border-b border-[#EFEBE9] dark:border-[#333333] pb-4">
                  Order Summary
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-[#5D4037] dark:text-[#A1A1AA]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#3E2723] dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-[#5D4037] dark:text-[#A1A1AA]">
                    <span>Shipping</span>
                    <span className="font-semibold text-emerald-600">Free</span>
                  </div>

                  <div className="flex justify-between text-[#5D4037] dark:text-[#A1A1AA] border-b border-[#EFEBE9] dark:border-[#333333] pb-4">
                    <span>Estimated Tax (5%)</span>
                    <span className="font-semibold text-[#3E2723] dark:text-white">₹{Math.round(tax).toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-[#3E2723] dark:text-white text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#3E2723] dark:text-white font-black">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="block w-full text-center bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-lg active:scale-98"
                >
                  {isProcessing ? 'Processing Order...' : 'Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
