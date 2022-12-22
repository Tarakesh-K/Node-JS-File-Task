var currentDate = new Date();
var date = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
var datetime = date + "-" + time;
console.log(date + " - " + time);
const http = require("http");

var fs = require("fs");
const uuid = require("uuid");

// let req = request.get(__dirname)
//     .on('response', res => {
//         let resType = res.headers[time];
//         let fileName = figureOutExtension(resType); //get the file name based on the content-type
//         req.pipe(fs.createWriteStream(datetime));
//     });

// console.log(req)

// var http = require("http");

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const result = datetime;
//     res.write('Current Date and Time ');
//     res.write(datetime);
//     res.end();
// });

// server.listen(1234);

// const events = require("events");
// const myEmitter = new events.EventEmitter;
// var util = require("util");

// myEmitter.on('someEvent', function(mssg) {
//     console.log(mssg);
// })

// myEmitter.emit('someEvent', 'the event was emitted');

// var Person = function(name) {
//     this.name = name;
// }

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person("ryu");
// var people = [james, mary, ryu];

// people.forEach(function(person) {
//     person.on('speak', function(mssg) {
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a curry');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.body);
})