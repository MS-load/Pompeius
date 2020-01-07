class GameManager {

    private startButton: Button
    private resetButton: Button
    private quitButton: Button
    private pauseButton: Button
    private resumeButton: Button
    private playerSettings: PlayerSettings
    private isGameRunning: boolean
    private isGamePaused: boolean
    private gamePage: GamePage
    private scoreTable: ScoreTable
    private userScore: number
    private avatar: Avatar

    constructor() {
        this.playerSettings = new PlayerSettings()

        this.startButton = new Button(-100, (height * 0.85), 100, 50, 10, 'Start game', 'green', this.startButtonPressed.bind(this))
        this.resetButton = new Button(10, (height * 0.85), 100, 50, 10, 'Reset game', 'red', this.resetButtonPressed.bind(this))
        this.resumeButton = new Button(120, (height * 0.85), 100, 50, 10, 'Resume game', 'purple', this.resumeButtonPressed.bind(this))
        this.quitButton = new Button(-100, (height * 0.9), 100, 25, 10, 'Quit', 'blue', this.quitButtonPressed.bind(this))
        this.pauseButton = new Button(10, (height * 0.9), 100, 25, 10, 'Pause', 'purple', this.pauseButtonPressed.bind(this))

        this.gamePage = new GamePage()
        this.isGameRunning = false
        this.isGamePaused = false

        this.avatar = new Avatar()
        this.scoreTable = new ScoreTable()
        this.userScore = 0
    }

    private drawHomePage() {
        //Inputfield
        this.playerSettings.draw()
        this.playerSettings.update()

        //Start button and Reset button
        this.startButton.draw(width / 2)
        this.resetButton.draw(width / 2)

        fill('white')
        if (this.userScore > 0) {
            text('Your score: ' + this.userScore, (windowWidth / 2), (windowHeight / 2))
        }

        if (this.isGamePaused) {
            this.resumeButton.draw(width / 2)
        }

        this.scoreTable.draw()
    }

    private drawGamePage() {
        this.quitButton.draw(width / 2)
        this.pauseButton.draw(width / 2)
        this.gamePage.drawContent()
    }

    public draw() {

        background(0)
        textSize(60)
        fill('red')
        textAlign(CENTER, CENTER)
        strokeWeight(0)
        textFont('Quintessential')
        text("Pompeius", (width / 2), (height / 9.5))
        textSize(18)
        textFont('Arial')
        text(("Pick your music"), 90, 25)

        let gameOver = this.gamePage.isGameOver()
        if (this.isGameRunning && !gameOver) {
            this.drawGamePage()
            // this.avatar.drawSelectedAvatar()
        } else {
            this.isGameRunning = false
            this.drawHomePage()
            this.avatar.drawAvatars()
        }
    }

    public eventHandler() {
        if (this.isGameRunning) {
            this.gamePage.eventHandler()
        }
    }


    private startButtonPressed() {
        if (!this.isGameRunning) {
            this.isGameRunning = true
            this.gamePage.resetParam()

        }
    }

    private resetButtonPressed() {
        localStorage.removeItem("myName")
        this.playerSettings.setMyName("")
        this.userScore = 0
    }

    private quitButtonPressed() {
        this.isGameRunning = false
        this.isGamePaused = false
        this.scoreTable.addPlayer(this.playerSettings.getMyName(), this.gamePage.exposeScore())
        this.scoreTable.saveScoreTable()
        this.userScore = this.gamePage.exposeScore()
        this.scoreTable.playerTable()
    }

    private pauseButtonPressed() {
        this.isGameRunning = false
        this.isGamePaused = true
    }

    private resumeButtonPressed() {
        this.isGameRunning = true

    }


}