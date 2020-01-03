// let buttonPunk: p5.Element
// let buttonMetal: p5.Element
// let buttonPop: p5.Element
// let buttonBlues: p5.Element

type ExtendedElement = p5.Element & {
    option: (value: string) => void
    changed: (callback: () => void) => void
    value: () => string
}

class MusicChoice {
    private sel: any

    constructor() {
        this.sel = createSelect()
    }
    
    public createSelector() {
        this.sel.position((20),(40))
        this.sel.size(150, 40)
        this.sel.style('font-size', '18px')
        this.sel.style('background-color', 'black')
        this.sel.style('color', 'red')
        this.sel.style('border', 'none')

        this.sel.option('silence')
        this.sel.option('punk')
        this.sel.option('metal')
        this.sel.option('pop')
        this.sel.option('blues')
        this.sel.changed(this.selectMusic)
    }

    private selectMusic() {
        if (this.sel.value() === 'punk') {
            punk.play()
            popp.stop()
            metal.stop()
            blues.stop()
        } else if (this.sel.value() === 'pop') {
            popp.play()
            punk.stop()
            metal.stop()
            blues.stop()
        } else if (this.sel.value() === 'metal') {
            metal.play()
            punk.stop()
            blues.stop()
            popp.stop()
        } else if (this.sel.value() === 'blues') {
            blues.play()
            popp.stop()
            punk.stop()
            metal.stop()
        } else if (this.sel.value() === 'silence') {
            popp.stop()
            punk.stop()
            metal.stop()
            blues.stop()
        }
    }
}

