class Button {
    private x: number
    private y: number
    private width: number
    private height: number
    private corners: number
    private text: string
    private fillColor: string

    constructor(x: number, y: number, width: number, height: number, corners: number, text: string, fillColor: string) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.corners = corners
        this.text = text
        this.fillColor = fillColor
    }

    public draw() {
        push()
        fill(this.fillColor)
        rect(this.x, this.y, this.width, this.height, this.corners)
        fill('white')
        text(this.text, this.x, this.y, this.width, this.height)
        pop()
    }


    // Beroende på instans av knapp kommer dessa värden vara olika, beroende på vilka värden jag gett dem. 
    public getX() {
        return this.x
    }

    public getY() {
        return this.y
    }

    public getWidth() {
        return this.width
    }

    public getHeight() {
        return this.height
    }
}