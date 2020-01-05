
type ExtendedElement = p5.Element & {
    option: (value: string) => void
    changed: (callback: () => void) => void
    value: () => string
}
let sel: ExtendedElement
class MusicChoice {

    constructor() {
       sel = createSelect() as ExtendedElement
    }

    public createSelector() {
        sel.position((20), (40))
        sel.size(100, 40)
        sel.style('font-size', '18px')
        sel.style('background-color', 'black')
        sel.style('color', 'red')
        sel.style('border', 'none')

        sel.option('silence')
        sel.option('punk')
        sel.option('metal')
        sel.option('pop')
        sel.option('blues')
        sel.changed(this.selectMusic)
    }

    private selectMusic() {
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

