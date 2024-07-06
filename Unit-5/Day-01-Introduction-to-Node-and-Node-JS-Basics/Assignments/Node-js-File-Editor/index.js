const fs = require("fs");
const path = require("path");

const {
  createFile,
  appendToFile,
  readFile,
  renameFile,
  deleteFile,
  listDirectory
} = require("./functions.js");

// const operations = {
//     read: readFile,
//     delete: deleteFile,
//     create: createFile,
//     rename: renameFile,
//     append: appendToFile,
//     listDirectory: listFile,
// }

const args = process.argv.slice(2);
const operation = args[0];
const file = process.argv[3];
const newFileName = args[2];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case "create": {
    createFile(file);
    break;
  }
  case "append": {
    appendToFile(file, content);
    break;
  }
  case "read": {
    readFile(file);
    break;
  }
  case "rename": {
    renameFile(file, newFileName);
    break;
  }
    case "delete" : {
        deleteFile(file)
      break;
    }
    case "list" : {
        listDirectory(file)
      break;
    }

  //   default:
  //     console.log(`Invalid operation '${operation}'`);
}
