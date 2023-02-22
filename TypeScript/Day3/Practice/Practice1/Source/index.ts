// generic 

// generic class 
interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{ 
    process(key:T, val:U):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'nidit');




// generic constraint 
interface Shape {
    draw();
}
function drawShapes<S extends Shape>(shapes: S[]): void{
     shapes.forEach(shape => shape.draw());
}

class Circle implements Shape{
    draw() {
        console.log(`drawing Circle`)
    }
}

class Rectangle implements Shape{
    draw() {
        console.log(`drawing Rectangle`)
    }
}

let circle = new Circle();
let rectangle = new Rectangle();
drawShapes([circle, rectangle]);