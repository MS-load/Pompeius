class GameSettings {

    private startButton: Button
    private resetButton: Button
    private inputSettings: InputSettings
    private isGameRunning: boolean
    private gamePage: GamePage

    constructor() {
        this.inputSettings = new InputSettings()
        this.startButton = new Button(-100, 600, 100, 50, 10, 'Start game', 'green')
        this.resetButton = new Button(10, 600, 100, 50, 10, 'Reset game', 'red')
        this.gamePage = new GamePage()
        this.isGameRunning = false
    }

    private drawHomePage() {
        //Inputfield
        this.inputSettings.draw()
        this.inputSettings.update()

        //Start button and Reset button
        this.startButton.draw(width / 2)
        this.resetButton.draw(width / 2)
    }


    public draw() {
            background(0)
            textSize(70)
            fill('red')
            textAlign(CENTER, CENTER)
            strokeWeight(0)
            textFont('Quintessential')
            text("Pompeius", (windowWidth / 2), 70)

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

    public pressironie() {
        //This if is for the start button
        if (this.isThisPressed(this.startButton) && !this.isGameRunning) {
            this.isGameRunning = true
            this.gamePage = new GamePage()
            // This is for the reset button
        } else if (this.isThisPressed(this.resetButton) && !this.isGameRunning) {
            localStorage.removeItem("myName")
            this.inputSettings.setMyName("")

            // This is for the menu button
        } else if (this.isThisPressed(this.gamePage.menuButton) && this.isGameRunning) {
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