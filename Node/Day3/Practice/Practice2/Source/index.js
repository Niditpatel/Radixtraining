const fs = require('fs');
const { AreaOfRactangle, PerimeterOfRactangle } = require('./Ractangle');

var ractangle = (process.argv).slice(2);
var length = parseInt( ractangle[0]);
var width =parseInt( ractangle[1]);

console.log(AreaOfRactangle(width,length));
console.log(PerimeterOfRactangle(width,length));