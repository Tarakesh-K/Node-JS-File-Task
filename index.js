var fs = require("fs");
const express = require("express");
const upload = require("express-fileupload");
const http = require("http");
var path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const uploads = "./uploads/";
const events = require("events");
const { response } = require("express");
const EventEmitter = new events.EventEmitter;
global.document = new JSDOM().window.document;

const app = express();
app.use(express.static('public'));

var currentDate = new Date();
var date = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
var time = currentDate.getHours() + "-" + currentDate.getMinutes() + "-" + currentDate.getSeconds();
var datetime = date + " - " + time + ".txt";

app.use(upload());

app.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

const createFile = () => {
  fs.appendFile(datetime, time, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("File Created");
    }
  });
};

const renameFile = () => {
  var oldFilePath = "G:/Visual Studio Code/Front End Projects/For Assignment/NodeJS/NodeJS Task-2/" + datetime;
  var newFilePath = "G:/Visual Studio Code/Front End Projects/For Assignment/NodeJS/NodeJS Task-2/uploads/" + datetime;

  fs.rename(oldFilePath, newFilePath, renameCallback);

  function renameCallback(err) {
    if (err) {
      console.log('Error in moving file');
      console.log(err.message);
    } else {
      console.log("Moved Successfully");
    }
  }
};

const uploadFileToFolder = () => {
  createFile();
  renameFile();
};

app.get('/create', (req, res, next) => {
  res.sendFile(__dirname + "/file-crtd.html", function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});

app.post('/uploads', (req, res) => {
  res.sendFile(__dirname + "/uploads");
});

app.listen(3001);