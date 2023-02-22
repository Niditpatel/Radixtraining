const path = require('path');

var mypath = '/home/nidit.visaveliya/Desktop/2602-Nidit.V-Aug22/Node/Day4/Practice/Practice1/Source/index.js'

// path.parse for parsing the path 
var pathObj = path.parse(__filename);
console.log("ParsedPath :",pathObj);


// path.basename returns last portion of the path
var basename = path.basename(mypath,'.js');
console.log("Basename : ",basename);


// path.delimiter seperats the path using delimiter and return a array of seperated paths
console.log(process.env.PATH);
console.log("Seperated Path by delimiter :",process.env.PATH.split(path.delimiter));

// path.dirname return the dir name of the path
console.log("dir : ",path.dirname(mypath));

// path.extname returns the extension of the path
console.log("extension :",path.extname(mypath));


// path.format it takes an data as key - value pair and return path as a string opposite of the path.parse()
var formatedPath =  path.format({
    root : '/',
    dir :'/home/nidit.visaveliya/Desktop/2602-Nidit.V-Aug22/Node/Day4/Practice/Practice1/Source',
    base : 'index.js',
    ext:'js',
    name:'index'
});
console.log("formatedPath :",formatedPath);

// path.isAbsolute check whether the path is absolute or not 
console.log("Checking for Absolute :",path.isAbsolute(mypath));
console.log("Checking for Absolute :",path.isAbsolute('./source/index.js'));

// path.join it's joins all given path segments together
console.log("Joined the path segments by path.join : ",path.join('home','node','module4','practice1','source','index.js')); 

// path.normalize it normalize path by replacing multi \ or / by specific path segment seperator
console.log(path.normalize('home//node///module4/practice1/////source/../../'));


// path.resolve join the segments and return  the absloute path
console.log(path.resolve('hello','foo/bar', 'tmp/file/'));
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));