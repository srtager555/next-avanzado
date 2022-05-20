const colors = requiere("tailwindcss/color");

module.exports = {
   purge: [".src/**/*{html,js}"],
   theme: {
      colors: {
         ...colors,
      },
   },
};
