class SoundEffects {

    public spaceBarSound() {
        if (keyPressed()) {
            spaceClick.play()
        }
    }
    public swooshSound() {
        if (imageDraw()) {
            swoosh.play()
        }
    }
}