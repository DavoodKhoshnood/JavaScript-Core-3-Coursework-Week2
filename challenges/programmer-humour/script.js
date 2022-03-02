let imageApiUrl = `https://xkcd.now.sh/?comic=latest`

function render() {
  let promise = fetch(imageApiUrl)
  promise
    .then((res) => res.json())
    .then((resData) => {
      let div = document.querySelector('div')
      let img = document.querySelector('img')
      img.src = resData.img
      div.appendChild(img)
    })
    .catch((err) => console.log('Error : ' + err))
}

window.onload = render
