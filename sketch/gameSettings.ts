class GameSettings {

    private startButton: Button
    private resetButton: Button
    private inputSettings: InputSettings

    constructor() {
        this.inputSettings = new InputSettings()
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
        this.inputSettings.draw()
        this.inputSettings.update()

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
            this.inputSettings.setMyName("")

            // This is for the menu button
        } else if (this.isThisPressed(gamePage.menuButton) && isGameRunning) {
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