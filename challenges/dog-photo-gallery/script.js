const contentDiv = document.getElementById('content')
const btnReceive = document.createElement('button')
const btnAppend = document.createElement('button')
const imgDiv = document.createElement('div')
const receivedImg = document.createElement('img')
const list = document.createElement('ul')

btnReceive.classList.add('btn', 'btn-success', 'btn-lg', 'm-3')
btnAppend.classList.add('btn', 'btn-success', 'btn-lg')
list.style.backgroundColor = '#f512d'
imgDiv.style.backgroundColor = '#dcdbc0'
imgDiv.style.padding = '10px'
imgDiv.style.marginBottom = '10px'
imgDiv.style.width = '100%'
receivedImg.style.width = '300px'

btnReceive.innerText = 'Receive'
btnAppend.innerText = 'Append'

contentDiv.append(btnReceive, btnAppend, imgDiv, list)
imgDiv.appendChild(receivedImg)

let photoApiUrl = `https://dog.ceo/api/breeds/image/random`

///////// Receive button event ///////////
btnReceive.addEventListener('click', (event) => {
  event.preventDefault()
  try {
    getNewPhoto()
  } catch (err) {
    alert('Pse error : ' + err.message)
  }
})

///////// Append button event ///////////
btnAppend.addEventListener('click', addPhotoToList)

function getNewPhoto() {
  let promise = fetch(photoApiUrl)
  promise
    .then((res) => res.json())
    .then((imgSrc) => (receivedImg.src = imgSrc.message))
    .catch((err) => {
      alert(`Error : ${err.message}`)
    })
}

function addPhotoToList() {
  let newList = document.createElement('i')
  let newImg = document.createElement('img')

  newImg.src = receivedImg.src
  newImg.style.width = '100px'

  newList.classList.add('list-group-item', 'list-group-item-success')

  list.appendChild(newList)
  newList.appendChild(newImg)

  let btnDelete = document.createElement('button')
  btnDelete.classList.add('btn', 'btn-danger', 'btn-small', 'float-right')
  btnDelete.innerText = 'Delete'

  newList.appendChild(btnDelete)

  btnDelete.addEventListener('click', (event) => {
    event.preventDefault()
    let clickedBtn = event.target
    clickedBtn.parentNode.remove()
  })
}
