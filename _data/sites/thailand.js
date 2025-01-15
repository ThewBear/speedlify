module.exports = {
    name: "Thailand", // optional, falls back to object key
    description: "Thailand Top web sites",
    options: {
        frequency: 60 * Math.floor(Math.random() * 3 + 20), // 20 - 23 hours
        // Use "run" if the sites don’t share assets on the same origin
        //           and we can reset chrome with each run instead of
        //           each site in every run (it’s faster)
        // Use "site" if sites are all on the same origin and share assets.
        freshChrome: "run",
    },
    urls: [
        "https://www.google.co.th/",
        "https://pantip.com/",
        "https://shopee.co.th/",
        "https://www.lazada.co.th/",
        "https://www.dek-d.com/",
        "https://www.wongnai.com/",
        "https://th.wikipedia.org/wiki/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81",
        "https://www.blognone.com/",
        "https://www.apple.com/th/",
        "https://www.youtube.com/",
        "https://twitter.com/",
        "https://www.trueid.net/th-th",
        "https://www.sanook.com/",
        "https://www.thairath.co.th/home",
        "https://www.siamsport.co.th/",
        "https://tmd.go.th/",
        "https://dict.longdo.com/",
    ],
};
