class GameStatus {
    private segmentScore: number

    private levelStartTime: Date
    private lapsedSeconds: number

    private level: number
    private lives: number

    private timerCount: number

    public levelComplete: boolean

    private gameOver: boolean

    constructor() {
        this.segmentScore = 0
        this.levelStartTime = new Date()
        this.lapsedSeconds = 0
        this.level = 1
        this.lives = 3
        this.timerCount = 0
        this.levelComplete = false
        this.gameOver = false
    }

    public checkGameStatus():boolean{
       return this.gameOver
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
            soundEffects.tadaaSound()
        }
        else if ((score > offsets[1] + 5 && score < offsets[1] + 30) || (score > offsets[1] - 30 && score < offsets[1] - 5)) {
            this.segmentScore += 500
            soundEffects.yaaayySound()
        }
        else {
            this.segmentScore += 0
            soundEffects.booooSound()
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

            const maxTime = 20
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
        textSize(25)
        fill('white')
        text(("Score: " + this.segmentScore).toString(), 100, 100)
        text(("Time Left: " + this.timerCount + " sec").toString(), 350, 100)
        text(("Level: " + this.level).toString(), 500, 100)
        text(("Lives: " + this.lives).toString(), 800, 100)
        
        let timeOut = this.getTime()
        if (this.levelComplete === true) {
            text(("Press Space to continue"), windowWidth * 0.5, windowHeight * 0.85)
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
                let score = localStorage.getItem("score") as string
                this.segmentScore = parseInt(score)
            }
            else {
                this.gameOver = true
            }
        }
        else {
            localStorage.setItem("score", (this.segmentScore).toString())
            if (this.level < 15) { this.level++ }
            else{ this.gameOver = true}
        }
        console.log(this.gameOver)
    }
}