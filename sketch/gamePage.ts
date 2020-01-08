class GamePage {

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus

    constructor() {
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
    }

    public setTheme(theme:string){
        this.segmentedMedia.setTag(theme)
    }
    public drawContent() {
        let timeOut = this.gameStatus.drawStatus()
        if (timeOut === true) {
            this.segmentedMedia.updateParameters(timeOut)
        }
        fill('white')
        textFont('arial')
        textSize(20)
        text('player: ' + playerSettings.getMyName(), (windowWidth / 1.2), (windowHeight / 7))


        this.segmentedMedia.draw()
    }

    public isGameOver(): boolean {
        return this.gameStatus.getGameStatus()
    }

    public resetParam() {
        this.segmentedMedia.resetParameters()
        this.gameStatus = new GameStatus()
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
                return true
            }
            else {
                const offset = this.segmentedMedia.getOffset()
                const selectedSegmentPosition = this.segmentedMedia.getSelectedSegmentPosition()
                let segmentsCovered = this.segmentedMedia.updateSegment()
                this.gameStatus.setGameScore(offset, selectedSegmentPosition)
                if (segmentsCovered === true) {
                    this.gameStatus.levelComplete = true
                    return true
                }
                return false
            }
        }
        return false
    }

    public exposeScore() {
        return this.gameStatus.getSegmentScore()
    }

    public checkIfGameIsComplete() {
        return this.gameStatus.levelComplete
    }

    public checkLevel() {
        return this.gameStatus.getLevel()
    }

    public checkLifes() {
        return this.gameStatus.getIfNoMoreLives()
    }

}
