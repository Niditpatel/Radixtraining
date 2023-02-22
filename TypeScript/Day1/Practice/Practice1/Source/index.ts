
// number type 
function sum(a:number,b:number):number{

    return a+b;
}
console.log(sum(3,5));

// obj type   
function printFullName(arg:{x:string,y:string}):string{
    var name = `your Name is :` +arg.x +arg.y
    return name;
}
console.log(printFullName({x:"nidit",y:"visaveliya"}));


// union type 
function printId(id:number|string):void{
    console.log(id);
}
printId(5);

// type alias 
type point = {
x:number;
y:number;
}
function printcoordinates(arg:point):void{
    console.log("The coordinate's x value is  " + arg.x);
    console.log("The coordinate's y value is  " + arg.y);
}
printcoordinates({x:100,y:300});


// interfaces 

interface point1 {
    x:number;
    y:number;
}

function printcoordinates1(arg:point1):void{
    console.log("The coordinate's x value is  " + arg.x);
    console.log("The coordinate's y value is  " + arg.y);
}
printcoordinates1({x:300,y:140});


// type assertions 

let changingString = "hello world ";
changingString;

// null and undefined 
function doSomething(x: string | null) {
    if (x === null) {
        console.log(" do nothing");
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }

//   number and number methods 
let a:number = 5;
//  toExponential( )
console.log("exp method " , a.toExponential(1.2));

// toFixed()
let b:number = 1.2234
console.log("fixed method ", b.toFixed(2));

// toLocaleString()
let c :number = 1234567.1234;
console.log(c.toLocaleString('en-IN', {style:'currency', currency:'INR'}));

// toPrecision()
let d:number = 1233445.1232;
console.log(d.toPrecision(4));

// toString()
let e:number = 1233454545.1233;
console.log(e.toString());

// valueOf()
let f:number = 1234545666.12334;
console.log(f.valueOf());


// string and strings methods 


// charAt() 
let name1 :string = "nidit";
console.log(name1.charAt(2));

// concat()
let firstname :string = "nidit ";
let lastname :string = "visaveliya ";
console.log(firstname.concat(lastname));

// indexOf()
let onestring :string = " your name is nidit";
console.log(onestring.indexOf("nidit"));


// replace()
let secondstring :string = " youe full name is nidit visaveliya";
console.log(secondstring.replace("youe","your"));

// split ()
let thirdstring :string = "hello everyone";
console.log(thirdstring.split(" "));

// toUpperCase()
let fourthstring :string = " you are working as trainee software engineer";
console.log(fourthstring.toUpperCase());

// toLowerCase()
let fifthstring :string = "JUST BE COOL";
console.log(fifthstring.toLocaleLowerCase());

// charCodeAt()
let string6:string = "hello everyone";
console.log(string6.charCodeAt(3));

// codePointAt()
let string7 :string = "hello everyone";
console.log(string7.codePointAt(5));

// includes() 
let string8 :string = "hello world";
console.log(string8.includes("hello"));

// endesWith()
let string9 :string = " hello everyone";
console.log(string9.endsWith("e"));

// lastindexof()
let mystring :string = "it's not abug it's feature";
console.log(mystring.lastIndexOf("t"));

// localecompare()
let mystring1 :string = "cd";
let mystring2 :string = "ab ";
console.log(mystring1.localeCompare(mystring2));

// match ()
let newstring :string = "abcd"
console.log(newstring.match(/[a-z]{4}/));


// normalize()
let newstr :string = "CO2 h2o";
console.log(newstr.normalize());

// padend()
console.log(newstr.padEnd(4));

// padstart() 
console.log(newstr.padStart(5));

// repeat()
console.log(newstr.repeat(2));

// search()
console.log(newstr.search("O"));

// sclice() 
console.log(newstr.slice(0,1));

// splice() 
console.log(newstr.startsWith("C"));

// Substr()
console.log(newstr.substr(0,2));

// substring() 
console.log(newstr.substring(1,4));


// tolocaleuppeercase 
console.log(newstr.toLocaleUpperCase());

// tolocalelowercasee
console.log(newstr.toLocaleLowerCase());

// trim 
let newstr2 :string = "     hello everyone          ";
console.log(newstr2.trim());

// trimleft 
console.log(newstr2.trimEnd());

// trimright()
console.log(newstr2.trimStart());

// ---------------------------------------

//  type any 

let abc:any ;
abc = "hello";

console.log(abc);

// --------------------------------

// array 
var list:number[] = [3,5,6,7,4,2,1];
// or 
var list1:Array<number> = [1,2,3,4,5,6,7];


// multitype array 
let values : (string | number)[] =["nidit",1,"visaveliya",2,3,4,"hello"]


// array methods 

// pop 
console.log(list.pop());
console.log(list);

// push
list.push(8);
console.log(list);

// sort 
list.sort(function(a,b){return a-b });
console.log(list);

// conact 
console.log(list.concat(list1));

// indexof 
console.log(list.indexOf(3));

// copywithin 
console.log(list.copyWithin(2,1));

// fill 
let myarr:number[]=[0,1,2];
myarr.fill(1,0,3);
console.log(myarr);

// shift 
console.log(myarr.shift());

// filter 
var mylist = list.filter(val => (val > 3));
console.log(mylist);