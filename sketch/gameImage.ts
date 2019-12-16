class ImageProperties {
    //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
    //private static img:string  = 'https://source.unsplash.com/350x350/?nature,water'
    private static urlRoot: string = 'https://source.unsplash.com/'
    private static imgTags: string = 'nature,water'
    private static dWidth: number = 350
    private static noOfSegments: number = 3
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
     * imageSplit
     */
    public imageSplit() {
         xPos += ImageProperties.getNoOfSegments()
    //console.log(xPos)
    if (xPos >= width) {
        xPos = 0    
    }

    for (let i = 0; i < ImageProperties.getNoOfSegments(); i++) {

        if (i > selectedImage) {
            ImageProperties.segmentPosition[i] = xPos
            if (i % 2 === 1) {
                ImageProperties.segmentPosition[i] = width - (xPos + ImageProperties.getDestinationWidth())
            }
        }

        if (i === (selectedImage + 1)) {
            stroke('hsla(160, 100%, 50%, 0.5)')
            strokeWeight(10)
            rect(ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
                ImageProperties.getDestinationWidth(), pieceHeight)
        }

        image(img, ImageProperties.segmentPosition[i], topOffset + (pieceHeight * i),
            ImageProperties.getDestinationWidth(), pieceHeight, 0,
            pieceHeight * i, ImageProperties.getDestinationWidth(), pieceHeight)
    }
    }

}

