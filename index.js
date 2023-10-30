const inquirer=require("inquirer")
const fs=require("fs")
const path=require("path")
const Svg=require("./lib/svg")
const {Square, Circle, Triangle}=require("./lib/shape")
function startApp(){
    inquirer.prompt([
        {
            type:"input",
            name:"text",
            message:"Enter three letters",
        },
        {
            type:"input",
            name:"textColor",
            message:"What color would you like for the text?",
        },
        {
            type:"list",
            name:"shapes",
            message:"What shape would you like?",
            choices:["Circle", "Square", "Triangle"],
        },
        {
            type:"input",
            name:"shapeColor",
            message:"What color do you want the shape to be?",
        },
    ]).then((pumperknickle)=>{
        let chosenShape;
        switch(pumperknickle.shapes){
            case "Circle":
                chosenShape=new Circle()
                break;
            case "Square":
                chosenShape=new Square()
                break;
            case "Triangle":
                chosenShape=new Triangle()
                break;
        }

        chosenShape.setShapeColor(pumperknickle.shapeColor)
        const sourdough=new Svg()
        sourdough.setShape(chosenShape)
        sourdough.setText(pumperknickle.text,pumperknickle.textColor)
        fs.writeFileSync("./examples/cool.svg",sourdough.render())
    })
}
startApp()