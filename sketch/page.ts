class Page {

    /**
     * Draws the backdrop for the Game
     */
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

class GamePage extends Page {

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus
    public quitButton: Button



    constructor() {
        super()
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
        this.quitButton = new Button((windowWidth / 2 - 50), 600, 100, 50, 10, 'Quit', 'blue')


    }

    /**
     * Draws the content seen on the Page
     */
    public drawContent() {
        super.draw()
        let timeOut = this.gameStatus.drawStatus()
        console.log('player: ' + playerSettings.getMyName())
        if (timeOut === true) {
            console.log(timeOut)
            this.segmentedMedia.updateParameters(true)
        }
        textSize(20)
        fill('white')
        textFont('arial')
        textSize(30)
        text(playerSettings.getMyName(), (windowWidth / 1.2), (windowHeight / 7))
        this.quitButton.draw()
        this.segmentedMedia.draw()
    }

    /**
     * Handles user interaction 
     */
    public eventHandler() {
        if (keyCode === 32) {
            const offset = this.segmentedMedia.getOffset()
            const selectedSegmentPosition = this.segmentedMedia.getSelectedSegmentPosition()
            const levelCompleted = this.segmentedMedia.updateSegment(false)

            this.gameStatus.setGameScore(offset, selectedSegmentPosition)
            if (levelCompleted === true) {
                this.gameStatus.updateStatus(false)
            }
        }
    }

}