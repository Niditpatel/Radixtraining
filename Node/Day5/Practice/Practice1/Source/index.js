const { once } = require('events');
const EventEmitter = require('events');

var MyEventEmitter = new EventEmitter();



// create your own event with event emitter 
MyEventEmitter.on('saymyname',()=>{
    console.log("Your Name Is Nidit");
});

MyEventEmitter.emit('saymyname');

// passig agruments and this to listner 
MyEventEmitter.on('Sum',(a,b)=>{
    console.log(a+b,this);
});

MyEventEmitter.emit('Sum',2,3);

// handling event only once using eventemitter.once()
let m = 0;
MyEventEmitter.once('event',()=>{
    console.log(++m);
});
MyEventEmitter.emit('event');
MyEventEmitter.emit('event'); // no use of emit sec time it will emit only one time 

// multiple thing on same name event and also get all event names with .eventnames()
MyEventEmitter.on('event1',()=>{
    console.log("hello foirst event");
});
MyEventEmitter.on('event1',(a1,b1)=>{
    console.log(`hello sec event with ${a1} and ${b1}`);
});
MyEventEmitter.on('event1',(...arg)=>{
console.log(`hello third event with ${arg.join(',')}`);
});
MyEventEmitter.emit('event1',1,2,3,4,5,6,7,8,9);
console.log(MyEventEmitter.eventNames());

