import React, { useState } from 'react';

export default function SignUp({ onRegisterSuccess, onNavigate, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (formData.phone.trim() && formData.phone.trim().length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits.';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must accept the terms and conditions.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fix the errors before creating your account.', 'error');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      const normalizedEmail = formData.email.trim().toLowerCase();

      let existingUsers = [];
      try {
        const saved = localStorage.getItem('techzone_registered_users');
        if (saved) existingUsers = JSON.parse(saved);
      } catch {
        existingUsers = [];
      }

      const alreadyExists = existingUsers.some(
        (u) => u.email.toLowerCase() === normalizedEmail
      );

      if (alreadyExists) {
        setErrors({ email: 'An account with this email already exists. Please sign in.' });
        showToast('An account with this email already exists.', 'error');
        return;
      }

      const registeredUser = {
        name: formData.name.trim(),
        email: normalizedEmail,
        phone: formData.phone.trim(),
        password: formData.password,
        registeredAt: new Date().toISOString()
      };

      existingUsers.push(registeredUser);
      localStorage.setItem('techzone_registered_users', JSON.stringify(existingUsers));

      showToast('Registration successful! Please sign in with your credentials.', 'success');
      
      if (onRegisterSuccess) {
        onRegisterSuccess(normalizedEmail);
      } else {
        onNavigate('login');
      }
    }, 700);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-6 bg-[#FDFBF9] dark:bg-black transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-xl space-y-6 text-left">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-8 h-8 text-[#5d54a4] dark:text-[#a5b4fc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a9 9 0 0 1 18 0v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
            </svg>
            <span className="text-3xl font-bold tracking-tight">
              <span className="logo-tech">Tech</span>
              <span className="logo-zone">Zone</span>
            </span>
          </div>
          <p className="text-xs text-[#5D4037] dark:text-[#A1A1AA]">
            Sign up to unlock 10% instant discount on your first order.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="e.g. Priya Sharma"
              className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-2.5 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
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
              placeholder="priya@example.com"
              className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-2.5 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
              Mobile Number (Optional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              placeholder="+91 98765 43210"
              className="w-full bg-[#FDFBF9] dark:bg-[#121212] border border-[#EFEBE9] dark:border-[#2D2D30] rounded-xl px-4 py-2.5 text-xs text-[#3E2723] dark:text-white focus:outline-none focus:border-[#8D6E63] transition-colors"
            />
            {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                placeholder="At least 6 characters"
                className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl pl-4 pr-10 py-2.5 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-[#3E2723] dark:hover:text-white transition-colors"
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-xs`}></i>
              </button>
            </div>
            {errors.password && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
                if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
              }}
              placeholder="Re-enter password"
              className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl px-4 py-2.5 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                errors.confirmPassword
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
              }`}
            />
            {errors.confirmPassword && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.confirmPassword}</p>}
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => {
                  setFormData({ ...formData, agreeTerms: e.target.checked });
                  if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: '' });
                }}
                className="w-4 h-4 mt-0.5 rounded text-[#3E2723] focus:ring-[#8D6E63] border-slate-300 dark:border-slate-700 cursor-pointer accent-[#3E2723] dark:accent-[#8D6E63]"
              />
              <span className="text-xs text-[#5D4037] dark:text-[#A1A1AA] select-none leading-tight">
                I agree to the <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-semibold hover:underline">Terms of Service</span> and <span className="text-[#8D6E63] dark:text-[#D7CCC8] font-semibold hover:underline">Privacy Policy</span>.
              </span>
            </label>
            {errors.agreeTerms && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.agreeTerms}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <i className="bi bi-check2-circle text-sm"></i>
                <span>Complete Registration</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#EFEBE9] dark:border-[#2D2D30] text-xs text-[#5D4037] dark:text-[#A1A1AA]">
          <span>Already have an account? </span>
          <button
            onClick={() => onNavigate('login')}
            className="font-bold text-[#8D6E63] dark:text-[#D7CCC8] hover:underline"
          >
            Sign In Here
          </button>
        </div>
      </div>
    </div>
  );
}
