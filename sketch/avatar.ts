class Avatar {
    public redAvatar: p5.Image
    public greenAvatar: p5.Image
    public blueAvatar: p5.Image
    
    private yPos: number
    private frameCount: number
    private wait: number

    constructor() {
        this.redAvatar = loadImage('./assets/images/redAvatar.png')
        this.greenAvatar = loadImage('./assets/images/greenAvatar.png')
        this.blueAvatar = loadImage('./assets/images/blueAvatar.png')
        this.yPos = 0
        this.frameCount = 0
        this.wait = 10
    }

    public drawAvatar(avatar:p5.Image){
        let originX = width/2
        if (this.frameCount <= this.wait) {
            image(avatar, originX + 280, 30, 100, 100, this.yPos * 200, 0, 200, 200)
            if (this.frameCount == this.wait) {
                this.yPos++;

                if (this.yPos === 6) {
                    this.yPos = 0
                }
            }
        }
        if (this.frameCount == this.wait) {
            this.frameCount = 0
        }
        this.frameCount++
    }

}