# Transport Company Landing Page

A modern, responsive landing page for a transport/logistics company built with React, TypeScript, and Vite.

## 🚀 Features

- **Multi-language Support**: English and German translations with language switcher
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI Components**: 
  - Fixed header with navigation and language switcher
  - Hero section with call-to-action and contact shortcut
  - Service cards with detailed descriptions
  - Statistics animations with framer-motion
  - Contact form with validation
  - Footer with Google Maps integration
  - About Us page with company information

## 📋 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Styling**: CSS3 with modern features
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── Services/       # Services section
│   ├── Statistics/     # Statistics section
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer with maps
│   └── About/          # About page components
├── context/            # React contexts (LanguageContext)
├── hooks/              # Custom React hooks (useLanguage)
├── pages/              # Page components
│   └── About.tsx      # About page
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants (translations)
└── App.tsx            # Main application component
```

## 🔧 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download Git](https://git-scm.com/)

You can verify your installations by running:
```bash
node --version
npm --version
git --version
```

### Step 1: Clone the Repository

Clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/your-username/julijana_vs_code.git
```

Or if you're using SSH:
```bash
git clone git@github.com:your-username/julijana_vs_code.git
```

Navigate into the project directory:
```bash
cd julijana_vs_code
```

### Step 2: Install Dependencies

Install all required project dependencies using npm:

```bash
npm install
```

This will install all packages listed in `package.json`, including:
- React and React DOM
- TypeScript
- Vite
- React Router DOM
- Framer Motion
- Lucide React
- ESLint and TypeScript ESLint

**Note**: If you encounter any issues during installation, try:
- Clearing npm cache: `npm cache clean --force`
- Deleting `node_modules` and `package-lock.json`, then running `npm install` again
- Using `npm install --legacy-peer-deps` if there are peer dependency conflicts

### Step 3: Start the Development Server

Once dependencies are installed, start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

The dev server supports:
- **Hot Module Replacement (HMR)**: Changes reflect immediately without full page reload
- **Fast Refresh**: React components update while preserving their state
- **Error Overlay**: Clear error messages displayed in the browser

### Step 4: Verify Installation

Open your browser and navigate to `http://localhost:5173`. You should see:
- The transport company landing page
- Working navigation menu
- Language switcher (English/German)
- All sections rendering correctly

## 🛠️ Available Scripts

The project includes several npm scripts for development and production:

### Development
```bash
npm run dev          # Start development server on http://localhost:5173
```

### Production
```bash
npm run build        # Build for production (outputs to /dist folder)
npm run preview      # Preview the production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint to check code quality and find errors
```

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`tsc -b`)
2. Build optimized production assets using Vite
3. Output files to the `dist/` directory

The `dist/` folder contains:
- Optimized JavaScript bundles
- Minified CSS
- Optimized images and assets
- `index.html` ready for deployment

### Preview Production Build

Before deploying, preview the production build locally:

```bash
npm run preview
```

This serves the production build at `http://localhost:4173` (default port) so you can verify everything works correctly.

## 🚀 Deployment

The `dist/` folder contains all files needed for deployment. You can deploy to:

- **Static Hosting**: Netlify, Vercel, GitHub Pages, etc.
- **Web Server**: Upload the `dist/` folder contents to your web server
- **CDN**: Serve files through a content delivery network

**Example for Vercel:**
```bash
npm install -g vercel
vercel
```

**Example for Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

## 🐛 Troubleshooting

### Common Issues

**Issue: Port 5173 already in use**
```bash
# Kill process on port 5173
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Or specify a different port:
npm run dev -- --port 3000
```

**Issue: Module not found errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Clear TypeScript cache and rebuild
rm -rf node_modules/.cache
npm run build
```

**Issue: ESLint configuration errors**
- Ensure you're using Node.js 16+
- Check that all dependencies are properly installed
- Run `npm run lint` to see specific error messages

## 🔒 Environment Variables

Currently, the project doesn't require environment variables. If you need to add configuration (e.g., API keys, endpoints), create a `.env` file in the root directory:

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser.

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vite.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

This project follows modern React development practices:
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Responsive design principles

### Development Guidelines

1. Write TypeScript code with proper types
2. Follow existing component structure
3. Ensure responsive design (mobile-first)
4. Add translations for both English and German
5. Run `npm run lint` before committing
6. Test on multiple browsers and devices

## 📄 License

Private project for transport company.

---

## 🗺️ Development Roadmap

### Phase 1: ✅ Completed
- [x] Project setup with Vite + React + TypeScript
- [x] Header with navigation and language switcher
- [x] Hero section with call-to-action
- [x] Multi-language support (EN/DE)
- [x] Responsive design foundation

### Phase 2: ✅ Completed
- [x] Services section with cards
- [x] Statistics section with animations
- [x] Contact form with validation
- [x] Footer with Google Maps integration
- [x] About Us page

### Phase 3: 📋 Planned
- [ ] Enhanced animations
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Progressive Web App (PWA) support
- [ ] Accessibility improvements

---

**Need Help?** If you encounter any issues during setup or have questions, please open an issue on GitHub or contact the development team.
