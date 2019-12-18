let gameFrame: GameFrame
let gameSettings: GameSettings
let inputSettings: InputSettings

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */


function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(120)
    fullscreen()
    gameFrame = new GameFrame()
    gameSettings = new GameSettings()
    inputSettings = new InputSettings()
    inputSettings.getUserName()
}

/**
 * Built in draw function in P5
 * This is a good place to call public funcions of the object
 * you created in the setup function above
 */
function draw() {
    background(0)
    gameFrame.draw()
    inputSettings.update()
    inputSettings.draw()

}




/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}