//allows us to interact with the file path easily
const path = require("path");

//platform specific seperator (this will show for windows as I am using windows)
console.log(path.sep);

//joins sequences of path segments using platform seperator and returns a normalizied resulting path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

///returns file path base
const base = path.basename(filePath);
console.log(base);

///return absolute path
const absPath = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absPath);
