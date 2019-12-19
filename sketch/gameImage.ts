class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private img:string  = 'https://source.unsplash.com/350x350/?nature,water'

    private urlRoot: string
    private imgTags: string
    private dWidth: number
    public noOfSegments: number
    public segmentPosition: number[]

    constructor() {
        this.urlRoot = 'https://source.unsplash.com/'
        this.imgTags = 'nature,water'
        this.dWidth = 350
        this.noOfSegments = 3,
            this.segmentPosition = []
    }

    public getDestinationWidth(): number {
        return this.dWidth
    }

    public getImgUrl(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?sig=" + random(50) + this.imgTags
        return imgUrl

    }

    public getNoOfSegments(): number {
        return this.noOfSegments
    }



    /**
     * Draws the image based on the number of segments and the xPosition
     */
    public imageDraw() {

        /**
         * updates the xPosition
         */
        xPos += this.getNoOfSegments()*1.5
        //console.log(xPos)


        if (xPos >= width) {
            xPos = 0
        }

        for (let i = 0; i < this.getNoOfSegments(); i++) {

            //Updates array with the new position
            if (i > selectedImage) {
                this.segmentPosition[i] = xPos

                //reverse direction for alternate images
                if (i % 2 === 1) {
                    this.segmentPosition[i] = width - (xPos + this.getDestinationWidth())
                }
            }

            //Draws a rectangle around the selected Image
            if (i === (selectedImage + 1)) {
                stroke('hsla(160, 100%, 50%, 0.5)')
                strokeWeight(10)
                rect(this.segmentPosition[i], topOffset + (pieceHeight * i),
                    this.getDestinationWidth(), pieceHeight)
            }

            //Renders the image 
            image(img, this.segmentPosition[i], topOffset + (pieceHeight * i),
                this.getDestinationWidth(), pieceHeight, 0,
                pieceHeight * i, this.getDestinationWidth(), pieceHeight)
        }
    }
}

