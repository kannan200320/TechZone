import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistModal from './components/WishlistModal';
import ToastContainer from './components/ToastContainer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';

import { products } from './data/products.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategoryFromNav, setSelectedCategoryFromNav] = useState('All');

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('techzone_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('techzone_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('techzone_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [prefilledLoginEmail, setPrefilledLoginEmail] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('techzone_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('techzone_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('techzone_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      localStorage.setItem('techzone_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('techzone_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setCurrentPage('home');
      } else if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        const found = products.find((p) => p.id === prodId);
        if (found) {
          setSelectedProduct(found);
          setCurrentPage('product-details');
        }
      } else if (['products', 'about', 'contact', 'login', 'signup', 'cart'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, product = null) => {
    if (page === 'product-details' && product) {
      setSelectedProduct(product);
      setCurrentPage('product-details');
      window.location.hash = `product/${product.id}`;
    } else {
      setCurrentPage(page);
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lastToastRef = React.useRef({ message: '', time: 0 });

  const showToast = (message, type = 'success') => {
    const now = Date.now();
    if (lastToastRef.current.message === message && now - lastToastRef.current.time < 500) {
      return;
    }
    lastToastRef.current = { message, time: now };

    const id = now + Math.random();
    setToasts((prev) => {
      if (prev.some((t) => t.message === message)) {
        return prev;
      }
      return [...prev, { id, message, type }];
    });

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast('Added to cart', 'success');
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed from cart', 'info');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart cleared', 'info');
  };

  const handleCheckoutSuccess = () => {
    setCart([]);
    showToast('Order placed successfully!', 'success');
  };

  const handleToggleWishlist = (product) => {
    const isCurrentlyWishlisted = wishlist.some((item) => item.id === product.id);
    if (isCurrentlyWishlisted) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast('Added to wishlist', 'success');
    }
  };

  const handleRemoveFromWishlist = (productId, showNotification = true) => {
    setWishlist((prev) => prev.filter((w) => w.id !== productId));
    if (showNotification) {
      showToast('Removed from wishlist', 'info');
    }
  };

  const handleMoveAllWishlistToCart = () => {
    if (wishlist.length === 0) return;
    setCart((prev) => {
      let updated = [...prev];
      wishlist.forEach((item) => {
        const exists = updated.find((c) => c.id === item.id);
        if (exists) {
          updated = updated.map((c) => (c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
        } else {
          updated.push({ ...item, quantity: 1 });
        }
      });
      return updated;
    });
    showToast(`🎉 Moved ${wishlist.length} saved item${wishlist.length > 1 ? 's' : ''} to your cart!`, 'success');
    setWishlist([]);
    setIsWishlistOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('techzone_user');
    setUser(null);
    showToast('You have been logged out safely.', 'info');
    navigateTo('home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF9] dark:bg-black text-[#3E2723] dark:text-white transition-colors duration-300">
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <Navbar
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenCart={() => navigateTo('cart')}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        user={user}
        onLogout={handleLogout}
        onOpenLogin={() => navigateTo('login')}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            products={products}
            onNavigate={navigateTo}
            onSelectProduct={(p) => navigateTo('product-details', p)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            showToast={showToast}
          />
        )}

        {currentPage === 'products' && (
          <Products
            products={products}
            onSelectProduct={(p) => navigateTo('product-details', p)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            selectedBrandFromNav={selectedCategoryFromNav}
          />
        )}

        {currentPage === 'product-details' && (
          <ProductDetails
            product={selectedProduct || products[0]}
            allProducts={products}
            onNavigate={navigateTo}
            onSelectProduct={(p) => navigateTo('product-details', p)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            showToast={showToast}
          />
        )}

        {currentPage === 'about' && (
          <AboutUs onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactUs showToast={showToast} />
        )}

        {currentPage === 'login' && (
          <Login
            initialEmail={prefilledLoginEmail}
            onLoginSuccess={(userData) => {
              setUser(userData);
              setPrefilledLoginEmail('');
              navigateTo('home');
            }}
            onNavigate={navigateTo}
            showToast={showToast}
          />
        )}

        {currentPage === 'signup' && (
          <SignUp
            onRegisterSuccess={(email) => {
              setPrefilledLoginEmail(email);
              navigateTo('login');
            }}
            onNavigate={navigateTo}
            showToast={showToast}
          />
        )}

        {currentPage === 'cart' && (
          <Cart
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
            onNavigate={navigateTo}
            onSelectProduct={(p) => navigateTo('product-details', p)}
            onCheckoutSuccess={handleCheckoutSuccess}
            showToast={showToast}
          />
        )}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckoutSuccess={handleCheckoutSuccess}
        showToast={showToast}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveAllToCart={handleMoveAllWishlistToCart}
        onSelectProduct={(p) => navigateTo('product-details', p)}
      />

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
