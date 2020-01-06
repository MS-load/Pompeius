class SoundEffects {
        private swoosh: p5.SoundFile
        private spaceClick: p5.SoundFile
        private boooo: p5.SoundFile
        private tadaa: p5.SoundFile
        private yaaayy: p5.SoundFile

        constructor() {
                this.spaceClick = (window as any).loadSound('./assets/sounds/Stapler-SoundBible.com-374581609.mp3')
                this.swoosh = (window as any).loadSound('./assets/sounds/Swoosh 3-SoundBible.com-1573211927.mp3')
                this.boooo = (window as any).loadSound('./assets/sounds/boooo.mp3')
                this.tadaa = (window as any).loadSound('./assets/sounds/tadaa.mp3')
                this.yaaayy = (window as any).loadSound('./assets/sounds/yaaayy.mp3')
        }

        spaceBarSound() {
                this.spaceClick.play()
        }

        //check if required (not working correctly)
        swooshSound() {
                this.swoosh.play()
        }

        booooSound() {
                this.boooo.play()
        }

        tadaaSound() {
                this.tadaa.play()
        }

        yaaayySound() {
                this.yaaayy.play()
        }
}