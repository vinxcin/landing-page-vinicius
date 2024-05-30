/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      'inconsolata': ['Inconsolata', 'sans-serif'],
      'lexend': ['Lexend', 'sans-serif'],
      'lexend-exa': ['Lexend Exa', 'sans-serif'],

    },

    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        'bg-blur': "url('./src/assets/bg-blur.png')",
        'bg-stars': "url('./src/assets/bg-stars.png')",
        'bg-stars-2': "url('./src/assets/bg-stars-2.png')",
        'bg-rep': "url('https://github.com/vinxcin/landing_page_republica')"
      },
      screens: {
        "md": "995px",
        'sm-custom': { 'min': '994px' },

      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "transparent",
        foreground: "hsl(var(--foreground))",
        primary: {
          primary: '#18C9CA',
        },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   // foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}