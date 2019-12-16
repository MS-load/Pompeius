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
}