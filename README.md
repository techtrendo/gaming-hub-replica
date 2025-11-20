# Gaming Center - Frontend Clone

A pixel-accurate, responsive clone of gaming.com.np built with React, Vite, TypeScript, and TailwindCSS.

## 🎮 Features

- **Responsive Design**: Mobile-first approach with breakpoints for mobile (≤640px), tablet (641-1024px), and desktop (≥1025px)
- **Product Catalog**: 120+ gaming products including top-ups, gift cards, subscriptions, and vouchers
- **Interactive UI**: Hero carousel, product quick view modals, category filters, search, and sorting
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and focus management
- **Static Data**: Uses `products.json` for all product data (ready for API integration)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable React components
│   ├── ui/          # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── HeroCarousel.tsx
│   ├── CategoryChips.tsx
│   └── QuickViewModal.tsx
├── pages/           # Route pages
│   ├── Index.tsx    # Home page
│   ├── Shop.tsx     # Shop with filters
│   ├── Contact.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utilities
└── index.css        # Global styles

public/
└── products.json    # Product data (120+ items)
```

## 🎨 Design System

### Colors

Defined in `src/index.css`:

```css
--brand-blue: 217 91% 50%       /* Primary CTA color (#0b6ef6) */
--brand-blue-dark: 217 91% 45%  /* Hover state */
--brand-blue-light: 217 91% 95% /* Light backgrounds */
--success-green: 142 71% 45%    /* Discount badges */
--warning-orange: 25 95% 53%    /* Special offer badges */
```

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- Base rhythm: 16px (1rem)
- Section gaps: 24px
- Border radius: 12px (buttons/cards)

## 🛒 Product Data

The `public/products.json` file contains 120+ products with the following structure:

```json
{
  "id": 1,
  "title": "80 Gems",
  "game": "Clash of Clans",
  "category": "Top Up",
  "price": 100,
  "oldPrice": 120,
  "currency": "Rs",
  "image": "/placeholder.svg",
  "tag": "Top Up",
  "provider": "Supercell",
  "featured": true
}
```

### Categories

- **Top Up**: In-game currency (gems, diamonds, coins, etc.)
- **Gift Card**: Digital gift cards (Steam, Google Play, Xbox, PlayStation, etc.)
- **Subscription**: Monthly/yearly services (Netflix, YouTube Premium, Game Pass, etc.)
- **Voucher**: Special passes and one-time items (Battle Pass, Starlight Member, etc.)

## 🔌 API Integration

To connect to a real backend:

1. **Replace `products.json` fetch** in `src/pages/Index.tsx` and `src/pages/Shop.tsx`:

```typescript
// Current (static):
fetch("/products.json")
  .then((res) => res.json())
  .then((data) => setProducts(data));

// Replace with:
fetch("https://your-api.com/products")
  .then((res) => res.json())
  .then((data) => setProducts(data));
```

2. **Add environment variables** in `.env`:

```
VITE_API_BASE_URL=https://your-api.com
```

3. **Update form submissions** in `Contact.tsx`, `Login.tsx`, `Register.tsx` to POST to your endpoints.

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`)
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Focus outlines visible
- Alt text on all images
- Form validation with error messages

## 📱 Responsive Breakpoints

- **Mobile**: ≤640px (2-column product grid)
- **Tablet**: 641-1024px (3-column product grid)
- **Desktop**: ≥1025px (4-5 column product grid)

## 🎯 Performance

- Lazy loading for product images
- Optimized hero images (WebP format recommended)
- Code splitting via React Router
- Production build minification

### Target Metrics

- Lighthouse Performance: ≥90
- Lighthouse Accessibility: ≥95
- First Contentful Paint: <1.5s

## 🧪 Testing

### Manual Testing Checklist

- [ ] Home page loads all featured products
- [ ] Hero carousel auto-plays and pauses on hover
- [ ] Category filter updates product grid
- [ ] Search filters products by name/game
- [ ] Sort dropdown reorders products correctly
- [ ] Quick view modal opens with product details
- [ ] Add to cart updates cart count
- [ ] Mobile menu opens/closes properly
- [ ] All forms validate inputs and show errors
- [ ] Keyboard navigation works throughout site
- [ ] Footer links navigate correctly

## 📄 Pages

### Home (`/`)

- Hero carousel
- Popular games quick links
- Category chips
- Featured products grid
- All products grid with filters

### Shop (`/shop`)

- Breadcrumbs
- Category filters
- Search bar
- Sort dropdown
- Full product catalog with pagination

### Contact (`/contact`)

- Contact form with validation
- Contact information cards
- Map/location placeholder

### Login (`/login`)

- Email/password form
- Link to register

### Register (`/register`)

- Full registration form
- Terms & conditions checkbox
- Link to login

## 🎨 Visual Differences from Reference

This is a pixel-accurate recreation based on the gaming.com.np reference. Key matched elements:

- **Header**: Logo, nav links, search, cart, auth buttons
- **Hero**: Carousel with promotional banners
- **Products**: Card layout with image, title, game, price, discount badge, hover actions
- **Footer**: Contact info, quick links, useful links, social icons, copyright text
- **Colors**: Brand blue (#0b6ef6), neutral grays, success green, warning orange

## 🔧 Customization

### Change Brand Color

Edit `src/index.css`:

```css
--brand-blue: 217 91% 50%; /* Change HSL values */
```

### Add New Product Category

1. Add products with new `category` to `products.json`
2. Category will auto-appear in filters

### Modify Product Card Layout

Edit `src/components/ProductCard.tsx`

## 📞 Contact Information

- **Phone**: 9848995198 (Chat Before Calling)
- **Email**: [email protected]
- **Location**: Kanchanpur, Nepal

## 📜 License

Copyright © 2025 Gaming Center All Rights Reserved

---

**Built with ❤️ for gaming enthusiasts in Nepal**
