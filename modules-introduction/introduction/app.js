///Globals

//__dirname - path to current directory
//__filname - file name
//require - function to use modules
//module - info about current module (file)
//process - info about env - where the program is being executed

//we have access to the setInterval and setTimeout functions in node.js
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
