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
        this.gameStatus.drawStatus()
        // let timeOut = this.gameStatus.drawStatus()
        // if(timeOut === true){
        //     console.log(timeOut)
        //     this.segmentedMedia.updateParameters(true)
        // }
        this.segmentedMedia.draw()
    }

    /**
     * Handles user interaction 
     */
    public eventHandler() {
        if (keyCode === 32) {
            console.log(this.gameStatus.levelComplete)

            if (this.gameStatus.levelComplete === true) {
                this.gameStatus.updateStatus(false)
                this.segmentedMedia.updateParameters(false)
            }
            else {
                const offset = this.segmentedMedia.getOffset()
                const selectedSegmentPosition = this.segmentedMedia.getSelectedSegmentPosition()
                let segmentsCovered = this.segmentedMedia.updateSegment(false)

                this.gameStatus.setGameScore(offset, selectedSegmentPosition)
                if (segmentsCovered === true) {
                    this.gameStatus.levelComplete = true
                }
            }
        }
    }

}