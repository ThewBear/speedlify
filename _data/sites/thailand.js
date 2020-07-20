module.exports = {
	name: "Thailand", // optional, falls back to object key
	description: "Thailand Top web sites",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
        "https://www.google.co.th/",
        "https://www.pantip.com/",
        "https://shopee.co.th/",
        "https://www.lazada.co.th/",
        "https://www.sanook.com/",
        "https://www.thairath.co.th/",
        "https://www.kapook.com/",
        "https://www.dek-d.com/",
        "https://www.khaosod.co.th/",
        "https://www.wongnai.com/",
        "https://mthai.com/",
        "https://mgronline.com/",
        "https://th.wikipedia.org/",
	]
};
