class GameSettings {

    private startButton: Button
    private resetButton: Button
    private inputSettings: InputSettings
    private isGameRunning: boolean
    private gamePage: GamePage
    private i: number
    private j: number
    private wait: number
    private redAvatarButton: Button
    private blueAvatarButton: Button
    private greenAvatarButton: Button
    private red: boolean
    private blue: boolean
    private green: boolean

    constructor() {
        this.inputSettings = new InputSettings()
        this.startButton = new Button(-100, 600, 100, 50, 10, 'Start game', 'green')
        this.resetButton = new Button(10, 600, 100, 50, 10, 'Reset game', 'red')
        this.gamePage = new GamePage()
        this.isGameRunning = false
        this.i = 0
        this.j = 0
        this.wait = 10
        this.redAvatarButton = new Button((windowWidth / 2 - 225), 250, 150, 150, 0, "", "")
        this.blueAvatarButton = new Button((windowWidth / 2 - 75), 250, 150, 150, 0, "", "")
        this.greenAvatarButton = new Button((windowWidth / 2 + 100), 250, 150, 150, 0, "", "")
        this.red = false
        this.blue = false
        this.green = false
    }

    private drawAvatars() {

        // console.log("i " + this.i + " j " + this.j)
        
        if(this.j <= this.wait) {
            image(redAvatar, (windowWidth / 2 - 225), 250, 150, 150, this.i * 200, 0, 200, 200)
            image(blueAvatar, (windowWidth / 2 - 75), 250, 150, 150, this.i * 200, 0, 200, 200)
            image(greenAvatar, (windowWidth / 2 + 100), 250, 150, 150, this.i * 200, 0, 200, 200)

            if (this.j == this.wait) {
                this.i++;

                if (this.i === 6) {
                    this.i = 0
                }              
            }

        }

        if(this.j == this.wait) {
            this.j = 0
        }
        this.j++

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
        this.inputSettings.draw()
        this.inputSettings.update()

        //Start button and Reset button
        this.startButton.draw(width / 2)
        this.resetButton.draw(width / 2)
    }


    public draw() {
        let gameOver = this.gamePage.isGameOver()
        if (this.isGameRunning && !gameOver) {
            this.gamePage.drawContent()
        } else {
            this.drawHomePage()
            this.drawAvatars()

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
            
        } else if (this.isThisPressed(this.redAvatarButton)) {
            this.red = true
            console.log("red")
        } else if (this.isThisPressed(this.blueAvatarButton)) {
            this.blue = true
            console.log("blue")
        } else if (this.isThisPressed(this.greenAvatarButton)) {
            this.green = true
            console.log("green")
        }

    }

    private isThisPressed(btn: Button) {
        return mouseX >= btn.getX()
            && mouseX <= (btn.getX() + btn.getWidth())
            && mouseY >= btn.getY()
            && mouseY <= (btn.getY() + btn.getHeight())
    }

}