class GameStats {

var score, level, lives

    public draw(){
        rect(leftOffset, topOffset*3, ImageProperties.getDestinationWidth(), ImageProperties.getDestinationWidth()/4)
        strokeWeight(1)
        fill(255)
        text("Lives:" , leftOffset*1.41, topOffset*3.2)
        text("Level:" , leftOffset*1.09, topOffset*3.2)
        text("Score" , leftOffset*1.57, topOffset*0.6)
    }
}