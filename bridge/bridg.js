class Gesture {
    constructor(output){
        this.output = output
    }
    tap(){
        this.output.click()
    }
    swipe(){
        this.output.move()
    }
    pinch(){
        this.output.drag()
    }
    pan(){
        this.output.zoom()
    }
}
class Mouse {
    constructor(output){
        this.output = output
    }
    click(){
        this.output.click()
    }
    move(){
        this.output.drag()
    }
    wheel(){
        this.output.zoom()
    }
}
class Screen {
    click(){
        console.log('Screen Clicked');
    }
    move(){
        console.log('Screen Moved');
    }
    drag(){
        console.log('Screen Dragged');
    }
    zoom(){
        console.log('Screen Zoomed');
    }
}
const screen = new Screen()

const gesture = new Gesture(screen)
const mouse = new Mouse(screen)

mouse.click()
mouse.move()
mouse.wheel()

// gesture.pinch()
// gesture.swipe()
// gesture.tap()