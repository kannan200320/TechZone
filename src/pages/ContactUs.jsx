import React, { useState } from 'react';
import { faqs } from '../data/products.jsx';

export default function ContactUs({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Warranty Claim',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 letters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).';
    }
    if (formData.phone.trim() && formData.phone.trim().length < 10) {
      newErrors.phone = 'Phone number should be at least 10 digits.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide message details (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fix the errors in the form before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Enquiry sent successfully!', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Warranty Claim',
        message: ''
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="bg-[#FDFBF9] dark:bg-black text-[#3E2723] dark:text-white transition-colors">
      <section className="relative py-16 bg-white dark:bg-black border-b border-[#EFEBE9] dark:border-[#333333]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
         
          <h1 className="text-3xl sm:text-5xl font-black text-[#3E2723] dark:text-white tracking-tight">
            We're Always <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-serif italic">Here</span> For You.
          </h1>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] rounded-[2.5rem] p-8 md:p-10 shadow-sm text-left">
            <h3 className="text-2xl font-black text-[#3E2723] dark:text-white mb-2">Send Us a Direct Message</h3>
            <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA] mb-8">
              Fill out the form below with your inquiry and we'll connect you directly with a dedicated acoustics manager.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@example.com"
                    className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
                    Contact Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
                    Subject / Concern
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#FDFBF9] dark:bg-[#121212] border border-[#EFEBE9] dark:border-[#2D2D30] rounded-xl px-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none focus:border-[#8D6E63] transition-colors"
                  >
                    <option>Warranty Claim & Pickup</option>
                    <option>Order Delivery Status</option>
                    <option>Product Recommendation</option>
                    <option>Corporate / Bulk Gifting</option>
                    <option>Other Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Describe your issue or order number here..."
                  className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                    errors.message
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                  }`}
                ></textarea>
                {errors.message && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill text-sm"></i>
                    <span>Submit Customer Ticket</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <div className="p-6 rounded-3xl bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl flex-shrink-0">
                <i className="bi bi-telephone-inbound-fill"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] dark:text-white text-sm">Toll-Free Helpline</h4>
                <p className="text-xs text-[#5D4037]/70 dark:text-[#A1A1AA] mt-0.5">Mon - Sun, 9:00 AM - 9:00 PM</p>
                <a href="tel:1800123456" className="text-sm font-black text-[#8D6E63] dark:text-[#D7CCC8] hover:underline block mt-2">
                  1800-123-4567
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl flex-shrink-0">
                <i className="bi bi-envelope-at-fill"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] dark:text-white text-sm">Email Support</h4>
                <p className="text-xs text-[#5D4037]/70 dark:text-[#A1A1AA] mt-0.5">Response within 4 hours</p>
                <a href="mailto:support@techzone.com" className="text-sm font-black text-[#8D6E63] dark:text-[#D7CCC8] hover:underline block mt-2">
                  support@techzone.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEBE9] dark:bg-[#121212] flex items-center justify-center text-[#8D6E63] dark:text-[#D7CCC8] text-xl flex-shrink-0">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#3E2723] dark:text-white text-sm">Experience Center</h4>
                <p className="text-xs text-[#5D4037]/70 dark:text-[#A1A1AA] mt-0.5">Flagship Audio Lounge</p>
                <p className="text-xs font-bold text-[#3E2723] dark:text-white mt-1">
                  Brigade Road, Indiranagar, Bangalore 560038
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-black border-t border-[#EFEBE9] dark:border-[#333333] transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="text-center mb-12">
            <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-bold uppercase tracking-widest text-xs">Help & Answers</span>
            <h3 className="text-3xl font-black text-[#3E2723] dark:text-white mt-1">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF9] dark:bg-black rounded-2xl border border-[#EFEBE9] dark:border-[#333333] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-xs sm:text-sm text-[#3E2723] dark:text-white hover:text-[#8D6E63] transition-colors text-left"
                >
                  <span>{faq.question}</span>
                  <i className={`bi bi-chevron-down text-xs transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-[#8D6E63]' : 'text-[#8D6E63]'}`}></i>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-[#5D4037] dark:text-[#A1A1AA] leading-relaxed border-t border-[#EFEBE9] dark:border-[#2D2D30] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
