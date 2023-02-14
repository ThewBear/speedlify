module.exports = {
  name: "PHP Frameworks", // optional, falls back to object key
  description: "PHP Frameworks",
  options: {
    frequency: 60 * Math.floor(Math.random() * 3 + 20), // 20 - 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: [
    "https://laravel.com/",
    "https://symfony.com/",
    "https://codeigniter.com/",
    "https://kotchasan.com/",
    "https://somtum.kotchasan.com/",
  ],
};
