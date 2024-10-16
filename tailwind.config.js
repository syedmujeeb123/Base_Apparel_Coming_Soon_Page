module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "600px",
      md: "824px",
      lg: "1020px",
      xl: "1440px",
      xsm: "552px",
      mobile: "410px",
    },
    extend: {
      colors: {
        primary: {
          "desaturated-red": "hsl(0, 36%, 70%)",
          "soft-red": "hsl(0, 93%, 68%)",
          "light-primary": "hsl(0, 80%, 98%)", // More lighter color
          "linear-color": "hsl(0, 80%, 86%)",
        },
        neutral: {
          "dark-grayish-red": "hsl(0, 6%, 24%)",
        },
      },
      backgroundImage: {
        "gradient-to-light-1":
          "linear-gradient(135deg, hsl(2, 10%, 100%), hsl(10, 100%, 98%))",
        "gradient-to-light-2":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semibold: 600,
      },
    },
  },
  plugins: [],
};
