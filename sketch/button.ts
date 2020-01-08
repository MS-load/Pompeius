class Button {

    private originX: number
    private x: number
    private y: number
    private width: number
    private height: number
    private corners: number
    private text: string
    private fillColor: string
    private prevMousePressed: boolean
    private onClickCallback: Function
    private avatar!: p5.Image
    private isAvatar: boolean
    private i: number
    private j: number
    private wait: number

    constructor(x: number, y: number, width: number, height: number, corners: number, text: string, fillColor: string, onClickCallback: Function) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.corners = corners
        this.text = text
        this.fillColor = fillColor
        this.originX = 0
        this.prevMousePressed = false
        this.onClickCallback = onClickCallback
        this.isAvatar = false
        this.i = 0
        this.j = 0
        this.wait = 10
    }

    public setAvatar(avatar: p5.Image) {
        this.avatar = avatar as p5.Image
        this.isAvatar = true
    }

    public setSize(w: number, h: number) {
        this.width = w
        this.height = h
    }

    public setCoordinates(x: number, y: number) {
        this.x = x
        this.y = y
    }


    /**
     * Check if mouse is pressed. If mouse is pressed, runs the callback function.
     */
    private checkForPress() {
        if (this.isMouseWithinButtonBorder()) {
            if (mouseIsPressed && !this.prevMousePressed) {
                this.onClickCallback()
            }
        }
        this.prevMousePressed = mouseIsPressed
    }

    public draw(originX: number) {
        this.checkForPress()
        this.originX = originX
        push()
        if (this.isAvatar) {
            if (this.j <= this.wait) {
                image(this.avatar, originX + this.x, this.y, this.width, this.height, this.i * 200, 0, 200, 200)
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
            //image(redAvatar, (windowWidth / 2 - 225), 250, 150, 150, 0, 0, 200, 200)
            //image(this.avatar, originX + this.x, this.y, this.width, this.height, 0, 0, 200, 200)
        } else {
            fill(this.fillColor)
            rect(originX + this.x, this.y, this.width, this.height, this.corners)
            fill('white')
            text(this.text, originX + this.x, this.y, this.width, this.height)
        }

        pop()

    }
    /**
     * Checks if mouse is pressed within the area of the button.
     */
    private isMouseWithinButtonBorder() {
        return mouseX >= this.responsiveX
            && mouseX <= this.responsiveX + this.width
            && mouseY >= this.y
            && mouseY <= this.y + this.height
    }

    /**
     * Helps making the buttons responsive. 
     */
    private get responsiveX() {
        return this.x + this.originX
    }

}