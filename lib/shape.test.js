const { Triangle, Square, Circle} = require("./shape");

describe("generate Square", () => {
    test("should display square polygon with blue color", () => {
        let expectedShape = `<rect x="10" y="10" width="30" height="30" stroke="black" fill="blue" stroke-width="5"/>`;
        let square = new Square();
        square.setShapeColor("blue");
        let actualShape=square.render();
        expect(actualShape).toEqual(expectedShape);
    })
})