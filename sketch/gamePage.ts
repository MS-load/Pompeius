class GamePage{

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus

    constructor() {
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
    }

    /**
     * Draws the content seen on the Page
     */
    public drawContent() {

        let timeOut = this.gameStatus.drawStatus()
        if (timeOut === true) {
            this.segmentedMedia.updateParameters(timeOut)
        }
        this.segmentedMedia.draw()
    }

    public isGameOver():boolean {
        return  this.gameStatus.checkGameStatus()
    }

    /**
     * Handles user interaction 
     */
    public eventHandler() {
        if (keyCode === 32) {
            soundEffects.spaceBarSound()
            if (this.gameStatus.levelComplete === true) {
                this.gameStatus.updateStatus(false)
                this.segmentedMedia.updateParameters(false)
            }
            else {
                //console.log("check")
                const offset = this.segmentedMedia.getOffset()
                const selectedSegmentPosition = this.segmentedMedia.getSelectedSegmentPosition()

                let segmentsCovered = this.segmentedMedia.updateSegment()

                this.gameStatus.setGameScore(offset, selectedSegmentPosition)

                if (segmentsCovered === true) {
                    this.gameStatus.levelComplete = true
                }
            }
        }
    }
}