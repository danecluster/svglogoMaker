class Shape{
    constructor(){
        this.shapeColor = "";
    }

setShapeColor(shapeColor){
    this.shapeColor=shapeColor;
}
}

class Triangle extends Shape {
    render(){
        return `<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
        stroke="green" fill="${this.shapeColor}" stroke-width="5"/>`;
    }
}