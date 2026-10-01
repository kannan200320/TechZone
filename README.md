# ⚡ TechZone - Next-Gen Audio & Smart Wearables

A modern, responsive e-commerce web application inspired by India's leading consumer tech brands (**boAt, Noise, Boult, Fire-Boltt, and Mivi**), modeled after the clean layouts and feature-rich architecture of the [SportsPro Reference Store](https://sports-pro-gilt.vercel.app/).

---

## 🚀 Key Highlights & Features

- **Inspired by Electronics Giants**: Features top product lines inspired by boAt Airdopes & Rockerz, Noise ColorFit, Boult Audio Propods, Fire-Boltt Gladiator, Mivi Fort Soundbars, and TechZone Flagship Gaming headsets.
- **Reference Layout Equivalence**: Replicates the exact layout, feel, and features of `sports-pro-gilt.vercel.app` adapted for consumer electronics.
- **7 Fully Interactive Pages**:
  1. **Home**: Hero banner with trending animated badge, infinite brand logo marquee ticker, 3 Experience cards, 3 Who We Serve audience cards, 4 Category cards, The Technical Edge preview with live AI audio tuning indicator, Trending Products grid, 3 Customer testimonials, Bulk/Corporate Enquiry form, and CTA banner.
  2. **Products**: Catalog with live search, category checkboxes, brand filters, dynamic price range slider, sort dropdown (Featured, Price Low-to-High, Price High-to-Low, Top Rated, Most Reviewed), product counter, and loading skeleton placeholders.
  3. **Product Details**: Breadcrumbs, interactive image carousel / slider with clickable thumbnails and Next/Prev controls, in-stock indicator, savings percentage badge, color swatch picker, quantity selector (`-`, input, `+`), technical specifications table, key highlights, Add to Cart with quantity, and related products recommendations.
  4. **About Us**: Brand story ("Crafting Sound, Defining Lifestyle"), mission & vision, 4 core pillars, company metrics (5M+ users, 99.4% satisfaction), and leadership team profiles.
  5. **Contact Us**: Customer support form with real-time validation, 24/7 toll-free helpline, support email, Bangalore Experience Flagship location card, and interactive FAQ accordion.
  6. **Login**: Authentication card with validation, password visibility toggle (show/hide), remember me checkbox, **One-Click Demo Account Filler** (`user@techzone.com` / `TechZone@123`), and switch to Sign Up.
  7. **Sign Up**: Registration card with full name, email, phone, password with real-time strength meter (Weak/Medium/Strong), password confirmation check, terms agreement checkbox, and instant account creation.
- **Frontend State Management**:
  - **Cart Drawer**: Slide-out drawer with quantity increment/decrement, item deletion, coupon code redemption (`TECH40` for 40% OFF or `SAVE10` for 10% OFF), dynamic free shipping meter, price breakdown (subtotal, discount, shipping, total), and instant checkout.
  - **Wishlist Drawer/Modal**: 1-click wishlist toggle heart on all cards, saved items count, and 1-click "Move to Cart".
  - **Dark / Light Theme Toggle**: Persistent mode switcher with Moon/Sun icon synced across all elements and stored in `localStorage`.
  - **Toast Notifications**: Smooth animated alert notifications for Add to Cart, Wishlist updates, Login, Sign Up, Bulk Enquiries, and Support Tickets.
  - **Loading Skeleton**: Shimmer loading cards rendered during filtering transitions.
  - **Fully Responsive**: Mobile hamburger drawer with overlay, tablet grids, and desktop navigation.

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**: Semantic markup, custom CSS variables, keyframe animations (`bounce-slow`, `float`, `scroll-brands`, `shimmer`).
- **ReactJS (React 18/19)**: Modular components, clean beginner-friendly hooks (`useState`, `useEffect`, `useMemo`).
- **Tailwind CSS**: Utility-first styling with custom brand color palette.
- **Bootstrap Icons**: Lightweight icon set for shopping cart, hearts, arrows, stars, and controls.
- **Google Fonts**: Poppins font family.

---

## 📂 Project Architecture

```
TechZone/
├── index.html                   # Main entry point with Tailwind CDN, Fonts & Bootstrap Icons
├── standalone.html              # Standalone single-file bundle for direct offline/file:// double-click testing
├── package.json                 # Project dependencies & Vite scripts
├── README.md                    # Detailed documentation and beginner explanation guide
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── index.css                # Global theme variables, animations, dark mode overrides
│   ├── App.jsx                  # Root App component, hash router, global state, drawers
│   ├── data/
│   │   └── products.js          # Products, brands, categories, FAQs, testimonials, team
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header, announcement bar, theme toggle, badges
│   │   ├── Footer.jsx           # Reference-styled footer, newsletter form, social links
│   │   ├── ProductCard.jsx      # Reusable product card with sale badge, heart toggle, ratings
│   │   ├── SkeletonCard.jsx     # Shimmer skeleton loader card
│   │   ├── CartDrawer.jsx       # Slide-out cart drawer with promo codes & checkout
│   │   ├── WishlistModal.jsx    # Saved items drawer with "Move to Cart"
│   │   └── ToastContainer.jsx   # Animated notification toasts
│   └── pages/
│       ├── Home.jsx             # Complete landing page matching sports-pro reference
│       ├── Products.jsx         # Catalog with search, filters, price slider, and sorting
│       ├── ProductDetails.jsx   # Product page with carousel slider, specs, color swatches
│       ├── AboutUs.jsx          # Brand story, 4 pillars, stats, team members
│       ├── ContactUs.jsx        # Validated ticket form, FAQ accordion, location card
│       ├── Login.jsx            # Validated login with demo filler button
│       └── SignUp.jsx           # Validated registration with password strength meter
```

---

## 💻 How to Run the Project

### Method 1: Using Vite Dev Server (Recommended for Development)

1. Open a terminal in the project directory:
   ```bash
   cd c:\Users\KANNAN\Desktop\TechZone
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open the provided local URL in your browser:
   ```
   http://localhost:5173
   ```

### Method 2: Direct Offline / Browser File Double-Click (Zero Setup)

If you wish to test or grade the project directly without Node.js or terminal commands:
- Simply double-click **`standalone.html`** in Windows File Explorer!
- It loads React 18, Babel, and Tailwind via CDN and runs 100% in any modern browser immediately.

---

## 🎓 Beginner-Friendly Code Highlights

1. **State Persistence with `localStorage`**:
   The cart, wishlist, theme, and user session automatically save to the browser's `localStorage` so refreshing the page preserves your items.
2. **Form Validation Logic**:
   Clear helper functions check input formats (regex for emails, character lengths for passwords) and display helpful error messages below fields.
3. **Component Reusability**:
   The `<ProductCard />` component is reused across the Home page, Catalog page, and Related Products section without repeating code.
4. **Toast System**:
   A lightweight `showToast(message, type)` function generates auto-dismissing alerts with zero external heavy libraries.
