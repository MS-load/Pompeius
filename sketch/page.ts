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
    public menuButton: Button

    constructor() {
        super()
        this.segmentedMedia = new SegmentedMedia()
        this.gameStatus = new GameStatus()
        this.menuButton = new Button(-50, (windowHeight * 0.90), 100, 50, 10, 'Quit', 'blue')
        // this.red = this.redAvatarWasPressed()
    }

    /**
     * Draws the content seen on the Page
     */
    public drawContent() {
        super.draw()

        let timeOut = this.gameStatus.drawStatus()
        if (timeOut === true) {
            this.segmentedMedia.updateParameters(timeOut)
        }

        textSize(20)
        fill('white')
        textFont('arial')
        this.menuButton.draw(width / 2)

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

    /**
     * Handles user interaction 
     */
    public eventHandler() {
        if (keyCode === 32) {
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