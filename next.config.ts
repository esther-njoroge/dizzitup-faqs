
// const nextConfig = {
//   i18n: {
//     locales: ['en', 'fr', 'pt'],  // List your supported languages here
//     defaultLocale: 'en',          // Set the default language here
//     localeDetection: true         // Optional: Enable automatic locale detection
//   },
//   /* other config options here */
// };

// export default nextConfig;




// second

// const nextConfig = {
//   i18n: {
//     locales: ['en', 'fr', 'pt', 'ar', 'am', 'sw', 'yo'],  // List your supported languages here
//     defaultLocale: 'en',                                  // Set the default language here
//     localeDetection: true                                 // Enable automatic locale detection
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;



// third - before

// const nextConfig = {
//   i18n: {
//     locales: ['en', 'fr', 'pt', 'ar', 'am', 'sw', 'yo'], // Added all supported languages
//     defaultLocale: 'en',
//     localeDetection: true
//   },
//   // other config options
// };

// module.exports = nextConfig;




// last
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n: {
    locales: ["en", "fr"], // Add other locales as needed
    defaultLocale: "en",
    localePath: "./public/locales",
  },
};
