

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pumpkin: '#F55F1D',
        charcoal: '#1E1E1E',
        navyBlue: '#024AA8',
        scarlet: '#F80606',
        midnightBlack: '#1B1E20',
        midnightBlue: '#2F327D',
        flame: '#F80606',

      },
      boxShadow: {
        card: " 0px 10px 60px 0px #262D7614;"
      },
      screens: {
        // small laptops

        'sl': { 'max': '1727px' },
        "t": { "max": "1025px" },

      },
    },
  },
  plugins: [],
});