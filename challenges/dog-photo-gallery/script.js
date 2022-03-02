const contentDiv = document.getElementById('content')
const btn = document.querySelector('button')
const list = document.querySelector('ul')

btn.addEventListener('click', () => {
  try {
    getNewPhoto()
  } catch (err) {
    alert('Pse error : ' + err.message)
  }
})

function getNewPhoto() {
  let promise = fetch(`https://dog.ceo/api/breeds/image/random`)
  promise
    .then((res) => res.json())
    .then((imgSrc) => addPhotoToList(imgSrc.message))
    .catch((err) => {
      alert(`Error : ${err.message}`)
    })
}

function addPhotoToList(imgSrc) {
  let newList = document.createElement('i')
  let newImg = document.createElement('img')
  newImg.src = imgSrc
  newImg.style.width = '400px'

  newList.classList.add('list-group-item')
  newList.appendChild(newImg)
  list.appendChild(newList)
}
