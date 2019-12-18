//window.addEventListener("load", loadPage)

const level = 0

var canvas
var stage
var img
var frameWidth
var frameHeight
var pieceHeight

init()
function init() {
    img = new Image()
    img.addEventListener('load', onImage, false)
    img.src = "https://source.unsplash.com/600x600/?nature,water"
    for(i=1;i<11;i++){
        
    }
}

function onImage() {
    frameWidth = window.innerWidth
    frameHeight = window.innerHeight
    pieceHeight = Math.floor(600 / level)
    setCanvas()
    initPuzzle()
}

function setCanvas() {
    canvas = document.getElementById('canvas')
    stage = canvas.getContext('2d')
    canvas.width = frameWidth
    canvas.height = frameHeight
    canvas.style.border = "1px solid black"
}

function initPuzzle() {
    stage.drawImage(img, 0, 0, frameWidth, pieceHeight, 0, 0, 600, pieceHeight)
    stage.drawImage(img, 0, pieceHeight, frameWidth, pieceHeight, 0, pieceHeight, 600, pieceHeight)
    stage.drawImage(img, 0, pieceHeight *2, frameWidth, pieceHeight, 0, pieceHeight * 2, 600, pieceHeight)
    //buildPieces()
}

