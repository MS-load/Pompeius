class GameSettings {

    private startButton: Button
    private resetButton: Button
    private playerSettings: PlayerSettings
    private isGameRunning: boolean
    private gamePage: GamePage

    constructor() {
        this.playerSettings = new PlayerSettings()
        this.startButton = new Button((windowWidth / 2 - 100), 600, 100, 50, 10, 'Start game', 'green')
        this.resetButton = new Button((windowWidth / 2 + 10), 600, 100, 50, 10, 'Reset game', 'red')
        this.gamePage = new GamePage
        this.isGameRunning = false
    }

    private drawHomePage() {

        background(0)
        textSize(70)
        fill('red')
        textAlign(CENTER, CENTER)
        strokeWeight(0)
        textFont('Quintessential')
        text("Pompeius", (windowWidth / 2), 70)

        //Inputfield
        this.playerSettings.draw()
        this.playerSettings.update()

        //Start button and Reset button
        this.startButton.draw()
        this.resetButton.draw()
    }


    public draw() {
        let gameOver = this.gamePage.isGameOver()
        if (this.isGameRunning && !gameOver) {
            this.gamePage.drawContent()
        } else {
            this.drawHomePage()
        }
    }

    public eventHandler() {
        if (this.isGameRunning) {
            this.gamePage.eventHandler()
        }
    }

    private checkGameOver() {
        if (this.gamePage.isGameOver()) {
            this.isGameRunning = false
        }
    }

    public pressironie() {
        this.checkGameOver()
        //This if is for the start button
        if (this.isThisPressed(this.startButton) && !this.isGameRunning) {
            this.isGameRunning = true
            this.gamePage = new GamePage()
            // This is for the reset button
        } else if (this.isThisPressed(this.resetButton) && !this.isGameRunning) {
            localStorage.removeItem("myName")
            this.playerSettings.setMyName("")

            // This is for the quit button
        } else if (this.isThisPressed(this.gamePage.quitButton) && this.isGameRunning) {
            this.isGameRunning = false
        }

    }

    private isThisPressed(btn: Button) {
        return mouseX >= btn.getX()
            && mouseX <= (btn.getX() + btn.getWidth())
            && mouseY >= btn.getY()
            && mouseY <= (btn.getY() + btn.getHeight())
    }

}