/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 🎨 BRAND COLORS - Easy to update when you get client's brand guide
      // Just replace the hex values below with your client's colors
      colors: {
        // Small Town Craftsman palette - warm, residential, Western NC
        construction: {
          primary: '#2D6A4F',   // Forest green - trust, nature, community
          secondary: '#74502A', // Walnut brown - craftsmanship, warmth, wood
          accent: '#E9B84A',    // Warm amber/gold - quality highlights, CTAs
          dark: '#1C1F1A',      // Near-black with warm undertone - text, dark sections
          light: '#F7F3EC',     // Warm linen/cream - page backgrounds
          stone: '#5C6047',     // Warm olive-gray - secondary text, muted elements
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
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
