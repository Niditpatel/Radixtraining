// union 
function paddingleft(value, padding) {
    if (typeof (padding) === "number") {
        console.log(value.charAt(padding));
    }
    else {
        console.log(padding.concat(value));
    }
}
paddingleft("hello", 5);
paddingleft("everyone", "hello");
// class 
class greet {
    constructor() {
        this.name = "good morning";
    }
}
var newgreet = new greet;
console.log(newgreet.name);
// readonly 
class readprop {
    constructor() {
        this.name = "nidit";
    }
}
var newreadprop = new readprop();
// newreadprop.name ="visaveliya";
// constructors 
class constrt1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var newconstrt1 = new constrt1(2, 3);
console.log(newconstrt1.x);
// super calls 
class base {
    constructor() {
        this.a = 5;
    }
}
class supercall extends base {
    constructor() {
        super();
        console.log(this.a);
    }
}
var newsuper = new supercall();
console.log(newsuper);
// methods 
class Point {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
var newpoint = new Point();
newpoint.scale(3);
console.log(newpoint.x);
class hello {
    printHello() {
        console.log("helloooo!");
    }
}
var newhello = new hello();
newhello.printHello();
//  extands class 
class Dog {
    Bark() {
        console.log("dog bark like");
    }
}
class Dog2 extends Dog {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog2();
d.Bark();
d.woof(3);
//   generic classes
class KeyValuePair {
    setKeyValue(key, val) {
        this.key = key;
        this.val = val;
    }
    display() {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}
let kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display();
let kvp2 = new KeyValuePair();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display();
// ----------------------------------------
// enums 
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
let mediaType = getMedia('Forbes');
console.log(mediaType);
// ----------------------------------
// functions 
// function type expression 
const RectArea = function (width, height) {
    return width * height;
};
console.log(RectArea(3, 4));
// generic functions
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
// multi type generic function 
function displayType(id, name) {
    console.log(typeof (id) + ", " + typeof (name));
}
displayType(1, "nidit");
let empObj = {
    empCode: 1,
    empName: "nidit"
};
// complie error if we try to change the value of readonly 
// empObj.empCode = 100;
empObj.empName = "nidit99";
