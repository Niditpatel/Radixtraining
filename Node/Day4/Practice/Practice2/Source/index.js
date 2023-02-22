const util = require('node:util');
const fs = require('fs');


// util.callbackify takes async function and return errfirst callback style function 
async function fn() {
  return 'hello everyone this is util.callbackify';
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log("result of callbackify :",ret);
});

// util.debuglog still to figure out
const debuglog = util.debuglog('foo');
debuglog('hello from foo [%d]', 123);

// util.deprecate
const fn1 = util.deprecate(function abc(){console.log('abc')},'deprecated','DEP00053');
// fn1();

// util.format return custom formated data
console.log(util.format('%s:%s','Name','Nidit'));
console.log(util.format('formated %s:%o','Myobj',{1:'a',2:'b',3:'c',4:'d'}));

// util.formatWithOptions 
console.log(util.formatWithOptions({ depth:0,colors: true ,showHidden:true,showProxy:true}, 'See object %O:%s%s', { rank : 1 }));

// util.getSystemErrorName
fs.access('home/node/myfile.js',(err)=>{
    const name = util.getSystemErrorName(err.errno);
    console.log("err code :",name);
})

// util.getSystemErrorMap
fs.access('home/node/myfile.js',(err)=>{
    const errMap = util.getSystemErrorMap()
    const name = errMap.get(err.errno);
    console.log("err code and name :",name);
})