class GameFrame {

    //Title
    public draw() {
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
        rect(leftOffset, topOffset, imageProperties.getDestinationWidth(), imageProperties.getDestinationWidth())
    }
}