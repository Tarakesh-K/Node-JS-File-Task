var fs = require("fs");

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