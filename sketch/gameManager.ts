class GameManager {

    private startButton: Button
    private resetButton: Button
    private quitButton: Button
    private pauseButton: Button
    private resumeButton: Button
    private redAvatarButton: Button
    private blueAvatarButton: Button
    private greenAvatarButton: Button

    private playerSettings: PlayerSettings
    private isGameRunning: boolean
    private isGamePaused: boolean
    private gamePage: GamePage
    private scoreTable: ScoreTable
    private userScore: number

    private selectedAvatar: p5.Image
    private selectedItemBox: string[]
    private arrayIndex: number

    constructor() {
        this.playerSettings = new PlayerSettings()

        this.startButton = new Button(-100, (height * 0.85), 100, 50, 10, 'Start game', 'green', this.startButtonPressed.bind(this))
        this.resetButton = new Button(10, (height * 0.85), 100, 50, 10, 'Reset name', 'red', this.resetButtonPressed.bind(this))
        this.resumeButton = new Button(120, (height * 0.85), 100, 50, 10, 'Resume game', 'purple', this.resumeButtonPressed.bind(this))
        this.quitButton = new Button(-100, (height * 0.9), 100, 25, 10, 'Quit', 'blue', this.quitButtonPressed.bind(this))
        this.pauseButton = new Button(10, (height * 0.9), 100, 25, 10, 'Pause', 'purple', this.pauseButtonPressed.bind(this))
        this.redAvatarButton = new Button(-250, 210, 150, 150, 0, " ", "", this.redAvatarPressed.bind(this))
        this.blueAvatarButton = new Button(-50, 210, 150, 150, 0, " ", "", this.blueAvatarPressed.bind(this))
        this.greenAvatarButton = new Button(150, 210, 150, 150, 0, " ", "", this.greenAvatarPressed.bind(this))

        this.arrayIndex = 0
        this.selectedAvatar = avatar.redAvatar
        this.selectedItemBox = ['Selected Red theme', 'Selected Blue theme', 'Selected Green theme']

        this.redAvatarButton.setAvatar(avatar.redAvatar)
        this.blueAvatarButton.setAvatar(avatar.blueAvatar)
        this.greenAvatarButton.setAvatar(avatar.greenAvatar)
        this.gamePage = new GamePage()
        this.isGameRunning = false
        this.isGamePaused = false

        this.scoreTable = new ScoreTable()
        this.userScore = 0
    }

    /**Draws the HomePage */
    private drawHomePage() {
        //Inputfield
        this.playerSettings.draw()
        this.playerSettings.update()

        //Start buttons and avatars
        this.startButton.draw(width / 2)
        this.resetButton.draw(width / 2)
        this.redAvatarButton.draw(width / 2)
        this.blueAvatarButton.draw(width / 2)
        this.greenAvatarButton.draw(width / 2)

        //draws the score table
        this.scoreTable.draw()
        fill('white')

        if (this.userScore > 0) {
            text('Your score: ' + this.userScore, (windowWidth / 2), (windowHeight * 0.75))
        }

        //draws text for selected theme
        textSize(20)
        text((this.selectedItemBox[this.arrayIndex].toString()), (windowWidth / 2), (windowHeight * 0.65))

        //draws the text at end of game
        textSize(30)
        fill('green')
        textFont('Quintessential')
        if (this.gamePage.checkIfGameIsComplete() && (this.gamePage.checkLevel() === 15)) {
            text('Congratulation! You finished all the levels!! Good Job!', (windowWidth / 2), (windowHeight * 0.7))
        }
        if ((this.gamePage.isGameOver()) && this.gamePage.checkLifes() === 1) {
            text('GAME OVER!!', (windowWidth / 2), (windowHeight * 0.7))
        }

        //draws resume button in case game is paused
        if (this.isGamePaused) {
            this.resumeButton.draw(width / 2)
        }
    }

    /**draws the game page*/
    private drawGamePage() {
        this.quitButton.draw(width / 2)
        this.pauseButton.draw(width / 2)
        this.gamePage.drawContent()
        avatar.drawAvatar(this.selectedAvatar)
    }

    /**Draws the main page structure and determines which page is to be drawn*/
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
        } else {
            this.isGameRunning = false
            this.drawHomePage()
        }
    }

    /** Runs the eventHandler in gamePage if the game is running. Also adds player to score table if the player finishes all levels. */
    public eventHandler() {
        if (this.isGameRunning) {
            const isDone = this.gamePage.eventHandler()
            if (isDone && this.gamePage.checkLevel() === 15 && this.gamePage.isGameOver()) {
                this.scoreTable.addPlayer(this.playerSettings.getMyName(), this.gamePage.exposeScore())
                this.scoreTable.saveScoreTable()
                this.scoreTable.playerTable()
            }
        }
    }

    /** Runs when start button is pressed. */
    private startButtonPressed() {
        if (!this.isGameRunning) {
            this.isGameRunning = true
            this.gamePage.resetParam()
        }
    }

    /** Runs when reset button is pressed. Clears players name and score.*/
    private resetButtonPressed() {
        localStorage.removeItem("myName")
        this.playerSettings.setMyName("")
        this.userScore = 0
    }

    /** Runs when quit button is pressed. Adds players to score table. */
    private quitButtonPressed() {
        this.isGameRunning = false
        this.isGamePaused = false
        this.scoreTable.addPlayer(this.playerSettings.getMyName(), this.gamePage.exposeScore())
        this.scoreTable.saveScoreTable()
        this.userScore = this.gamePage.exposeScore()
        this.scoreTable.playerTable()
    }

    /** Runs when start button is pressed. */
    private pauseButtonPressed() {
        this.isGameRunning = false
        this.isGamePaused = true
    }

    /** Runs when resume button is pressed. */
    private resumeButtonPressed() {
        this.isGameRunning = true
    }

    /** Runs when red avatar is pressed. */
    private redAvatarPressed() {
        this.gamePage.setTheme('cartoons')
        this.arrayIndex = 0
        this.selectedAvatar = avatar.redAvatar
    }

    /** Runs when blue avatar is pressed. */
    private blueAvatarPressed() {
        this.gamePage.setTheme('water')
        this.arrayIndex = 1
        this.selectedAvatar = avatar.blueAvatar
    }

    /** Runs when green avatar is pressed. */
    private greenAvatarPressed() {
        this.gamePage.setTheme('trees')
        this.arrayIndex = 2
        this.selectedAvatar = avatar.greenAvatar
    }
}