//gives us access to interacting with the file system
const { readFileSync, writeFileSync } = require("fs");

//this method allows us to synchronously read files. the method requires two arguments the path and then the file encoding
const first = readFileSync("../content/first.txt", "utf-8");
const second = readFileSync("../content/second.txt", "utf-8");

console.log(first, second);

//this method allows us to write a file synchronously it takes two arguments the filename then the value we want to pass.
//this method creates a new file if it isnt there, or replaces an existing file if it exists already.
//to not overwrite a file the method takes a third argument which is an options object

writeFileSync(
  "../content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);
