import React, { useState, useEffect } from 'react';

export default function Login({ onLoginSuccess, onNavigate, showToast, initialEmail = '' }) {
  const [email, setEmail] = useState(initialEmail || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct the highlighted errors.', 'error');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      
      const registeredUsers = (() => {
        try {
          const saved = localStorage.getItem('techzone_registered_users');
          return saved ? JSON.parse(saved) : [];
        } catch {
          return [];
        }
      })();

      const normalizedEmail = email.trim().toLowerCase();
      const matchedUser = registeredUsers.find(
        (u) => u.email.toLowerCase() === normalizedEmail
      );

      if (!matchedUser) {
        setErrors({ email: 'No account registered with this email address.' });
        showToast('Account not found. Please register first.', 'error');
        return;
      }

      if (matchedUser.password !== password) {
        setErrors({ password: 'Incorrect password. Please try again.' });
        showToast('Incorrect password. Please check your credentials.', 'error');
        return;
      }

      const user = {
        name: matchedUser.name,
        email: matchedUser.email,
        phone: matchedUser.phone || '',
        token: 'auth_' + Date.now()
      };

      if (rememberMe) {
        localStorage.setItem('techzone_user', JSON.stringify(user));
      }
      showToast(`Welcome back, ${matchedUser.name}!`, 'success');
      onLoginSuccess(user);
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-6 bg-[#FDFBF9] dark:bg-black transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-black border border-[#EFEBE9] dark:border-[#333333] rounded-[2.5rem] p-8 sm:p-10 shadow-xl space-y-6 text-left">
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
            Sign in with your registered account credentials.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA] mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="name@domain.com"
                className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl pl-10 pr-4 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                  errors.email
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                }`}
              />
              <i className="bi bi-envelope absolute left-3.5 top-3.5 text-slate-400 text-xs"></i>
            </div>
            {errors.email && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-[#5D4037] dark:text-[#A1A1AA]">
                Password
              </label>
              <button
                type="button"
                onClick={() => showToast('Password reset link sent to registered email.', 'success')}
                className="text-[11px] text-[#8D6E63] dark:text-[#D7CCC8] hover:underline font-semibold"
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                placeholder="Enter password"
                className={`w-full bg-[#FDFBF9] dark:bg-[#121212] border rounded-xl pl-10 pr-10 py-3 text-xs text-[#3E2723] dark:text-white focus:outline-none transition-colors ${
                  errors.password
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-[#EFEBE9] dark:border-[#2D2D30] focus:border-[#8D6E63]'
                }`}
              />
              <i className="bi bi-lock absolute left-3.5 top-3.5 text-slate-400 text-xs"></i>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-[#3E2723] dark:hover:text-white transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-xs`}></i>
              </button>
            </div>
            {errors.password && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.password}</p>}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded text-[#3E2723] focus:ring-[#8D6E63] border-slate-300 dark:border-slate-700 cursor-pointer accent-[#3E2723] dark:accent-[#8D6E63]"
            />
            <label htmlFor="rememberMe" className="text-xs text-[#5D4037] dark:text-[#A1A1AA] cursor-pointer select-none">
              Remember me on this browser
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-[#3E2723] hover:bg-[#5D4037] dark:bg-[#121212] dark:hover:bg-[#2D2D30] dark:border dark:border-[#333333] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right text-sm"></i>
                <span>Sign In to Account</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#EFEBE9] dark:border-[#2D2D30] text-xs text-[#5D4037] dark:text-[#A1A1AA]">
          <span>Don't have an account yet? </span>
          <button
            onClick={() => onNavigate('signup')}
            className="font-bold text-[#8D6E63] dark:text-[#D7CCC8] hover:underline"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}
