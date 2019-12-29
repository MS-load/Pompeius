class GameFrame {

    public menuButton: Button

    constructor() {
        this.menuButton = new Button((windowWidth / 2 - 50), 600, 100, 50, 10, 'Back to menu', 'blue')
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
        textSize(20)
        textFont('arial')
        this.menuButton.draw()
        noFill()
        stroke('red')
        strokeWeight(4)
        rect(leftOffset, topOffset, imageProperties.getDestinationWidth(), imageProperties.getDestinationWidth())

    }
}