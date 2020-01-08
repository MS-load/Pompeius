class GameStatus {
    private segmentScore: number
    private score: number

    private level: number
    private lives: number

    private levelStartTime: Date
    private lapsedSeconds: number
    private timerCount: number

    public levelComplete: boolean
    private gameOver: boolean

    constructor() {
        this.segmentScore = 0
        this.score = 0
        this.level = 1
        this.lives = 3
        this.levelStartTime = new Date()
        this.lapsedSeconds = 0
        this.timerCount = 0
        this.levelComplete = false
        this.gameOver = false
    }

    /**Gets the game status */
    public getGameStatus(): boolean {
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
            soundEffects.tadaaSound()
        }
        else if (stopDistance > 5 && stopDistance < 30) {
            this.segmentScore += 500
            soundEffects.yaaayySound()
        }
        else {
            this.segmentScore += 0
            soundEffects.booooSound()
        }
    }

    /**timer for the game*/
    private getTime(): boolean {
        let timeOut = false
        if (this.levelComplete === false) {
            const currentTime = new Date()
            this.lapsedSeconds = floor((currentTime.getTime() - this.levelStartTime.getTime()) / 1000)
            const maxTime = 30
            this.timerCount = maxTime - this.lapsedSeconds
        }
        if (this.timerCount <= 0) {
            timeOut = true
            this.updateStatus(timeOut)
        }
        return timeOut
    }

    /**heart for the lives*/
    private heart(x: number, y: number, size: number) {
        beginShape()
        vertex(x, y)
        bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size)
        bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y)
        endShape(CLOSE)
    }

    /** Draws the status on the page */
    public drawStatus(): boolean {
        textSize(20)
        fill('white')
        text(("Score:" + this.segmentScore).toString(), width * 0.4, height * 0.2)
        text(("Level: " + this.level).toString(), width * 0.5, height * 0.2)
        text(("Lives: "), width * 0.59, height * 0.2)

        switch (this.lives) {
            case 3:
                for (var i = 0; i < 3; i++) {
                    fill('red')
                    this.heart(width * 0.616 + i * 20, height * 0.191, 15)
                }
                break;
            case 2:
                for (var i = 0; i < 2; i++) {
                    fill('red')
                    this.heart(width * 0.616 + i * 20, height * 0.191, 15)
                }
                break;
            case 1:
                fill('red')
                this.heart(width * 0.616, height * 0.191, 15)
                break;
        }

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
            }
        }
        else {
            this.score = this.segmentScore
            if (this.level < 15) {
                this.level++
                soundEffects.swooshSound()
            }
            else {
                this.gameOver = true
                this.levelComplete = true
            }
        }
    }

    /*** Exposes the segment score to gamePage*/
    public getSegmentScore() {
        return this.segmentScore
    }

    /*** Exposes the level to gamePage*/
    public getLevel() {
        return this.level
    }

    /*** Exposes if the level/game to gamePage*/
    public getIfLevelComplete() {
        return this.levelComplete
    }

    /*** Exposes the players lifes to gamePage*/
    public getIfNoMoreLives() {
        return this.lives
    }
}
