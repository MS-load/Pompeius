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
    }

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
        fill(this.fillColor)
        rect(originX + this.x, this.y, this.width, this.height, this.corners)
        fill('white')
        text(this.text, originX + this.x, this.y, this.width, this.height)
        pop()
    }

    private isMouseWithinButtonBorder() {
        return mouseX >= this.responsiveX
            && mouseX <= this.responsiveX + this.width
            && mouseY >= this.y
            && mouseY <= this.y + this.height
    }

    // Beroende på instans av knapp kommer dessa värden vara olika, beroende på vilka värden jag gett dem. 
    private get responsiveX() {
        return this.x + this.originX
    }

}