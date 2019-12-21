class ImageFrame {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private img:string  = 'https://source.unsplash.com/350x350/?nature,water'

    private urlRoot: string
    private imgTags: string
    private dWidth: number

    private pieceHeight: number = 0
    private xPos: number = 0
    private img: p5.Image

    private noOfSegments: number
    private segmentPosition: number[]

    private selectedImage: number


    constructor() {
        this.urlRoot = 'https://source.unsplash.com/'
        this.imgTags = 'cartoon'
        this.dWidth = 350
        this.noOfSegments = 3
        this.segmentPosition = []
        this.img = loadImage(this.getImg())
        this.selectedImage = -1
    }

    public getDestinationWidth(): number {
        return this.dWidth
    }

    public getImg(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?sig=" + random(150) + this.imgTags

        return imgUrl

    }

    public getNoOfSegments(): number {
        return this.noOfSegments
    }

    public increaseNoOfSegments(): number {
        return this.noOfSegments++
    }

    public getSelectedImage(): number {
        return this.selectedImage
    }

    public increaseSelectedImage(): number {
        return this.selectedImage++
    }

    public resetSelectedImage() {
        this.selectedImage = -1
    }


    /**
     * Draws the image based on the number of segments and the xPosition
     */
    public imageDraw(offsets: number[]) {

        /**
         * updates the xPosition
         */

        this.xPos += this.getNoOfSegments() + 2
        //console.log(xPos,this.myXPos)


        if (this.xPos >= width) {
            this.xPos = 0
        }

        for (let i = 0; i < this.getNoOfSegments(); i++) {

            //Updates array with the new position
            if (i > this.selectedImage) {

                this.segmentPosition[i] = this.xPos

                //reverse direction for alternate images
                if (i % 2 === 1) {

                    this.segmentPosition[i] = width - (this.xPos + this.getDestinationWidth())
                }
            }

            //Draws a rectangle around the selected Image
            if (i === (this.selectedImage + 1)) {
                stroke('hsla(160, 100%, 50%, 0.5)')
                strokeWeight(10)
                rect(this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                    this.getDestinationWidth(), this.pieceHeight)
            }

            //Renders the image 
            image(this.img, this.segmentPosition[i], offsets[0] + (this.pieceHeight * i),
                this.getDestinationWidth(), this.pieceHeight, 0,
                this.pieceHeight * i, this.getDestinationWidth(), this.pieceHeight)
        }
    }

    public setParameters() {

        this.pieceHeight = Math.floor(this.getDestinationWidth() / this.getNoOfSegments())

        this.xPos = 0
        this.img = loadImage(this.getImg())
        for (let i = 0; i < this.getNoOfSegments(); i++) {
            this.segmentPosition.push(0)
        }
    }



    public gameScore(offsets: number[]) {
        let score = this.segmentPosition[this.selectedImage + 1]
        console.log("left:", offsets[1])
        if (score > offsets[1] - 20 && score < offsets[1] + 20) {
            let segmentScore = 1000
            console.log("score", (this.selectedImage + 1), segmentScore)

        }
        else if ((score > offsets[1] + 20 && score < offsets[1] + 50) || (score > offsets[1] - 50 && score < offsets[1] - 20)) {
            let segmentScore = 500
            console.log("score", (this.selectedImage + 1), segmentScore)
        }
        else {
            let segmentScore = 0
            console.log("score", (this.selectedImage + 1), segmentScore)
        }

        console.log(score)

    }
}

