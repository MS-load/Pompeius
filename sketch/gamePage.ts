class Page {
    public draw() {
        background(0)
        textSize(70)
        fill('red')
        textAlign(CENTER, CENTER)
        strokeWeight(0)
        textFont('Quintessential')
        text("Pompeius", (windowWidth / 2), 70)
    }
}


class GamePage extends Page{

    private frameWidth: number = 350
    private img: p5.Image

    constructor(){
        super()
        this.img = loadImage(this.getImg())
    }

    public getImg(): string {
        let imgUrl = 'https://source.unsplash.com/350x350/?cartoon/sig=' +  round(random(150))
        return imgUrl
    }

    public getOffset() {
        let topOffset = windowHeight / 4
        let leftOffset = (windowWidth / 2) - (this.frameWidth / 2)
        return [topOffset, leftOffset]
    }

    public getWidth() {
        return this.frameWidth
    }

    private drawBoundary(){
        noFill()
        stroke('red')
        strokeWeight(4)
        let offsets = this.getOffset()
        rect(offsets[1], offsets[0], this.frameWidth, this.frameWidth)
    }

    private drawMovingImage(){
        image(this.img, 0, 0)
    }
    
    public drawContent() {
        super.draw()
        this.drawBoundary()
        this.drawMovingImage()
    }
}