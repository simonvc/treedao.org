module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["Roboto", "Archivo Black"],
        },
      },
      colors: {
        navyBlue: "#2f4858",
        darkGreen: "#3f4a3c",
        middleGreen: "#dff8d5",
        brandGreen: "#9DD3CD",
        grayGreen: "#a3af9e",
        offWhite: "#f8fff8",
        saturatedDarkBlue: "#006695",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
};
