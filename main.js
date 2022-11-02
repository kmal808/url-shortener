// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const link = document.querySelector('input').value
//   const url = `https://api.shrtco.de/v2/shorten?url=${link}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h4').innerText = data.result.full_short_link2
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

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

console.log(short)
console.log(original)
