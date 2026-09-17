/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 🎨 BRAND COLORS - Easy to update when you get client's brand guide
      // Just replace the hex values below with your client's colors
      colors: {
        // Blue Ridge palette — spruce, walnut, and bronze for Western NC
        construction: {
          primary: '#1F3A3A',   // Deep spruce/teal - trust, mountains, depth
          secondary: '#3F2A22', // Dark walnut - craftsmanship, warmth, wood
          accent: '#C4A574',    // Bronze/tan - quality highlights, CTAs
          dark: '#121417',      // Near-black - text, dark sections
          light: '#F3EFE7',     // Warm paper - page backgrounds
          stone: '#6E6A62',     // Warm slate-gray - secondary text, muted elements
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        heading: ['Newsreader', 'Georgia', 'serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
