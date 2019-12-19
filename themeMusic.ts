// let buttonPunk: p5.Element
// let buttonMetal: p5.Element
// let buttonPop: p5.Element
// let buttonBlues: p5.Element

let sel: p5.Element

class MusicChoice {

    public createButtons() {
        background(200)
        sel = createSelect()
        sel.position(10, 10)
        sel.option('silence')
        sel.option('punk')
        sel.option('metal')
        sel.option('pop')
        sel.option('blues')
        sel.changed(this.selectMusic)
    }
    public selectMusic() {
        if (sel.value() === 'punk') {
            punk.play()
            popp.stop()
            metal.stop()
            blues.stop()
        } else if (sel.value() === 'pop') {
            popp.play()
            punk.stop()
            metal.stop()
            blues.stop()
        } else if (sel.value() === 'metal') {
            metal.play()
            punk.stop()
            blues.stop()
            popp.stop()
        } else if (sel.value() === 'blues') {
            blues.play()
            popp.stop()
            punk.stop()
            metal.stop()
        } else if (sel.value() === 'silence') {
            popp.stop()
            punk.stop()
            metal.stop()
            blues.stop()
        }
    }
}


// public mousePresser() {
    //     buttonPunk.mousePressed(this.togglePunkPlaying)
    //     buttonMetal.mousePressed(this.toggleMetalPlaying)
    //     buttonPop.mousePressed(this.togglePopPlaying)
    //     buttonBlues.mousePressed(this.toggleBluesPlaying)
    // }





        // public togglePunkPlaying() {
        //     if (!songPunk.isPlaying()) {
        //         songPunk.play()
        //         buttonPunk.html('pause')
        //     } else {
        //         songPunk.pause()
        //         buttonPunk.html('punk')
        //     }
        // }

        // public toggleMetalPlaying() {
        //     if (!songMetal.isPlaying()) {
        //         songMetal.play();
        //         buttonMetal.html('pause')
        //     } else {
        //         songMetal.pause()
        //         buttonMetal.html('metal')
        //     }
        // }

        // public togglePopPlaying() {
        //     if (!songPop.isPlaying()) {
        //         songPop.play();
        //         buttonPop.html('pause')
        //     } else {
        //         songPop.pause()
        //         buttonPop.html('pop')
        //     }
        // }

        // public toggleBluesPlaying() {
        //     if (!songBlues.isPlaying()) {
        //         songBlues.play();
        //         buttonBlues.html('pause')
        //     } else {
        //         songBlues.pause()
        //         buttonBlues.html('Blues')
        //     }
        // }