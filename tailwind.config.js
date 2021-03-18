module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["Roboto", "Archivo Black"],
        },
      },
      // transitionProperty: {
      //   width: "width",
      // },
      // transitionDuration: {
      //   2000: "2000ms",
      //   2250: "2250ms",
      //   4000: "4000ms",
      //   4250: "4250ms",
      //   6000: "6000ms",
      //   6250: "6250ms",
      // },
      // transitionTimingFunction: {
      //   "ease-in-out-slowed": "cubic-bezier(0.3, 0.2, 1, 1)",
      // },
      boxShadow: {
        "md-top":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
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
