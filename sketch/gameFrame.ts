class GameFrame {

    private frameWidth: number
    constructor(){
        this.frameWidth = 350
   }

    public getOffset() {
        let topOffset = windowHeight / 4
        let leftOffset = (windowWidth / 2) - (this.frameWidth / 2)
        return [topOffset, leftOffset]
    }

    public getWidth() {
        return this.frameWidth
    }

    //Title
    public draw() {
        background(0)
        textSize(70)
        fill('red')
        textAlign(CENTER, CENTER)
        strokeWeight(0)
        textFont('Quintessential')
        text("Pompeius", (windowWidth / 2), 70)
        this.drawGameFrame()
    }

    //The red frame where the picture needs to be stopped
    private drawGameFrame() {
        imageFrame.displayScore()
        imageFrame.displayTime()
        imageFrame.displayLevel()
      
        imageFrame.imageDraw(this.getOffset())
        noFill()
        stroke('red')
        strokeWeight(4)
        let offsets = this.getOffset()
        rect(offsets[1], offsets[0], this.frameWidth, this.frameWidth)
        
        
    }

}