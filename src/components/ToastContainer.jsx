import React from 'react';

export default function ToastContainer({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div 
      className="fixed top-6 right-6 z-[999999] flex flex-col gap-3 pointer-events-none items-end max-w-[92vw]"
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => {
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className="pointer-events-auto cursor-pointer flex items-center gap-3.5 bg-[#37221d] dark:bg-[#1E1E1E] text-white px-5 py-3.5 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.35)] border border-[#5D4037]/30 dark:border-[#333333] transition-all duration-300 transform animate-toast-slide select-none hover:scale-[1.02] active:scale-98"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              isError 
                ? 'bg-rose-200 text-rose-800' 
                : 'bg-[#d2c4bc] text-[#37221d]'
            }`}>
              {isError ? (
                <i className="bi bi-exclamation-lg text-sm font-black"></i>
              ) : (
                <svg className="w-3.5 h-3.5 stroke-[2.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>

            <span className="text-white font-semibold text-sm sm:text-base tracking-normal">
              {toast.message}
            </span>
          </div>
        );
      })}

      <style>{`
        @keyframes toastSlide {
          0% {
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-toast-slide {
          animation: toastSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
