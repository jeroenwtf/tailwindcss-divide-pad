const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "divide-pad": (value) => ({
        '&[class*="divide-x"] > *': {
          paddingLeft: value,
          paddingRight: value,
          "&:first-child": {
            paddingLeft: "0",
          },
          "&:last-child": {
            paddingRight: "0",
          },
        },
        '&[class*="divide-y"] > *': {
          paddingTop: value,
          paddingBottom: value,
          "&:first-child": {
            paddingTop: "0",
          },
          "&:last-child": {
            paddingBottom: "0",
          },
        },
      }),
    },
    {
      values: theme("spacing"),
    },
  );
});
