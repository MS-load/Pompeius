class Avatar{
    
    private i: number
    private j: number
    private wait: number
    private redAvatarButton: Button
    private blueAvatarButton: Button
    private greenAvatarButton: Button
    private red: boolean
    private blue: boolean
    private green: boolean

    constructor(){
        
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

    public drawAvatars() {

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

}