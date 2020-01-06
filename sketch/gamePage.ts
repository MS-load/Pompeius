class GamePage {

    private segmentedMedia: SegmentedMedia
    private gameStatus: GameStatus

    constructor() {
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
        this.menuButton = new Button(-50, (windowHeight * 0.90), 100, 50, 10, 'Quit', 'blue')
        // this.red = this.redAvatarWasPressed()
    }

    /**
     * Draws the content seen on the Page
     */
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
        
        // if(this.red === true) {
        //     image(redAvatar, (windowWidth / 1.2), 50, 150, 150, 0, 0, 200, 200)
        // } else if (this.blue === true) {
        //     image(blueAvatar, (windowWidth / 1.2), 50, 150, 150, 0, 0, 200, 200)
        // } else if (this.green === true) {
        //     image(greenAvatar, (windowWidth / 1.2), 50, 150, 150, 0, 0, 200, 200)
        // }

    }
    public isGameOver():boolean {
        return  this.gameStatus.checkGameStatus()
    }

    public resetParam(){
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

    public exposeScore() {
        return this.gameStatus.getSegmentScore()
    }
}
