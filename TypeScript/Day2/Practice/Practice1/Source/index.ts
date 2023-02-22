// union 

function paddingleft(value: string, padding: (number | string)): void {
    if (typeof (padding) === "number") {
        console.log(value.charAt(padding));
    } else {
        console.log(padding.concat(value));
    }
}
paddingleft("hello", 5);
paddingleft("everyone", "hello");



// class 


class greet {
    name: string;
    constructor() {
        this.name = "good morning";
    }
}
var newgreet = new greet;
console.log(newgreet.name);


// readonly 
class readprop {
    readonly name: string = "nidit";
}
var newreadprop = new readprop();
// newreadprop.name ="visaveliya";


// constructors 
class constrt1 {
    x: number;
    y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}
var newconstrt1 = new constrt1(2, 3);
console.log(newconstrt1.x);

// super calls 

class base {

    a: number = 5;
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
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}
var newpoint = new Point();
newpoint.scale(3);
console.log(newpoint.x);


// class heritage 


// impliments class 
interface printhello {
    printHello(): void;
  }
   
  class hello implements printhello {
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
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d = new Dog2();
  d.Bark();
  d.woof(3);

//   generic classes
class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill"); 
kvp2.display(); 


// ----------------------------------------
// enums 

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string) {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType = getMedia('Forbes'); 
console.log(mediaType);

// ----------------------------------
// functions 

// function type expression 
const RectArea = function(width:number, height:number) {
    return width * height;
  };
  
  console.log(RectArea(3, 4));

// generic functions

function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); 
myStrArr.push("Hello TypeScript");

// multi type generic function 
function displayType<T, U>(id:T, name:U): void { 
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType<number, string>(1, "nidit");

//   ----------------------------------
// interface 
interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj:IEmployee = {
    empCode:1,
    empName:"nidit"
}

// complie error if we try to change the value of readonly 
// empObj.empCode = 100;
empObj.empName = "nidit99";