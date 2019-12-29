class GameStatus {
    private segmentScore: number

    private levelStartTime: Date
    private lapsedSeconds: number

    private level: number
    private lives: number

    private timerCount: number

    constructor() {
        this.segmentScore = 0
        this.levelStartTime = new Date()
        this.lapsedSeconds = 0
        this.level = 1
        this.lives = 3
        this.timerCount = 0
    }


    /**
     * sets the gameScore
     * @param offsets gets the offset from the page
     * @param selectedSegmentPosition gets the position of the selected image
     */
    public setGameScore(offsets: number[], selectedSegmentPosition: number) {
        let score = selectedSegmentPosition
        if (score > offsets[1] - 5 && score < offsets[1] + 5) {
            this.segmentScore += 1000
        }
        else if ((score > offsets[1] + 5 && score < offsets[1] + 30) || (score > offsets[1] - 30 && score < offsets[1] - 5)) {
            this.segmentScore += 500
        }
        else {
            this.segmentScore += 0
        }
    }

    /**
     * timer for the game
     */
    private getTime() {
        let timeOut = false
        let currentTime = new Date()
        this.lapsedSeconds = floor((currentTime.getTime() - this.levelStartTime.getTime()) / 1000)
        //console.log(currentTime.getTime())
        let maxTime = 15
        this.timerCount = maxTime - this.lapsedSeconds
        if (this.timerCount <= 0) {
            timeOut = true
            this.updateStatus(timeOut)
        }
        return timeOut
    }

    
/**
 * Draws the status on the page 
 */
    public drawStatus() {
        textSize(32)
        text((this.segmentScore).toString(), 100, 100)
        text((this.timerCount + " sec").toString(), 350, 100)
        text(("Level:" + this.level).toString(), 500, 100)
        text(("Lives:" + this.lives).toString(), 800, 100)
        fill('red')
        let timeOut = this.getTime()
        return timeOut
    }

    /**
     * Updates the status of the game 
     * @param lifeLost  
     */
    public updateStatus(lifeLost: boolean) {
        this.levelStartTime = new Date()
        if (lifeLost === true) {
            this.lives--
            let score = localStorage.getItem("score") as string
            this.segmentScore = parseInt(score)
        }
        else {
            localStorage.setItem("score", (this.segmentScore).toString())
            this.level++
        }
    }
}