class GameSettings {

    private startButton: Button
    private resetButton: Button
    private playerSettings: PlayerSettings

    constructor() {
        this.playerSettings = new PlayerSettings()
        this.startButton = new Button((windowWidth / 2 - 100), 600, 100, 50, 10, 'Start game', 'green')
        this.resetButton = new Button((windowWidth / 2 + 10), 600, 100, 50, 10, 'Reset game', 'red')

    }

    public draw() {

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

    public pressironie() {
        //This if is for the start button
        if (this.isThisPressed(this.startButton) && !isGameRunning) {
            isGameRunning = true

            // This is for the reset button
        } else if (this.isThisPressed(this.resetButton) && !isGameRunning) {
            localStorage.removeItem("myName")
            this.playerSettings.setMyName("")

            // This is for the quit button
        } else if (this.isThisPressed(gamePage.quitButton) && isGameRunning) {
            isGameRunning = false
        }

    }

    private isThisPressed(btn: Button) {
        return mouseX >= btn.getX()
            && mouseX <= (btn.getX() + btn.getWidth())
            && mouseY >= btn.getY()
            && mouseY <= (btn.getY() + btn.getHeight())
    }

}