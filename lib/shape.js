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

class Square extends Shape {
    render(){
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>`;
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.shapeColor}" stroke-width="5"/>`;
    }
}

module.exports = {Triangle, Square, Circle};

