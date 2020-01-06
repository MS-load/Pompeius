class PlayerSettings {

    private myName: string = ''
    private prevKey?: string | null

    constructor() {
        this.getUserName()
    }

    /**
     * Updates what the player writes in the inputfield
     */
    public update() {
        this.handleUserInput()
    }

    /**
     * Get username from localstorage
     */
    public getUserName() {
        let userName = localStorage.getItem('myName')
        if (userName !== null) {

            this.myName = userName
            localStorage.setItem('myName', this.myName)
        }

        else {
            this.myName = ''

        }
    }

    public draw() {
        //Inputfield
        fill('white')
        text('Name:', ((windowWidth - 200) / 2) - 40, 165)
        rect((windowWidth - 200) / 2, 150, 200, 30)

        //Nameinput
        textSize(20);
        fill('black')
        textAlign(CENTER)
        textFont('Arial')
        text(this.myName, (windowWidth - 200) / 2, 155, 200, 30);
    }

    /**
     * 
     */
    private handleUserInput() {
        if (this.prevKey === key && !keyIsDown(keyCode)) {
            this.addCharacterToText()
            this.prevKey = null
        } else if (keyIsDown(keyCode)) {
            this.prevKey = key
        }
    }

    /**
     * 
     */
    private addCharacterToText() {
        if (key === 'Backspace') {
            this.myName = this.myName.substring(0, this.myName.length - 1)
        } else if (key === 'Shift') {
            this.myName = this.myName
        } else if (key === 'Enter') {
            this.myName = this.myName
        } else if (key === 'Alt') {
            this.myName = this.myName
        } else {
            this.myName += key;
        }
        localStorage.setItem('myName', this.myName)
        this.getUserName()

    }

    public setMyName(newName: string) {
        this.myName = newName
    }

    public getMyName() {
        this.getUserName()
        return this.myName
    }

}

