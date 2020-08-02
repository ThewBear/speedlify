module.exports = {
	name: "thewdhanat.com", // optional, falls back to object key
	description: "Thew’s Personal web site",
	options: {
		frequency: 60 * 5 + 30, // 5h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.thewdhanat.com/",
		"https://www.thewdhanat.com/blog/"
	]
};