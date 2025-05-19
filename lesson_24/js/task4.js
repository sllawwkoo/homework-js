// Задача 4.
// Дано список URL адрес.
// Підрахувати кількість адрес,
// що відносяться до кожного із доменів (edu, com, org,...).

function getCountAllowedDomains(urls, allowedDomains) {
	const domainRegex = /\.([a-z]{2,})(\/|$)/;
	const domainCount = new Map();

	for (const url of urls) {
		const match = url.match(domainRegex);
		if (match) {
			const domain = match[1];
			if (allowedDomains.includes(domain)) {
				domainCount.set(domain, (domainCount.get(domain) || 0) + 1);
			}
		}
	}

	return domainCount;
}

const urls = [
	"https://www.google.com",
	"https://example.com",
	"https://en.wikipedia.org",
	"https://www.mit.edu",
	"https://github.com",
	"https://example.org",
	"https://harvard.edu",
	"https://nodejs.org",
	"https://openai.com",
	"https://university.edu",
	"https://randomsite.net",
	"https://strangedomain.xyz",
	"https://coolpage.dev",
];

const allowedDomains = ["com", "org", "edu"];

const wrapper = document.querySelector(".result-wrapper");

const result = getCountAllowedDomains(urls, allowedDomains);

for (const [domain, count] of result) {
	const createdElement = document.createElement("p");
	createdElement.textContent = `${domain}: ${count}`;
	wrapper.appendChild(createdElement);
}
