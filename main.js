document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const link = document.querySelector('input').value
  const url = `https://api.shrtco.de/v2/shorten?url=${link}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h4').innerText = data.result.full_short_link2
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}