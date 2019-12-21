class GameFrame {

    private frameWidth: number =350

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
    }

    //The red frame where the picture needs to be stopped
    public drawGameFrame() {
        noFill()
        stroke('red')
        strokeWeight(4)
        let offsets = this.getOffset()
        rect(offsets[1], offsets[0], this.frameWidth, this.frameWidth)
    }
}