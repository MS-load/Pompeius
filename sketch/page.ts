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

    constructor() {
        super()
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
    }

    /**
     * Draws the content seen on the Page
     */
    public drawContent() {
        super.draw()
        let timeOut = this.gameStatus.drawStatus()
        if(timeOut === true){
            console.log(timeOut)
            this.segmentedMedia.updateParameters(true)
        }
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