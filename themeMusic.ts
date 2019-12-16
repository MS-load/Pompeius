let buttonPunk: p5.Element
let buttonMetal: p5.Element
let buttonPop: p5.Element
let buttonBlues: p5.Element

class MusicChoice {
    public mousePresser() {
        buttonPunk.mousePressed(this.togglePunkPlaying)
        buttonMetal.mousePressed(this.toggleMetalPlaying)
        buttonPop.mousePressed(this.togglePopPlaying)
        buttonBlues.mousePressed(this.toggleBluesPlaying)
    }


    public createButtons() {
        buttonPunk = createButton('punk')
        buttonMetal = createButton('metal')
        buttonPop = createButton('pop')
        buttonBlues = createButton('blues')
    }

    

    public togglePunkPlaying() {
        if (!songPunk.isPlaying()) {
            songPunk.play()
            buttonPunk.html('pause')
        } else {
            songPunk.pause()
            buttonPunk.html('punk')
        }
    }

    public toggleMetalPlaying() {
        if (!songMetal.isPlaying()) {
            songMetal.play();
            buttonMetal.html('pause')
        } else {
            songMetal.pause()
            buttonMetal.html('metal')
        }
    }

    public togglePopPlaying() {
        if (!songPop.isPlaying()) {
            songPop.play();
            buttonPop.html('pause')
        } else {
            songPop.pause()
            buttonPop.html('pop')
        }
    }

    public toggleBluesPlaying() {
        if (!songBlues.isPlaying()) {
            songBlues.play();
            buttonBlues.html('pause')
        } else {
            songBlues.pause()
            buttonBlues.html('Blues')
        }
    }
}