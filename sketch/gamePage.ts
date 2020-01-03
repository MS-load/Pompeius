class GamePage{

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus

    public menuButton: Button

    constructor() {
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
        this.menuButton = new Button(-50, (windowHeight * 0.90), 100, 50, 10, 'Quit', 'blue')
        
    }

    /**
     * Draws the content seen on the Page
     */
    public drawContent() {

        let timeOut = this.gameStatus.drawStatus()
        if (timeOut === true) {
            this.segmentedMedia.updateParameters(timeOut)
        }

        textSize(20)
        fill('white')
        textFont('arial')
        this.menuButton.draw(width / 2)

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
                console.log("check")
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