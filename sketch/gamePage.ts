class GamePage {

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus

    constructor() {
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
    }

    /**
     * Sets the game theme based on the avatar chosen
     * @param theme a string value based on the avatar chosen
     */
    public setTheme(theme: string) {
        this.segmentedMedia.setTag(theme)
    }

    /**draws the content of the Game */
    public drawContent() {
        let timeOut = this.gameStatus.drawStatus()
        if (timeOut === true) {
            this.segmentedMedia.updateParameters(timeOut)
        }
        fill('white')
        textFont('arial')
        textSize(20)
        text('player: ' + playerSettings.getMyName(), (windowWidth / 1.2), (windowHeight / 7))
        text('Press Space to score', width * 0.75, height * 0.08, 300, 150)
        this.segmentedMedia.draw()
    }

    /** Checks if game is over */
    public isGameOver(): boolean {
        return this.gameStatus.getGameStatus()
    }

    /**Resets game parameters */
    public resetParam() {
        this.segmentedMedia.resetParameters()
        this.gameStatus = new GameStatus()
    }

    /** Handles user interaction*/
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

    /** Exposes the segment score to gameManager*/
    public exposeScore() {
        return this.gameStatus.getSegmentScore()
    }

    /** Exposes if level/game is complete to gameManager*/
    public checkIfGameIsComplete() {
        return this.gameStatus.levelComplete
    }

    /** Exposes the level to gameManager */
    public checkLevel() {
        return this.gameStatus.getLevel()
    }

    /** Exposes the players lives to gameManager */
    public checkLives() {
        return this.gameStatus.getIfNoMoreLives()
    }
}
