class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private static img:string  = 'https://source.unsplash.com/350x350/?nature,water'

    private static urlRoot: string = 'https://source.unsplash.com/'
    private static imgTags: string = 'nature,water'
    private static dWidth: number = 350
    public static noOfSegments: number = 3
    public static segmentPosition: number[] = []

    public static getDestinationWidth(): number {
        return this.dWidth
    }

    public static getImgUrl(): string {
        let imgUrl = this.urlRoot + this.dWidth + "x" + this.dWidth + "/?" + this.imgTags
        return imgUrl

    }

    public static getNoOfSegments(): number {
        return this.noOfSegments
    }


    /**
     * Draws the image based on the number of segments and the xPosition
     */
    public imageDraw() {

        /**
         * updates the xPosition
         */
        xPos += ImageProperties.getNoOfSegments()
        //console.log(xPos)


        if (xPos >= width) {
            xPos = 0
        }

        for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {

            //Updates array with the new position
            if (i > selectedImage) {
                ImageProperties.segmentPosition[i] = xPos

                //reverse direction for alternate images
                if (i % 2 === 1) {
                    ImageProperties.segmentPosition[i] = width - (xPos + ImageProperties.getDestinationWidth())
                }
            }

            //Draws a rectangle around the selected Image
            if (i === (selectedImage + 1)) {
                stroke('hsla(160, 100%, 50%, 0.5)')
                strokeWeight(10)
                rect(ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
                    ImageProperties.getDestinationWidth(), pieceHeight)
            }

            //Renders the image 
            image(img, ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
                ImageProperties.getDestinationWidth(), pieceHeight, 0,
                pieceHeight * i, ImageProperties.getDestinationWidth(), pieceHeight)
        }
    }
}

