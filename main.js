const link = document.querySelector('input')
const url = 'https://www.google.com/search?client=firefox-b-d&q=google+search'
const obj = {}
const urlShortener = (longURL = '') => {
	let shortURL = 'jaemes.bond/' + longURL.replace(/[^a-z]/g, '').slice(-4)
	if (!obj[shortURL]) {
		obj[shortURL] = longURL
	}
	return shortURL
}
const urlRedirector = (shortURL = '') => {
	return obj[shortURL]
}
const short = urlShortener(url)
const original = urlRedirector(short)

document.querySelector('button').addEventListener('click', urlShortener)
