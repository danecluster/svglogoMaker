class Svg {
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    render(){
        return`<svg height="100" width="100">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text, color){
        this.textEl=`<text x="150" y="125" font-size="9" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
}
module.exports=Svg