///OS bulit-in module provides useful features for interacting with the operating systtem and the server
const os = require("os");

///info about current user
const user = os.userInfo();
console.log(user);

//method returns system uptime is seconds
console.log(`The systemn uptime ⬆ is ${os.uptime()}`);

//current OS info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
