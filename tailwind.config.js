module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
      "3xl": "1780px",
    },
    extend: {
      colors: {
        primary: "#08abae",
        dark: "#242529",
        // dark: {
        //   light: "#37373f",
        // },
        gray: {
          light: "#e5e7eb",
          default: "#999999",
          // hard: "#343D48",
          hard: "#37373f",
        },
        danger: "#FF1100",

        // previous
        body: "#5A5A5A",
        heading: "#212121",
        input: "#1D1E1F",
        black: "#000",
        white: "#fff",
        linen: "#FBF1E9",
        linenSecondary: "#ECE7E3",
        olive: "#3D9970",
        maroon: "#B03060",
        brown: "#C7844B",
        placeholder: "#707070",
        borderBottom: "#f7f7f7",
        facebook: "#4267B2",
        facebookHover: "#395fad",
        google: "#4285F4",
        googleHover: "#307bf9",
      },
      fontSize: {
        "10px": ".625rem",
        xs: ["0.75rem", { lineHeight: "1.33" }], // 12 - 16
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14 -21
        base: ["1rem", { lineHeight: "1.625" }], // 16 - 26
        lg: ["1.125rem", { lineHeight: "1.55" }], // 18-28
        xl: ["1.25rem", { lineHeight: "1.4" }], // 20 -28
        "2xl": ["1.5rem", { lineHeight: "1.2" }],
        "2xl": ["1.75rem", { lineHeight: "1.2" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.2" }],
        "7xl": ["4.5rem", { lineHeight: "1.2" }],
        "8xl": ["6rem", { lineHeight: "1.2" }],
        "9xl": ["8rem", { lineHeight: "1.2" }],
        "10xl": ["8.75rem", { lineHeight: "1.2" }],
      },
      boxShadow: {
        cart: "0 3px 6px rgba(0,0,0,0.12)",
        product: "0 6px 12px rgba(0,0,0,.08)",
        listProduct: "0 2px 4px rgba(0,0,0,.08)",
        navigation: "0 3px 6px rgba(0, 0, 0, 0.16)",
        navigationReverse: "0 -3px 6px rgba(0, 0, 0, 0.16)",
        header: "0 2px 3px rgba(0, 0, 0, 0.08)",
        vendorCard: "1px 1px 4px rgba(0, 0, 0, 0.12)",
        vendorCardHover: "0 6px 18px rgba(0, 0, 0, 0.12)",
        subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
        bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
        cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
        avatar: "0px 15px 30px rgba(0, 0, 0, 0.16)",
      },

      spacing: {
        "430px": "430px",
        "450px": "450px",
        "500px": "500px",
        "64vh": "64vh",
      },
      minHeight: {
        "50px": "50px",
      },
      scale: {
        80: "0.8",
        85: "0.85",
        300: "3",
        400: "4",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      backgroundImage: {
        "app-pattern": "url('/assets/images/app-pattern.png')",
      },
    },

    fontFamily: {
      body: ["'Open Sans', sans-serif"],
      satisfy: ["'Satisfy', cursive"],
      segoe: ["'Segoe UI', sans-serif"],
    },
  },
  plugins: [
    // require("@tailwindcss/forms")({
    //   strategy: "class",
    // }),
  ],
};
