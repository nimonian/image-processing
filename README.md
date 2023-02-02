# Image processing

## Installation

 1. Fork it
 1. Clone it
 1. Run `npm install` in the terminal
 1. Run `npm run dev` in the terminal

## What is it

The HTML canvas allows us to manipulate the individual pixels of an image.

The lines
```js
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
const arr = imageData.data
```
obtain an array of pixels. Each pixel takes up 4 positions in the array with its RGBA data. So
```js
arr.slice(0,4)
```
is the RGBA of the first pixel in the image, and so on.

By altering the data and writing back to the canvas we can mess about with the image.

## What next?

Could you create a new Instagram filter?
