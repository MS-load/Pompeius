class Avatar {
    public redAvatar: p5.Image
    public greenAvatar: p5.Image
    public blueAvatar: p5.Image
    private i: number
    private j: number
    private wait: number

    constructor() {
        this.redAvatar = loadImage('./assets/images/redAvatar.png')
        this.greenAvatar = loadImage('./assets/images/greenAvatar.png')
        this.blueAvatar = loadImage('./assets/images/blueAvatar.png')
        this.i = 0
        this.j = 0
        this.wait = 10
    }



    public drawAvatar(avatar:p5.Image){
        let originX = width/2
        if (this.j <= this.wait) {
            image(avatar, originX + 150, 30, 50, 50, this.i * 200, 0, 200, 200)
            if (this.j == this.wait) {
                this.i++;

                if (this.i === 6) {
                    this.i = 0
                }
            }
        }
        if (this.j == this.wait) {
            this.j = 0
        }
        this.j++
        //image(avatar, originX + 150, 30, 50, 50, 0 * 200, 0, 200, 200)
    }

}