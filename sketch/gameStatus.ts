class GameStatus {
    private segmentScore: number
    private score: number

    private levelStartTime: Date
    private lapsedSeconds: number

    private level: number
    private lives: number

    private timerCount: number

    public levelComplete: boolean

    private gameOver: boolean


    constructor() {
        this.segmentScore = 0
        this.score = 0
        this.levelStartTime = new Date()
        this.lapsedSeconds = 0
        this.level = 1
        this.lives = 1 //TODO: byt till 3
        this.timerCount = 0
        this.levelComplete = false
        this.gameOver = false

    }

    public checkGameStatus(): boolean {
        return this.gameOver
    }
    /**
     * sets the gameScore
     * @param offsets gets the offset from the page
     * @param selectedSegmentPosition gets the position of the selected image
     */
    public setGameScore(offsets: number[], selectedSegmentPosition: number) {
        let stopDistance = abs(selectedSegmentPosition - offsets[1])

        if (stopDistance < 5) {
            this.segmentScore += 1000
            console.log(1000)
            soundEffects.tadaaSound()
        }
        else if (stopDistance > 5 && stopDistance < 30) {
            this.segmentScore += 500
            console.log(500)
            soundEffects.yaaayySound()
        }
        else {
            this.segmentScore += 0
            soundEffects.booooSound()
            console.log(0)
        }
    }

    /**
     * timer for the game
     */
    private getTime(): boolean {
        let timeOut = false
        if (this.levelComplete === false) {

            const currentTime = new Date()
            this.lapsedSeconds = floor((currentTime.getTime() - this.levelStartTime.getTime()) / 1000)

            const maxTime = 15
            this.timerCount = maxTime - this.lapsedSeconds
        }

        if (this.timerCount <= 0) {
            timeOut = true
            this.updateStatus(timeOut)
        }
        return timeOut
    }


    /**
     * Draws the status on the page 
     */
    public drawStatus(): boolean {
        textSize(20)
        fill('white')

        text(("Score:" + this.segmentScore).toString(), width * 0.4, height * 0.2)
        text(("Level: " + this.level).toString(), width * 0.5, height * 0.2)
        text(("Lives: " + this.lives).toString(), width * 0.6, height * 0.2)

        let timeOut = this.getTime()
        if (this.levelComplete === true) {
            text(("Press Space to continue"), windowWidth * 0.5, windowHeight * 0.85)
        }
        else {
            text(("Time Remaining: " + this.timerCount + " sec").toString(), windowWidth * 0.5, windowHeight * 0.85)
        }
        return timeOut
    }

    /**
     * Updates the status of the game 
     * @param lifeLost  
     */
    public updateStatus(lifeLost: boolean) {
        this.levelStartTime = new Date()
        this.levelComplete = false
        if (lifeLost === true) {
            if (this.lives > 1) {
                this.lives--
                this.segmentScore = this.score
            }
            else {
                this.gameOver = true
                localStorage.setItem("finalScore", (this.score).toString())

            }
        }
        else {
            this.score = this.segmentScore
            if (this.level < 15) {
                this.level++
            }
            else {
                this.gameOver = true
                localStorage.setItem("finalScore", (this.score).toString())
            }
        }
        console.log(this.gameOver)
    }

    public getSegmentScore() {
        return this.segmentScore
    }

}
