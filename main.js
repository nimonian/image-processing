const img = new Image()
img.crossOrigin = 'anonymous'
img.src = './img/coo.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

img.onload = normal

function normal () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

function invert() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const arr = imageData.data

  for (let i = 0; i < arr.length; i += 4) {
    arr[i] = 255 - arr[i]
    arr[i + 1] = 255 - arr[i + 1]
    arr[i + 2] = 255 - arr[i + 2]
  }

  ctx.putImageData(imageData, 0, 0)
}

function gray() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const arr = imageData.data

  for (let i = 0; i < arr.length; i += 4) {
    const average = (arr[i] + arr[i + 1] + arr[i + 2]) / 3
    arr[i] = average
    arr[i + 1] = average
    arr[i + 2] = average
  }

  ctx.putImageData(imageData, 0, 0)
}

document.querySelector('#normal-btn').addEventListener('click', normal)
document.querySelector('#invert-btn').addEventListener('click', invert)
document.querySelector('#gray-btn').addEventListener('click', gray)
